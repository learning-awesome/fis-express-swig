{% extends 'page/layout.tpl' %}
{% block content %}

<div class="container smart-container">
    <div class="row row-offcanvas row-offcanvas-right">
        <div class="col-xs-12 col-sm-9">
            <ul class="smart-artiles" id="articleList">
                {% for item in list %}
                <li>
                    <div class="point">+{{item.hits}}</div>
                    <div class="card">
                        <h2><a href="/detail/{{item.id}}" target="_blank">{{item.title}}</a></h2>
                        <div>
                            <ul class="actions">
                                <li>
                                    <time class="timeago">{{item.createDate}}</time>
                                </li>
                                <li class="tauthor">
                                    <a href="#" target="_blank" class="get">Sky</a>
                                </li>
                                <li><a href="#" class="kblink-8007">+收藏</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                {% endfor %}
            </ul>
            <div id="pagerBottom" class="smart-pager"></div>
        </div>
    </div>
</div>
{% endblock %}

{% script %}
   require('client/views/page/news/index/index.js');
{% endscript %}