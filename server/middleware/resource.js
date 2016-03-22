var fs = require('fs');
var path = require('path');
var log=console.log;

function ResourceApi(root, prefix) {
    this.root = root;
    this.prefix = prefix;
    this.lazyload();
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

    // resId:widget/pagelets/async/async.tpl
    var info;
    if (id && this.maps || this.lazyload()) {
        var resId = id.replace(this.root + '/', "");
        console.log('getInfo[resId]1:' + resId);
        if(!new RegExp('^'+this.prefix).test(resId) ){
            if(new RegExp('.tpl$').test(resId)){
                resId = path.join(path.join(this.prefix , 'views'), resId);
            }else{
                resId = path.join(this.prefix, resId);
            }
        }
        console.log('getInfo[resId]2:' + resId);
        info = this.maps['res'][resId];
        if (!ignorePkg && info && info['pkg']) {
            info = this.maps['pkg'][info['pkg']];
        }
        console.log('getInfo[id]:' + id + ' [resId]:' + resId + ' [info]:' + JSON.stringify(info));
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

    var mapFilePath = path.join(path.join(this.root, this.prefix), 'map.json');

    console.log('---mapFilePath:' + mapFilePath);

    try {
        var mapJSONStr =  fs.readFileSync(mapFilePath);
        this.maps = JSON.parse(mapJSONStr);
        //console.log('>>>>mapJSONStr:'+ mapJSONStr);
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

    var root = options.root||'';
    var prefix = options.prefix||'';
    var cache = options.cache;
    var singlon = new ResourceApi(root, prefix);

    return function (req, res, next) {
        var destroy;

        res.fis = cache ? singlon : new ResourceApi(root, prefix);

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