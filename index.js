//Home.

let homeCount = 0;
let homeScore = document.getElementById("home-score");

function plusOne() {
    homeCount += 1;
    homeScore.textContent = homeCount;
}

function plusTwo() {
    homeCount += 2;
    homeScore.textContent = homeCount;
}

function plusThree() {
    homeCount += 3;
    homeScore.textContent = homeCount;
}

//Guest.

let guestCount = 0;
let guestScoreEl = document.getElementById("guest-score-el");

function plusOneGuest() {
    guestCount += 1;
    guestScoreEl.textContent = guestCount;
}

function plusTwoGuest() {
    guestCount += 2;
    guestScoreEl.textContent = guestCount;
}

function plusThreeGuest() {
    guestCount += 3;
    guestScoreEl.textContent = guestCount;
}

//Save. 

let saveCountHome 
let saveCountGuest 
let domHome = document.getElementById("home-count")
let domGuest = document.getElementById("guest-count")

function saveClick() {

    saveCountHome = homeCount + " -- "
    domHome.textContent += saveCountHome


    saveCountGuest = guestCount + " -- "
    domGuest.textContent += saveCountGuest


changeCount.textContent = 0;
homeCount = 0;
guestCountChange.textContent = 0;
guestCount = 0;
}