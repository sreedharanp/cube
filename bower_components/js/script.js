$(document).ready(function () {
    $('[data-toggle=offcanvas]').click(function () {
        $('.row-offcanvas').toggleClass('active');
    });
});
function setStyleSheet(url) {
    var stylesheet = $("#change");
    stylesheet.attr('href', url);
	   $('style[id^="less:"]').remove();
    less.refresh();
}
$(function () {
    $("#datepicker").datepicker();
});
$(document).on('ready', function () {
    $("#fileUpload").fileinput({ showCaption: false });
});