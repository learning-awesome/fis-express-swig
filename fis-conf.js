

fis.config.merge({
    statics: '/public',
    namespace: '',

    server: {
        type: 'node',
        rewrite: 'index.js',
        clean: {
            exclude: "controllers/*,config/config.json,config/development.json,locales/*,models/*,server.js"
        }
    },

    modules: {

        parser: {
            less: 'less',
            sass: 'sass',
            scss: 'sass',
            tmpl: 'bdtmpl',
            po: 'po'
        },

        preprocessor: {
            tpl: 'extlang'
        },

        postprocessor: {
            tpl: 'require-async',
            js: 'jswrapper, require-async'
        }
    },

    roadmap: {
        ext: {
            less: 'css',
            sass: 'css',
            scss: 'css',
            tmpl: 'js',
            po: 'json'
        },

        path: [
            {
                reg: /^\/(node_modules)\/(.*)/i,
                //release: '/$&'
                release:false
            },
            {
                reg: 'server.js',
                useMap:false,
                release: '/server.js'
            },

            {
                reg: /^\/server\/(.*)/i,
                useMap:false,
                release: '$&'
            },
            {
                reg: /^\/client\/views\/page\/(.+\.tpl)$/i,
                isMod: true,
                release: '/client/views/$1',
                url: '$1',
                extras: {
                    isPage: true
                }
            },
            {
                reg: /^\/client\/views\/widget\/(.*\.tpl)$/i,
                isMod: true,
                url: 'widget/$1',
                release: '/client/views/widget/$1'
            },

            {
                reg: /^\/client\/views\/widget\/(.*\.(js|css))$/i,
                isMod: true,
                useHash:true,
                url: '/widget/$1',
                release: '/client/public/widget/$1'
            },

            {
                reg: /^\/client\/public\/(.*)/i,
                url: 'static/$1',
                release: '/client/public/$1'
            },

            {
                reg: /^\/(test)\/(.*)/i,
                isMod: false,
                release: '/$1/$2'
            },

            {
                reg: 'map.json',
                release: '/client/map.json'
            },
            {
                reg: "**.md",
                release: false
            },
            {
                reg: "**.iml",
                release: false
            }

        ]
    },

    settings: {
        postprocessor: {
            jswrapper: {
                type: 'amd'
            }
        }
    }
});