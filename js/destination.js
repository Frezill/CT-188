$(function () {
    $("#header").load("../components/header.html");
    $("#footer").load("../components/footer.html");
});

for(let i = 1; i <= 4; i++)
    document.getElementsByClassName("place-container__right")[i-1].style.backgroundImage = `url(/images/destination/place${i}.png)`;

function fadeIn (placeNumber) {
    document.getElementById("background").style.display = "block";
    document.getElementById(`place${placeNumber}`).style.display = "flex";
}

function fadeOut () {
    document.getElementById("background").style.display = "none";
    for(let i = 1; i <= 4; i++)
        document.getElementById(`place${i}`).style.display = "none";
}

