

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
                useMap: false,
                useHash: false,
                useCompile: false
            },

            {
                reg: /^\/server\/(.*)/i,
                useMap: false,
                useHash: false,
                useCompile: false
            },
            {
                reg: /^\/client\/views\/page\/(.+\.tpl)$/i,
                isMod: true,
                release: 'client/views/page/$1',
                url: 'page/$1',
                extras: {
                    isPage: true
                }
            },
            {
                reg: /^\/client\/views\/page\/(.*\.(js|css))$/i,
                isMod: true,
                url: 'public/page/$1',
                release: 'client/public/page/$1'
            },
            {
                reg: /^\/client\/views\/widget\/(.*\.tpl)$/i,
                isMod: true,
                url: 'widget/$1',
                release: 'client/views/widget/$1'
            },

            {
                reg: /^\/client\/views\/widget\/(.*\.(js|css))$/i,
                isMod: true,
                useHash:true,
                url: 'public/widget/$1',
                release: 'client/public/widget/$1'
            },
            {
                reg: /^\/client\/public\/component\/(.*)/i,
                isMod:true,
                url: 'public/component/$1',
                release: 'client/public/component/$1'
            },
            {
                reg: /^\/client\/public\/static\/(.*)/i,
                url: 'public/static/$1',
                release: 'client/public/static/$1'
            },

            {
                reg: /^\/(test)\/(.*)/i,
                isMod: false,
                release: '/$1/$2'
            },

            {
                reg: 'map.json',
                release: 'client/map.json'
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