window.addEventListener("load", () => {
    document.querySelector("body").style.overflow = "unset";
    document.querySelector(".page-loading").classList.add("--fade");
});

(function () {
    fetch("../components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    fetch("../components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
})();
