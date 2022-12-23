"use strict"

let navigation = document.getElementById('navBar')
let burgerBar = document.getElementById('burger-bar')

burgerBar.addEventListener('click', function () {
    navigation.classList.toggle('activeNav')
    burgerBar.classList.toggle('activeBurger-bar')
})


let accordionContainer = document.querySelectorAll('.container')

for (let item of accordionContainer) {
    item.addEventListener('click', function () {
        this.classList.toggle('active')
    })
}