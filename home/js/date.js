$(document).ready(function() {
  var date = new Date;

  $('h1').text(date.getDayName()+", "+date.getMonthName()+" "+date.getDate());
  Cufon.replace('h1');
});