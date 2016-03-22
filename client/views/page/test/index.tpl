{% extends 'page/layout.tpl' %}

Title:{{title}}


{% block content %}

<div class="row">
    <div class="col-md-4">
        {% widget "widget/pagelets/async/async.tpl" id="async" mode="async" %}
    </div>
    <div class="col-md-4">
        {% widget "widget/pagelets/quicking/quicking.tpl" id="quicking" mode="quicking" %}
    </div>
    <div class="col-md-4">
        {% widget "widget/pagelets/pipeline/pipeline.tpl" id="pipeline" mode="pipeline" %}
    </div>
</div>

<div id="containerTest">

</div>
{% widget "widget/footer/footer.tpl" %}

{% script %}
    setTimeout(function() {
        BigPipe.load('quicking');
    }, 2000);
{% endscript %}

{% endblock %}