<hr />
<div class="container">
    <footer>
        <p>&copy; Company 2014</p>
    </footer>

    {% widget "widget/pagelets/copyright/copyright.tpl" id="copyright" mode="quickling" %}

    {% script %}
    setTimeout(function() {
        BigPipe.load('copyright');
    }, 2000);
    {% endscript %}
</div>