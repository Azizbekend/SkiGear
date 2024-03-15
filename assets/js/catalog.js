// Фильтр
const openFilter = document.querySelector(".cp__filterBtn-swich");
const filter = document.querySelector(".cp__filter");
let swichFilter = true;

openFilter.addEventListener("click", function () {
    if (swichFilter) {
        filter.classList.add("active");
        swichFilter = false;
    }
    else {
        filter.classList.remove("active");
        swichFilter = true;
    }
})