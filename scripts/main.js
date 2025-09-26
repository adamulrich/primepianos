// main.js for Prime Pianos
// Add interactivity here if needed

// Load HTML fragments into elements with data-load attribute (requires jQuery)
$(function () {
    $('[data-load]').each(function () {
        var $el = $(this);
        var url = $el.data('load');
        if (url) {
            $el.load(url);
        }
    });
});
