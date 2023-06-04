console.log("Cześć i czołem");

let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName");
let tableDark = document.querySelector(".tableDark");
let header = document.querySelector(".header");

button.addEventListener("click", () => {
    body.classList.toggle("body--dark");

    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});

