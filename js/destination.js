for (let i = 1; i <= 6; i++)
    document.getElementsByClassName("place-container__right")[i - 1].style.backgroundImage = `url(../images/destination/main-places/place-${i}.png)`;

function fadeIn(placeNumber) {
    document.getElementById("background").style.scale = "1";
    document.getElementById(`place${placeNumber}`).style.scale = "1";
}

function fadeOut() {
    document.getElementById("background").style.scale = "0";
    for (let i = 1; i <= 6; i++)
        document.getElementById(`place${i}`).style.scale = "0";
}

