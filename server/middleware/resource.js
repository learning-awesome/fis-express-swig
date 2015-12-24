var fs = require('fs');
var path = require('path');
var log=console.log;

function ResourceApi(config_dir) {
    this.config_dir = config_dir;
    this.maps = undefined;
}

/**
 * Conver source map id to source url.
 * @see /config/ns-map.json file.
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
ResourceApi.prototype.resolve = function(id) {
    var info = this.getInfo(id);
    
    return info ? info.uri : '';
};

ResourceApi.prototype.getInfo = function(id, ignorePkg) {

    var info;

    if (this.maps || this.lazyload()) {
        info = this.maps['res'][id];
        if (!ignorePkg && info && info['pkg']) {
            info = this.maps['pkg'][info['pkg']];
        }
    }

    return info;
};

ResourceApi.prototype.getPkgInfo = function(id) {

    var info;

    if (this.maps || this.lazyload()) {
        info = this.maps['pkg'][id];
    }

    return info;
};


ResourceApi.prototype.lazyload = function () {

    var mapFilePath = path.join(this.config_dir, 'map.json');

    console.log('---mapFilePath:' + mapFilePath);

    try {
        var mapJSONStr =  fs.readFileSync(mapFilePath);
        this.maps = JSON.parse(mapJSONStr);
        console.log('>>>>mapJSONStr:'+ mapJSONStr);
    } catch (e) {
        console.log('---read map error:' + e.toString());
        return false;
    }
    return true;
};

ResourceApi.prototype.destroy = function (id) {
    this.maps = null;
};


module.exports = function (options) {
    options = options || {};

    var config_dir = options['config_dir'];
    var cache = options.cache;
    var singlon = new ResourceApi(config_dir);

    return function (req, res, next) {
        var destroy;

        res.fis = cache ? singlon : new ResourceApi(config_dir);

        destroy = function() {
            res.removeListener('finish', destroy);
            //res.removeListener('close', destroy);

            cache && res.fis.destroy();
            res.fis = null;
        };

        res.on('finish', destroy);
        //res.on('close', destroy);

        next();
    };
};

module.exports.ResourceApi = ResourceApi;