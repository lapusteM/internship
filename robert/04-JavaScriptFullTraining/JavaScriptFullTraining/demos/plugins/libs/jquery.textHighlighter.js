(function($) {
  $.fn.textHighlighter = function(userOptions) {
    var defaults = {
      className : 'selected'
    };

    var defaults = $.extend(defaults, userOptions), target = this;

    //store a reference to the original paragraphs
    var paragraphs = $(target).html();

    //store a reference to the currently selected word
    var selectedText = '';

    //store a reference to the RegExp that's being applied
    var regExp;

    //listen for a double click on the document
    $(document).on('dblclick', function(e) {
      //get user selection on double click
      selectedText = getSelection().toString();

      //reset the paragraphs to their original state
      $(target).html(paragraphs);

      //create new global case insensitive regular expresion for the selected text
      regExp = new RegExp(selectedText, "gi");

      //apply change to all occurrences in all paragraphs as long as the selections lenght is greater than 1
      //this will not highlight single char elements like: spaces, dots, semicolons, etc
      if (selectedText.length > 1) {
        $(target).children().each(function(index, value) {
          $(value).html(doReplace);
        });
      }

    });

    //replaces string with <span> tags based on provided regular expression
    function doReplace(index, value) {
      return value.replace(regExp, '<span class="' + defaults.className + '">' + selectedText + '</span>');
    }

    //get user selection
    function getSelection() {
      var txt = '';
      if (window.getSelection) {
        txt = window.getSelection();
      } else if (document.getSelection) {
        txt = document.getSelection();
      } else if (document.selection) {
        txt = document.selection.createRange().text;
      }

      return txt;
    }

    return target;

  };
})(jQuery); 