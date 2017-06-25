$(document).ready(function() {
  if ($(".home").length == 0) { return };

  var countries = [
     { value: 'Brilliant Earth', data: 'b', img: './img/brilliant_earth.jpg' },
     { value: 'Ben & Jerry\'s', data: 'b', img: "./img/ben_and_jerrys.png" },
     { value: 'Barnyes', data: 'b', img: "./img/barneys.jpg" },
     { value: 'Bloomingdales', data: 'b', img: "./img/bloomingdales.png" },
     { value: 'Pizza Hut', data:  'pz', img: "./img/pizza_hut.png" },
     { value: 'Procter & Gamble', data: 'pz', img: "./img/pge.png" },
     { value: 'Pfizer', data: 'pz', img: "./img/pfizer.gif" },
     { value: 'Prada', data: 'pz', img: "./img/prada.jpg" },
     { value: 'Halliburton', data: 'hr', img: "./img/hal.png" },
     { value: 'H&M', data: 'hr', img: "./img/hm.png" },
     { value: 'Hewlett-Packard', data: 'hr', img: "./img/hp.png" },
  ];

  $('#autocomplete').autocomplete({
      lookup: countries,
      onSelect: function (suggestion) {
        if (suggestion.data == 'hr') {
          window.location = "./result.html"
        };
      },
      beforeRender: function (container) {
        setTimeout(function() {
        $(container).find(".autocomplete-suggestion").each(function() {
          var self = this;
          setTimeout(function(){
            var html = $(self).html();
            var $img = $("<img class='search-icon'></img>").appendTo($(self));

            $img.attr("src", window.suggestions[$(self).data().index].img);
          }, 1);
          });
        });
      },
      onSearchComplete: function(e, i) {
        window.suggestions = i;
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
