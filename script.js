// displaying date in the header using moment.js
var currentDay = moment().format('dddd MMMM Do');
document.getElementById("currentDay").innerHTML = currentDay;

// changing the color of the row 

function onMyPageLoad() {
    var today = new Date();
    var currentHour = today.getHours()
    console.log("current Hour(using javascript) date function) : " + currentHour);


    for (counter = 9; counter < 18; counter++) {
        // Step 1: Current hour should be highlighted in green
        if (counter == currentHour) {
            document.getElementById("am" + counter).setAttribute("class", "present");
        }
        // Step 2: Past hour should be in grey
        if (counter < currentHour) {
            document.getElementById("am" + counter).setAttribute("class", "past");
        }
        // Step 3: Future should be in red
        if (counter > currentHour) {
            document.getElementById("am" + counter).setAttribute("class", "future");
        }
    }
}

// getting textarea entry in and out of local stoage

var descriptions = {};
function initialize() {

    // getting entries from localstorage on page load
    onMyPageLoad()
    descriptions = retrieveEntryFromLocalStorage("localStorageDescription");
    if (descriptions == null) {
        descriptions = {};
        saveEntryToLocalStorage("localStorageDescription", descriptions);
    }

    if (descriptions.hasOwnProperty("am9")) {
        document.getElementById("am9").value = descriptions.am9;
    }
    if (descriptions.hasOwnProperty("am10")) {
        document.getElementById("am10").value = descriptions.am10;
    }
    if (descriptions.hasOwnProperty("am11")) {
        document.getElementById("am11").value = descriptions.am11;
    }
    if (descriptions.hasOwnProperty("am12")) {
        document.getElementById("am12").value = descriptions.am12;
    }
    if (descriptions.hasOwnProperty("am13")) {
        document.getElementById("am13").value = descriptions.am13;
    }
    if (descriptions.hasOwnProperty("am14")) {
        document.getElementById("am14").value = descriptions.am14;
    }
    if (descriptions.hasOwnProperty("am15")) {
        document.getElementById("am15").value = descriptions.am15;
    }
    if (descriptions.hasOwnProperty("am16")) {
        document.getElementById("am16").value = descriptions.am16;
    }
    if (descriptions.hasOwnProperty("am17")) {
        document.getElementById("am17").value = descriptions.am17;
    }
}

//creating key value pair by clicking save button 
function saveDescription(key, value) {
    descriptions[key] = value;
    saveEntryToLocalStorage("localStorageDescription", descriptions);
}

//sending new entries into local storage 
function saveEntryToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

//retrieving entries from local storage 
function retrieveEntryFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}


