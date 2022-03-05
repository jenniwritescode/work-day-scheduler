// Current day at top of planner using Moment.js
var currentDate = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDate);

// Set variables for time block section, use Moment.js for current time
var timeBlock = $(".hour");
var timeNow = parseInt(moment().format("H"));

// Decide if current time is past, present, or future in order to apply corresponding color to time blocks
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
    var calItem = event.target.parentElement.parentElement.previousElementSibling.children[0].value;
    localStorage.setItem(event.target.parentElement.attributes[0].value, calItem);
    //console.log(event.target.parentElement.attributes[0].value);
});

// Clear button to empty local storage and reload the page
$(".clearBtn").on("click", function(event) {
    window.localStorage.clear();
    document.location.reload();
});

// Function to populate calendar items, if they are in local storage, on document load using 'ready' method
$(document).ready(function () {
    if (localStorage["saveNine"] !== null && localStorage["saveNine"] !== undefined) {
      var calItemNine = $("<p>" + localStorage["saveNine"] + "</p>");
      $("#textNine").append(calItemNine[0].innerText);
    } 
    else {
      ("");
    }
    if (localStorage["saveTen"] !== null && localStorage["saveTen"] !== undefined) {
        var calItemTen = $("<p>" + localStorage["saveTen"] + "</p>");
        $("#textTen").append(calItemTen[0].innerText);
      } 
      else {
        ("");
      }
      if (localStorage["saveEleven"] !== null && localStorage["saveEleven"] !== undefined) {
        var calItemEleven = $("<p>" + localStorage["saveEleven"] + "</p>");
        $("#textEleven").append(calItemEleven[0].innerText);
      } 
      else {
        ("");
      }
      if (localStorage["saveTwelve"] !== null && localStorage["saveTwelve"] !== undefined) {
        var calItemTwelve = $("<p>" + localStorage["saveTwelve"] + "</p>");
        $("#textTwelve").append(calItemTwelve[0].innerText);
      } 
      else {
        ("");
      }
      if (localStorage["saveOne"] !== null && localStorage["saveOne"] !== undefined) {
        var calItemOne = $("<p>" + localStorage["saveOne"] + "</p>");
        $("#textOne").append(calItemOne[0].innerText);
      } 
      else {
        ("");
      }
      if (localStorage["saveTwo"] !== null && localStorage["saveTwo"] !== undefined) {
        var calItemTwo = $("<p>" + localStorage["saveTwo"] + "</p>");
        $("#textTwo").append(calItemTwo[0].innerText);
      } 
      else {
        ("");
      }
      if (localStorage["saveThree"] !== null && localStorage["saveThree"] !== undefined) {
        var calItemThree = $("<p>" + localStorage["saveThree"] + "</p>");
        $("#textThree").append(calItemThree[0].innerText);
      } 
      else {
        ("");
      }
      if (localStorage["saveFour"] !== null && localStorage["saveFour"] !== undefined) {
        var calItemFour = $("<p>" + localStorage["saveFour"] + "</p>");
        $("#textFour").append(calItemFour[0].innerText);
      } 
      else {
        ("");
      }
      if (localStorage["saveFive"] !== null && localStorage["saveFive"] !== undefined) {
        var calItemFive = $("<p>" + localStorage["saveFive"] + "</p>");
        $("#textFive").append(calItemFive[0].innerText);
      } 
      else {
        ("");
      }
});