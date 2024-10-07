$(function () {
    $("#header").load("../components/header.html");
    $("#footer").load("../components/footer.html");
});
for(let i = 1; i <= 4; i++)
    document.getElementsByClassName("place-container__right")[i-1].style.backgroundImage = `url(/images/destination/place${i}.png)`;
function fadeIn (placeNumber) {
    document.getElementById("background").style.scale = "1";
    document.getElementById(`place${placeNumber}`).style.scale = "1";
}
function fadeOut () {
    document.getElementById("background").style.scale = "0";
    for(let i = 1; i <= 4; i++)
        document.getElementById(`place${i}`).style.scale = "0";
}

