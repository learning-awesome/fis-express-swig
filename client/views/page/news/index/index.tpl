<% include template/default/header.html %>
<div class="container smart-container">
    <div class="row row-offcanvas row-offcanvas-right">
        <div class="col-xs-12 col-sm-9">
            <ul class="smart-artiles" id="articleList">
                <% for(var i=0; i<data.length; i++) {%>
                    <li>
                        <div class="point">+<%=data[i].hits%></div>
                        <div class="card">
                            <h2><a href="/detail/<%=data[i].id%>" target="_blank"><%=data[i].title%></a></h2>
                            <div>
                                <ul class="actions">
                                    <li><time class="timeago"><%=:data[i].createDate|dateFormat%></time></li>
                                    <li class="tauthor">
                                        <a href="#" target="_blank" class="get">Sky</a>
                                    </li>
                                    <li><a href="#" class="kblink-8007">+收藏</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                <% } %>
            </ul>
            <div id="pagerBottom" class="smart-pager"></div>
        </div>
    </div>
</div>

