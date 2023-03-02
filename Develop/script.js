
var saveButton = document.querySelectorAll(".saveBtn");
var eventText = document.querySelectorAll(".description");
var timeNow = dayjs().format('HH');
var timeBlocks = document.getElementsByClassName("row time-block");
var heading = document.getElementById("currentDay");


window.onload = function() {
  timeColour();
  savingInfo();
  getSavedInfo();
};

heading.innerHTML = dayjs().format('MMMM D, YYYY h:mm A');
function timeColour() {
  console.log(timeBlocks);
  for (var i = 0; i < timeBlocks.length; i++) {
    var currentTime = timeBlocks[i];

    var time = currentTime.getAttribute("data-time");
    console.log(time);

    if (time < timeNow) {
      currentTime.dataset.style = "past";
    } else if (time == timeNow) {
    
      currentTime.dataset.style = "present";
    } else if (time > timeNow) {
      currentTime.dataset.style = "future";
    }
  }
  }
timeColour();

function savingInfo() {
  //event.preventDefault();
  
  for (var i = 0; i < saveButton.length; i++) {
     var button = saveButton[i];
     
      button.addEventListener("click", function(event) {
      event.preventDefault();
     
      var id = this.parentNode.getAttribute("id");
      var eventTextInfo = this.previousElementSibling.value;

      console.log(eventTextInfo);
      console.log(id);
      
      localStorage.setItem(id, eventTextInfo);
    });
  }
}

savingInfo();


function getSavedInfo() {
  for (var i = 0; i < timeBlocks.length; i++) {
    var id = timeBlocks[i].getAttribute("id");
    var savedTextInfo = localStorage.getItem(id);
    if (savedTextInfo) {
      eventText[i].value = savedTextInfo;
    }
  }
}


getSavedInfo();




$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
