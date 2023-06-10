{
    const button = document.querySelector(".js-button");
    const body = document.querySelector(".js-body");
    const themeName = document.querySelector(".js-themeName");

    {
        document.getElementById("js-buttonDate").addEventListener("click", displayDate);

        function displayDate() {
            document.getElementById("js-paragraph__date").innerHTML = Date();
        }
    }

{
    button.addEventListener("click", () => {
        body.classList.toggle("body--dark");

        themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";

    });}
}
