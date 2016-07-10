(function($) {

    $.fn.iMessage = function(options, messages) {
        console.log(options, messages);
        // Get the styles for the message bubbles
        var cssPath = "../src/css/imessage.css";
        $('<link rel="stylesheet" type="text/css" href="' + cssPath + '" >').appendTo("head");
        // Outer wrapper
        var width = 400;
        var ratio = 2;
        var wrapperCSS = {
            'background-image': 'url(' + '../src/img/iphone6.jpg' + ')',
            'background-repeat': 'no-repeat',
            'background-size': 'contain',
            'height': ((width * ratio) - (width * ratio) * 0.17333) + 'px',
            'max-width': width + 'px',
            'padding-top': ((width * ratio) * 0.17333) + 'px',
        };

        // Messages
        var bubbles = '';
        inner = $.map(messages, function(msg, index) {
            bubbles = bubbles + '<div class="' + msg.direction + '"><p>' + msg.message + '</p></div><div class="clear"></div>';
        });
        var wrapper = $(this)
            .css(wrapperCSS) // ** Set CSS!
            .html('<p class="sender">' + options.sender + '</p><section style="width:' + (width * .771428571) + 'px;margin-left:3.25%;">' + bubbles + '</section>')

    };


}(jQuery));
