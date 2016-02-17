(function($) {
  $.fn.detectQuirksMode = function() {

    if (document.compatMode != 'CSS1Compat') {
      var $body = $('body');
      var title = $('<p>Awe &ndash; shee &ndash; et!<br /></p>');
      var message = $('<span>&ndash; Quirks Mode Strikes Again &ndash;</span>');
      $body.empty();
      $body.append(title);
      title.append(message);
      title.css({
        'color' : 'red',
        'text-align' : 'center',
        'font-size' : '30px',
        'line-height' : '1.2em',
        'font-weight' : 'bold'
      });

      message.css({
        'color' : 'black',
        'line-height' : '1em',
        'font-size' : '14px'
      });

    }

    return this;
  };
})(jQuery); 