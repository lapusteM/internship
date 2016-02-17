(function($) {
  $.fn.radialColorPicker = function(userOptions) {
    var defaults = {
      radius : 150
    };

    var defaults = $.extend(defaults, userOptions), target = this;

    target.svg({
      onLoad : draw
    });

    function draw() {
      var svg = target.svg('get'),
          radius = defaults.radius,
          radians,
          redOffset,
          greenOffset,
          blueOffset,
          color,
          destX,
          destY,
          thickness;

      svg.clear();
      thickness = 1 + (radius / 50);

      for ( i = 0; i < 360; i++) {
        radians = i * (Math.PI / 180);

        redOffset = byte2Hex(Math.cos(radians) * 127 + 128);
        greenOffset = byte2Hex(Math.cos(radians + 2 * Math.PI / 3) * 127 + 128);
        blueOffset = byte2Hex(Math.cos(radians + 4 * Math.PI / 3) * 127 + 128);

        color = '#' + redOffset + greenOffset + blueOffset;

        destX = radius * Math.cos(radians);
        destY = radius * Math.sin(radians);

        svg.line(radius, radius, destX + radius, destY + radius, {
          stroke : color,
          'stroke-width' : thickness
        });
      }
    }

    function byte2Hex(val) {
      var hexVals = "0123456789ABCDEF";
      return String(hexVals.substr((val >> 4) & 0x0F, 1)) + hexVals.substr(val & 0x0F, 1);
    }

    return target;

  };
})(jQuery); 