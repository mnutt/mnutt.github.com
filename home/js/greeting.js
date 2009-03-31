$(document).ready(function() {
  var date = new Date;

  $('.date .dayname').text(date.getDayName());
  $('.date .month').text(date.getMonthName());
  $('.date .day').text(date.getDate());
});