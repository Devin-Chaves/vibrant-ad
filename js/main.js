var main = function() {

var $can = $('.can'),
    $ad = $('#ad'),
    $close = $('#close');


TweenLite.fromTo($can, 2, {opacity: 0, x: -500}, {opacity: 1, x: 0});



$close.on( "click", function() {
  $ad.hide();
  jwplayer().play();
});

};

$(document).ready(main);
