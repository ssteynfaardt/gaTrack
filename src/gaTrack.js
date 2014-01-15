/*
  gaTrack: jQuery plugin for Google Analytics Event Tracking
  http://stephan.steynfaardt.com

  Copyright (c) 2014 Stephan Steynfaardt
  Released under the MIT license
  http://opensource.org/licenses/MIT
*/
(function($) {

  $.fn.gaTrack = function( options ) {
    // setup default settings
    var settings = $.extend({
      category : $('title').text().trim(),
      action : "Click",
      label : null,
      value : null,
      noninteraction : null,
      data_category : "category",
      data_action : "action",
      data_label : "label",
      data_value : "value",
      data_noninteraction : "noninteraction",
    }, options);

    this.click(function(){
      var category = $(this).data(settings.data_category) || settings.category || "Links",
          action = $(this).data(settings.data_action) || settings.action,
          label = $(this).data(settings.data_label) || $(this).attr('id') || settings.label,
          value = $(this).data(settings.data_value) || settings.value,
          noninteraction = $(this).data(settings.data_noninteraction) || settings.noninteraction;
      _gaq.push(['_trackEvent', category, action,label,value,noninteraction]);
    });

  };

}(jQuery));


var a = {
  "category" : "External Links",
  "action" : "Clicked",
};