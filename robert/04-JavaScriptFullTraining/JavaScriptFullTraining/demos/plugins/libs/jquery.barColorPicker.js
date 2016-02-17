(function($) {
  $.fn.barColorPicker = function() {
    target = this;
    target.svg({
      onLoad : draw
    });

    function draw() {
      var svg = target.svg('get'),
          barW = target.outerWidth(),
          barH = target.outerHeight(),
          colorPercentage,
          radians,
          redShift,
          greenShift,
          blueShift,
          color,
          thickness;

      svg.clear();
      thickness = 1 + (barW / 50);

      for ( i = 0; i < barW; i++) {
        colorPercentage = i / barW;
        radians = (-360 * colorPercentage) * (Math.PI / 180);
        redOffset = byte2Hex(Math.cos(radians) * 127 + 128);
        greenOffset = byte2Hex(Math.cos(radians + 2 * Math.PI / 3) * 127 + 128);
        blueOffset = byte2Hex(Math.cos(radians + 4 * Math.PI / 3) * 127 + 128);

        color = '#' + redOffset + greenOffset + blueOffset;

        svg.line(i, 0, i, barH, {
          stroke : color,
          'stroke-width' : thickness
        });
      }
    }

    function byte2Hex(val) {
      var hexVals = "0123456789ABCDEF";
      return String(hexVals.substr((val >> 4) & 0x0F, 1)) + hexVals.substr(val & 0x0F, 1);
    }


    $(window).resize(function() {
      draw();
    });

    return target;

  };
})(jQuery); 