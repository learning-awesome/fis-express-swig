<h2>async 此类 widget 在输出时，也只会输出个壳子，但是内容在 body 输出完后，chunk 输出 js 自动填充。widget 将忽略顺序，谁先准备好，谁先输出。</h2>

{% script %}
    require('client/views/widget/pagelets/async/async.js');
{% endscript %}