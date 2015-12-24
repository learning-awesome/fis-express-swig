<!doctype html>
{% html lang="en" framework="client/public/js/mod.js" %}
    {% head %}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="/static/favicon.ico">
        <title>{{ title }}</title>

        {% require "client/public/css/bootstrap.css" %}
        {% require "client/public/css/bootstrap-theme.css" %}
        {% require "client/public/css/style.css" %}
        {% require "client/public/js/bigpipe.js" %}
        {% require "client/public/js/jquery-1.10.2.js" %}
        {% require "client/public/js/bootstrap.js" %}

    {% endhead %}

    {% body %}
        <div id="wrapper">
            {% widget "widget/header/header.tpl" %}

            {% block beforecontent %}
            {% endblock %}
            
            <div class="container">
                {% block content %}
                {% endblock %}
            </div>

            {% block aftercontent %}
            {% endblock %}

            {% widget "widget/footer/footer.tpl" %}
        </div>

    {% endbody %}

{% endhtml %}
