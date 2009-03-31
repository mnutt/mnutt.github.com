$(document).ready(function() {
  $.getJSON("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fapartmenttherapy.com%2Fny%22%20and%0A%20%20%20%20%20%20xpath%3D'%2F%2Fimg%5B%40class%3D%22mt-image-center%22%5D'%0A%20%20%20%20&format=json&callback=?", function(results) {
    if(results = results.query.results.img) {
      var at_list = $('.apartment_therapy ul');
      $.each(results, function(id, picture) {
	at_list.append("<li><div class='thumb' style='display: none; background:url("+picture.src+") center center repeat;'>&nbsp;</div></li>").find('.thumb').fadeIn();
      });
    }
  });
});