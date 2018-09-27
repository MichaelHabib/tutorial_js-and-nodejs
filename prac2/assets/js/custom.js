//require(`../scss/custom.scss`);

var $ = jQuery.noConflict();
$(document).ready(function() {

  function goBack() {
    window.history.back();
  }
});


/**
Custom Tabs module
*/
$(document).ready(function() {

  var config = {
    menuItemsWrapper: {
      selector: '#businessLocationsMenuWrapper',
    },
    menuItem: {
      selector: 'a.showOnSelect.menuItem,.showOnSelect.menu a',
      contentIDAttr: 'href'

    },
    contentWrapper: {
      selector: '#businessLocationsContentWrapper',
    },
    content: {
      id: '',
      selector: '.showOnSelect.content',
      activeClass: 'active'
    }

  }


  let menuItemsWrapper = $(config.menuItemsWrapper.selector);
  let menuItems = $(`${config.menuItemsWrapper.selector} ${config.menuItem.selector}`);
  let contentWrapper = $(config.contentWrapper.selector);
  let contents = $(`${config.contentWrapper.selector} ${config.content.selector}`);
  //activate the 1st content element & menu item
  contents.first().addClass(config.content.activeClass);
  menuItems.first().addClass(config.content.activeClass);

  menuItems.on('click', function(e) {

    let log = [];
    let el = e.currentTarget;
    let targetID = el.getAttribute(config.menuItem.contentIDAttr);
    let targetEl;
    if (targetID.startsWith('#')) {

      targetEl = $(targetID);
      targetEl.siblings(`.${config.content.activeClass}`).removeClass(config.content.activeClass);
      targetEl.addClass(config.content.activeClass);
      $(this).addClass(config.content.activeClass);
    } else {
      log.push(`- targetContentID is not an ID. The link must point to .showOnSelect.content element.`);
      log.push(`|- current value of targetContentID is ${targetID}`)

    }
    console.log(log.join('\n'));
  });


});
