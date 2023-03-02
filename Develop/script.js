//I begin by setting all my variables.
var saveButton = document.querySelectorAll(".saveBtn");
var eventText = document.querySelectorAll(".description");
var timeNow = dayjs().format('HH');
var timeBlocks = document.getElementsByClassName("row time-block");
var heading = document.getElementById("currentDay");

//Use the window.onload, so that all the functions load correctly.

window.onload = function() {
  timeColour();
  savingInfo();
  getSavedInfo();
};
//Added date and time to the heading using the DAYJS and InnerHTML method
heading.innerHTML = dayjs().format('MMMM D, YYYY h:mm A');
//This function will set the colour blocks for the calendar. I made use of the dataset attributes. I first of all did a for loop as the timeblocks variable, is an array containing all divs for the timeblocks. After i did this, i set the current time variable to each timeBlocks[i]. I then got the data-time attribute, which states which time each timeblock corresponds. I then did an IF function, to compare the time variable to timeNow variable(which has the current time according to DAYJS). Based on the results, the data-style attribute will be amended to past present or future. As the data-style has different backgrounds in CSS the colour will change depending on what time it is.
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
//This info, below will save information which is entered into the time blocks into the localStorage. I first did a for loop and set the variable button to equal each saveButton variable. I then added an event listener, and within this event listener. I get the ID of each time block and the information for the <textarea> element and save it to the local Storage.
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
//this final function, will retrieve the information for the local storage and save it so that it is still viewable on the calendar page even if it is refreshed.

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


