(function($) {

  $.fn.randomHex = function(userOptions) {
    var config = {
      color : ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    }

    config = $.extend(config, userOptions);

    var resultedColor = '#';
    for (var i = 0; i < 6; i++) {
      resultedColor += config.color[parseInt(Math.random() * config.color.length)];
    }

    $(this).css('background-color', resultedColor);

    return this;
  }
})(jQuery);
