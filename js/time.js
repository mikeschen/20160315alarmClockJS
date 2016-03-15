exports.Alarm = function(hour, minute) {
  this.hour = hour;
  this.minute = minute;
};

exports.Alarm.prototype.getTime = function() {
  return moment().format("h:mm:ss");
};

exports.Alarm.prototype.checkAlarm = function(hour, minute) {
  if(hour === parseInt(moment().format("h")) && minute === parseInt(moment().format("mm"))) {
    return true;
  }
};
