var Alarm = require('./../js/time.js').Alarm;

$(document).ready(function(){
  var newAlarm = new Alarm();
  setInterval(function() {
    $('#time').text(newAlarm.getTime());
  }, 1000);

  $('#alarm').submit(function(event){
    event.preventDefault();
    var hour = parseInt($('#alarmTimeHour').val());
    var minute = parseInt($('#alarmTimeMinute').val());
    var myAlarm = new Alarm(hour, minute);
    setInterval(function() {
      if (myAlarm.checkAlarm(hour, minute) == true) {
        $('#alarmring').append("RIINNGGG!");
      }
    }, 1000);
    console.log(hour + ":" + minute);
    myAlarm.checkAlarm(hour, minute);
  });
});
