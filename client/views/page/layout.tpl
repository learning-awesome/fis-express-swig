<!doctype html>
{% html lang="en" framework="js/mod.js" %}
    {% head %}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="/static/favicon.ico">
        <title>{{ title }}</title>

        {% require "css/bootstrap.css" %}
        {% require "css/bootstrap-theme.css" %}
        {% require "css/style.css" %}
        {% require "js/bigpipe.js" %}
        {% require "js/jquery-1.10.2.js" %}
        {% require "js/bootstrap.js" %}

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
