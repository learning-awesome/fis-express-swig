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

        {% require "client/public/stylesheets/normalize.css" %}
        {% require "client/public/stylesheets/bootstrap.css" %}
        {% require "client/public/app.css" %}


    {% endhead %}

    {% body %}

        {% widget "widget/menu/menu.tpl" %}

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
