window.addEventListener("load", () => {
    document.querySelector("body").style.overflow = "unset";
    document.querySelector(".page-loading").classList.add("--fade");
})

$(function () {
    $("#header").load("../components/header.html");
    $("#footer").load("../components/footer.html");
});