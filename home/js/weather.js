$(document).ready(function() {
  $.getJSON('http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20location%3D10004&format=json&callback=?', function(result) {
    if(result = result.query.results.channel) {
      var temperature = result.item.condition.temp;
      //var description = result.item.condition.text;
      //var today_high = result.item.forecast[0].high;
      //var today_low = result.item.forecast[0].low;
      //var icon = result.item.description.match(/<img[^<]*/)[0];
      //var tomorrow_high = result.item.forecast[1].high;
      //var tomorrow_low = result.item.forecast[1].low;
      //var tomorrow_desc = result.item.forecast[1].text;
      $('.weather .today .temperature').html(temperature + "&deg;");
      //$('.weather .today .high').text(today_high);
      //$('.weather .today .low').text(today_low);
      //$('.weather .today .icon').addClass(description);
      //$('.weather .today .icon').html(icon);
      //$('.weather .tomorrow .high').text(tomorrow_high);
      //$('.weather .tomorrow .low').text(tomorrow_low);
      //$('.weather .tomorrow .desc').text(tomorrow_desc);
    }
  });

  $.getJSON('http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fwww.erh.noaa.gov%2Fokx%2Fdigital%2FNY072afm.htm%22%20and%0A%20%20%20%20%20%20xpath%3D\'%2F%2Ftable%2Ftr%2Ftd%2Fimg%5Bcontains(%40alt%2C%20%22temperature%20will%20be%22)%5D\'%0A%20%20%20%20&format=json&callback=?', function(result) {
    if(result = result.query.results.img) {
      var i = 0;
      var weather_data = [];
      var weather_ticks = [];
      result = $.each(result, function(id) {
	var temp = this.alt.match(/(.*?) temperature will be (.*?) degrees./, '$1 $2');
	if(temp[2].match(/\d/)) {
	  i++;
	  weather_data.push([i - 1, parseInt(temp[2])]);
	  var time = (i % 3 == 0) ? temp[1] : "";
	  weather_ticks.push([i - 1, time]);
	}
      });
      var options = { grid: {borderWidth: 0, tickColor: "rgba(255, 255, 255, 0.5)"},
                      lines: { show: true, fill: false, lineWidth: 3},
		      shadowSize: 0,
                      colors: ["rgba(255, 255, 255, 1)"],
                      xaxis: {ticks: weather_ticks},
		      yaxis: {ticks: 5 }};
      $.plot($("#weathergraph"), [weather_data], options);
    }
  });
});