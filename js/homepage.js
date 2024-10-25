$(function () {
    $("#header").load("../components/header.html");
    $("#footer").load("../components/footer.html");
});

const videos = document.querySelectorAll('.video-slider');
const navBtns = document.querySelectorAll('.slider-navigation .nav-btn');
const contents = document.querySelectorAll('.content');

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