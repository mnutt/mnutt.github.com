$(document).ready(function() {
  var nytimes_list = $(".nytimes ul");
  $.each(nav.sections[18].slides, function(id, item) {
    var url = item.url;
    var queryUrl = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22"+encodeURIComponent(url)+"%22%20and%0A%20%20%20%20%20%20xpath%3D'%2F%2Fdiv%5B%40id%3D%22abColumns%22%5D%2Fimg%20%7C%20%2F%2Fdiv%5B%40id%3D%22abColumns%22%5D%2Fh2'%0A%20%20%20%20&format=json&callback=?";
    $.getJSON(queryUrl, function(result) {
      if(result = result.query.results) {
	var html = "<li><a href='"+url+"'><div class='thumb' style='display: none; background:url("+result.img.src+") center center repeat;'>&nbsp;</div></a></li>";
	nytimes_list.append(html).find('.thumb').fadeIn();
      }
    });
  });
});