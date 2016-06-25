$(document).ready(function() {
    clearGrid();
    opacity();
});

function initGrid(userSize) {
    // get pixel size
    var size = 816 / userSize;
    // append pixels to container
    for (var i = 1; i <= userSize; i++) {
        for (var j = 1; j <= userSize; j++) {
            $('.container').append("<div class='pixel'></div>");
        }
    }
    // set pixel size
    $('.pixel').css("height", size);
    $('.pixel').css("width", size);
    // initiate draw functionality
    opacity();
}

function clearGrid() {
    $('[data-clear]').click(function() {
        $('.container').empty();
        // ask user for new input
        var userSize = prompt("What size grid would you like?");
        // initiate grid with new user input
        initGrid(userSize);
    });
}

function opacity() {
    $('.pixel').mouseenter(function() {
        // add pixel color
        $(this).addClass('bg-color');
        // add opacity to pixel on mouse over
        $(this).css({
            opacity: function(index, value) {
                return parseFloat(value) * 1.5;
            }
        });
    });
}
