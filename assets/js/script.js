// Меню бургер
const openBurger = document.querySelector(".header__burger");
const closeBurger = document.querySelector(".header__menuExit");
const menuBurger = document.querySelector(".header__navigation");

openBurger.addEventListener("click", function () {
    menuBurger.classList.add("active");
})

closeBurger.addEventListener("click", function () {
    menuBurger.classList.remove("active");
})


// Включение корзины
const basketOpenBtns = document.querySelectorAll('.header__img');
const basketCloseBtn = document.querySelector('.basket__close');
const basketPopup = document.querySelector('.basket');

basketOpenBtns.forEach(element => {
    element.addEventListener("click", function () {
        basketPopup.classList.add("active");
    })
})

basketCloseBtn.addEventListener("click", function () {
    basketPopup.classList.remove("active");
})