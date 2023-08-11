let homeScoreEl = document.getElementById('home-score')
let guestScoreEl = document.getElementById('guest-score')
let homeOne = document.getElementById('home-one')
let homeTwo = document.getElementById('home-two')
let homeThree = document.getElementById('home-three')
let guestOne = document.getElementById('guest-one')
let guestTwo = document.getElementById('guest-two')
let guestThree = document.getElementById('guest-three')
let newGameBtn = document.getElementById('new-game-btn')

let homeScore = 0
let guestScore = 0

homeScoreEl.textContent = 0
guestScoreEl.textContent = 0

function addOneHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addTwoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addThreeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function addOneGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function addTwoGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function addThreeGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

newGameBtn.addEventListener('click', newGame)

function newGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}