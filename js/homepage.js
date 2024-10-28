$(function () {
    $("#header").load("../components/header.html");
    $("#footer").load("../components/footer.html");
    $("#loader").load("../components/loader.html");
});

const videos = document.querySelectorAll('.banner__video-slider');
const navBtns = document.querySelectorAll('.banner__slider-navigation .nav-btn');
const contents = document.querySelectorAll('.banner__content');

let currentIndex = 0;
function updateActiveSlide(index) {
    videos.forEach((video, idx) => {
        video.classList.toggle('active', idx === index);
    });

    contents.forEach((content, idx) => {
        content.classList.toggle('active', idx === index);
    });

    navBtns.forEach((btn, idx) => {
        btn.classList.toggle('active', idx === index);
    });
}

navBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentIndex = index;
        updateActiveSlide(currentIndex);
    });
});

updateActiveSlide(currentIndex);

//auto change video
setInterval(() => {
    currentIndex = (currentIndex + 1) % 3;
    updateActiveSlide(currentIndex);
}, 30000)