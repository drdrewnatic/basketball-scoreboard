let homePointsEl = document.getElementById("home-points-el")
let guestPointsEl = document.getElementById("guest-points-el")
let homePoint = 0
let guestPoint = 0

homePointsEl.textContent = homePoint
guestPointsEl.textContent = guestPoint

//--------------------Home Points---------------------

function onePointHome() {
    homePoint ++
    homePointsEl.textContent = homePoint
}

function twoPointsHome() {
    homePoint += 2
    homePointsEl.textContent = homePoint
}

function threePointsHome() {
    homePoint += 3
    homePointsEl.textContent = homePoint
}

//--------------------Guest Points---------------------

function onePointGuest() {
    guestPoint ++
    guestPointsEl.textContent = guestPoint
}

function twoPointsGuest() {
    guestPoint += 2
    guestPointsEl.textContent = guestPoint
}

function threePointsGuest() {
    guestPoint += 3
    guestPointsEl.textContent = guestPoint
}