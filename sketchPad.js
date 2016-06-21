$(document).ready(function() {
    init();
});

function init () {

    $('[data-start]').on('click', function() {
        $(this).remove();
        // create container div
        $('body').append('<div id="container"</div>');

        // set the height and width of the canvas
        var height = prompt("Enter height: ");
        var width = prompt("Enter width: ");

        // container height with ul's
        for (var i = 0; i < height; i++) {
            $('#container').append("<ul></ul>");
        }

        // fill ul with li for width
        if (width < 31) {
            for (var j = 0; j < width; j++) {
                $('ul').append('<li class="pixel"></li>');
            }
        } else {
            alert('Oops, something went wrong.');
            window.location.reload();
        }

        // add opacity each time mouse enters a block
        $('.pixel').mouseenter(function() {
            $(this).addClass('bg-color');
            $(this).css({
                opacity: function(index, value) {
                    return parseFloat(value) * 1.5;
                }
            });
        });
    });
}
