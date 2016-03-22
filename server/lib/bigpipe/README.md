fiswig-bigpipe 
===========

- sync 默认就是此模式，直接输出。
- quicking 此类 widget 在输出时，只会输出个壳子，内容由用户自行决定通过 js，另起请求完成填充，包括静态资源加载。
- async 此类 widget 在输出时，也只会输出个壳子，但是内容在 body 输出完后，chunk 输出 js 自动填充。widget 将忽略顺序，谁先准备好，谁先输出。
- pipeline 与 async 基本相同，只是它会严格按顺序输出。

[![Build Status](https://travis-ci.org/fex-team/fiswig-bigpipe.svg?branch=master)](https://travis-ci.org/fex-team/fiswig-bigpipe)
[![Coverage Status](https://coveralls.io/repos/fex-team/fiswig-bigpipe/badge.png)](https://coveralls.io/r/fex-team/fiswig-bigpipe)

An express.js middleware for fis widget pipline output.

This middleware is bundled in [fiswig](https://github.com/fex-team/fiswig).

With [fiswig](https://github.com/fex-team/fiswig) you can simple use the pagelet like
this.

```tpl
{% extends './layout.tpl' %}

{% block content %}
    {% widget "./pagelets/jumbotron/jumbotron.tpl" id="jumbotron" mode="async" %}
{% endblock %}

```

And in your controller, you can assign async data like this.

```javascript

router.get('/', function(req, res) {

    // pagelet Id
    res.bind('jumbotron', fuction(setter) {

        // simulate an async progress
        setTimeout(function() {
            
            // now set data to the pagelet
            setter(null, {
                asyncData: 'xxx'
            });
        }, 2000);
    });

    res.render('page/index.tpl');
});

```

Then the jumbotron content will be rendered in chunk mode.