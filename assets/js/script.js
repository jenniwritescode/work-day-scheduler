// Current day at top of planner using Moment.js
var currentDate = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDate);

// Set variables for time block section, use Moment for current time
var timeBlock = $(".hour");
var timeNow = parseInt(moment().format("H"));