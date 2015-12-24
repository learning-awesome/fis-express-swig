<div class="container smart-container">
    <div class="row row-offcanvas row-offcanvas-right">
        <h2 class="green"><%=data.title||''%></h2>
        <div class="smart top20">
            <%-:data.content|formatHtml%>
        </div>
    </div>
</div>
