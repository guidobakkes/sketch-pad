$(document).ready(function() {
    init();
});

function init () {

    $('[data-start]').on('click', function() {
        $(this).remove();
        // create container div
        $('body').append('<div id="container"</div>');

        // set the height and width of the canvas
        var size = prompt("What size grid would you like?");

        // container height with ul's
        for (var i = 0; i < size; i++) {
            $('#container').append("<ul></ul>");
        }

        // fill ul with li for width
        if (size < 31) {
            for (var j = 0; j < size; j++) {
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
