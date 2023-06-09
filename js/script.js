const button = document.querySelector(".js-button");
const body = document.querySelector(".js-body");
const themeName = document.querySelector(".js-themeName");
const tableDark = document.querySelector(".tableDark");
const header = document.querySelector(".header");

button.addEventListener("click", () => {
    body.classList.toggle("body--dark");

    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});

const init = () => {
    constbody = document.querySelector(".js-body");
    fieldsetElement.addEventListener("submit", onFormSubmit)
}
