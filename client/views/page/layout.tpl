<!doctype html>
{% html lang="en" framework="public/static/js/mod.js"  %}
{% head %}
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">
<link rel="icon" href="/static/favicon.ico">
<title>{{ title }}</title>

{% require "public/static/css/normalize.css" %}
{% require "public/static/css/bootstrap.css" %}
{% require "public/static/css/app.css" %}


{% endhead %}

{% body %}

{% widget "widget/menu/menu.tpl" %}


{% block beforecontent %}
{% endblock %}

<div class="container">
    {% block content %}
    {% endblock %}
</div>

{% block aftercontent %}
{% endblock %}

{% endbody %}

{% endhtml %}
