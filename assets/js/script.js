// Current day at top of planner using Moment.js
var currentDate = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDate);

// Set variables for time block section, use Moment for current time
var timeBlock = $(".hour");
var timeNow = parseInt(moment().format("H"));

// Decide if current time is past, present, or future in order to apply colors to time blocks
$(timeBlock).each(function (i, hour) {
    var hourBlock = parseInt($(this).attr("id"));
    if (hourBlock === timeNow) {
        $(this).next().addClass("present");
    }
    else if (hourBlock > timeNow) {
        $(this).next().addClass("future");
    }
    else if (hourBlock < timeNow) {
        $(this).next().addClass("past");
    }
});

// Save calendar item to local storage when save button is clicked
$(".saveBtn").on("click", function(event) {
    var calItem = event.target.parentElement.previousElementSibling.children[0].value;
    localStorage.setItem(event.target.attributes[0].value, calItem);
    // Check to see if calendar item is saved in local storage
    console.log(calItem);
});