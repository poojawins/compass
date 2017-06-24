$(document).ready(function() {
  if ($(".home").length == 0) { return };

  var countries = [
     { value: 'H&M', data: 'AD' },
     { value: 'H&R', data: 'AD' },
     { value: 'Halliburton', data: 'AD' },
     { value: 'Hewlett-Packard', data: 'AD' },
     // ...
     { value: 'Zimbabwe', data: 'ZZ' }
  ];

  $('#autocomplete').autocomplete({
      lookup: countries,
      onSelect: function (suggestion) {
        //alert('you selected blah')
      },
      beforeRender: function (container) {
        debugger;
        $(container).find(".autocomplete-suggestion").each(function(e) {
        });
      }
  });

      var elms = [$(".logo"), $("#autocomplete"), $("button")];
      elms.forEach(function(e, i) {
        e.removeClass('hidden')
        $.Velocity.hook(e, 'opacity', 0);
        $.Velocity.hook(e, 'translateY', `20%`);

        $.Velocity(e, 
          { translateY: '0%', opacity: 1 },
          { duration: 1000, easing: "easeOutExpo", delay: 100*Math.log(i*1.5+1)+300 }); });
});
