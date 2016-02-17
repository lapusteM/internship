(function($) {

  $.fn.randomRGB = function(userOptions) {
    var config = {
      min : 0,
      max : 255
    }

    for (var o in userOptions) {
      if ( typeof (userOptions[o]) === 'string' || userOptions[o] < 0 || userOptions[o] > 255) {
        userOptions[o] = (o == 'min') ? config.min : config.max;
      }
    }

    config = $.extend(config, userOptions);

    var resultedColor = 'rgb(';
    for (var i = 0; i < 3; i++) {
      var rand = parseInt(Math.random() * (config.max - config.min) + config.min);
      resultedColor += (i < 2) ? rand + ', ' : rand + ')';
    }

    $(this).css('background-color', resultedColor);

    return this;

  }
})(jQuery);
