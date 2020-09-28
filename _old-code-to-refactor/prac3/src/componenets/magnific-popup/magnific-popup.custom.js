var $ = jQuery.noConflict();
$(document).ready(function() {
  //    $('.popup-iframe .popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
  $('a.popup-iframe, .popup-iframe a, a.popup-youtube, a.popup-vimeo, a.popup-gmaps').each(function() {
    $(this).magnificPopup({
      //        disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      //        fixedContentPos: false
      fixedContentPos: 'top'
    });
    $(document).on('click', '.mfp-close', function(e) {
      //        e.preventDefault();
      $.magnificPopup.close();
    });
  });


  $('.popup-inline, .popup-inline a').each(function() {
    //$('.popup-inline-wrapper').each(function() {
    $(this).magnificPopup({
      type: 'inline',
      //mainClass: 'popup-inline-wrapper',
      //delegate: "a", //selector for the click event.
      removalDelay: 160,
      fixedContentPos: true,
      alignTop: true,
      overflowY: 'scroll',
      showCloseBtn: true,
      closeBtnInside: true,
      closeOnBgClick: true,
      enableEscapeKey: true,
      closeOnContentClick: false,
      //closeMarkup: `<button title="%title%" type="button" class="mfp-close">&#215;</button>`,
      //prependTo: "",
      //autoFocusLast: true
      //focus: "className"
      preloader: true,
      modal: false
    });
  });



  /* = attempt to create inline popup gallery
  == Result: FAILED
  == Solutions:
  - Generate an array of gallery items then pass them into magnificPopup({items:itemsArray})

  */
  $('.popup-inline-wrapper').each(function() {
    $(this).magnificPopup({
      type: 'inline',
      //mainClass: 'popup-inline-wrapper',
      //delegate: "a", //selector for the click event.
      removalDelay: 160,
      fixedContentPos: true,
      alignTop: true,
      overflowY: 'scroll',
      showCloseBtn: true,
      closeBtnInside: true,
      closeOnBgClick: true,
      enableEscapeKey: true,
      closeOnContentClick: false,
      //closeMarkup: `<button title="%title%" type="button" class="mfp-close">&#215;</button>`,
      //prependTo: "",
      //autoFocusLast: true
      //focus: "className"
      preloader: true,
      //items: []
      //gallery: {
      //  enabled: true
      //}
      modal: false
    });
  });

  /*
   * ********************************************
   * unused code
   */

  //  $(function() {
  $('.popup-modal').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#username',
      modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function(e) {
      e.preventDefault();
      $.magnificPopup.close();
    });
  });
  //  });

});
