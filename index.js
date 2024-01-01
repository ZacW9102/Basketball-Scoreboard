let scoreHomeEl = document.getElementById("scoreHome-el")
let scoreGuestEl = document.getElementById("scoreGuest-el")
let scoreH = 0
let scoreG = 0

function home1() {
    scoreH += 1
    scoreHomeEl.textContent = scoreH
}

function home2() {
    scoreH += 2
    scoreHomeEl.textContent = scoreH
}

function home3() {
    scoreH += 3
    scoreHomeEl.textContent = scoreH
}

function guest1() {
    scoreG += 1
    scoreGuestEl.textContent = scoreG
}

function guest2() {
    scoreG += 2
    scoreGuestEl.textContent = scoreG
}

function guest3() {
    scoreG += 3
    scoreGuestEl.textContent = scoreG
}
