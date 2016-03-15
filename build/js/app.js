(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Alarm = function(hour, minute) {
  this.hour = hour;
  this.minute = minute;
};

exports.Alarm.prototype.getTime = function() {
  return moment().format("h:mm:ss");
};

exports.Alarm.prototype.checkAlarm = function(hour, minute) {
  if(hour === parseInt(moment().format("h")) && minute === parseInt(moment().format("mm"))) {
    console.log(true);
    return true;
  } else {
    console.log(false);
  }
};

},{}],2:[function(require,module,exports){
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

},{"./../js/time.js":1}]},{},[2]);
