// butona tıklandığı anda navigation alanına
// toggle isminde class ekler
// tekrar tıklanırsa classs ı çıkarır

const btn = document.querySelector(".nav-btn");
const nav = document.querySelector("nav");
// const R = document.querySelectorAll(".R")
btn. addEventListener("click", () => {
    nav.classList.toggle("toggle");
});

// videoları ekrana geldiği anda oynatma

// document.addEventListener("DOMContentLoaded", function () {
//     const videos = document.querySelectorAll("video");
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 entry.target.play();
//                 entry.target.addEventListener('ended', () => {
//                     entry.target.currentTime = 0;
//                     entry.target.play();
//                 });
//             } else {
//                 entry.target.pause();
//             }
//         });
//     });
//     videos.forEach((video) => {
//         observer.observe(video);
//     });
// });



// ! 1.video
const videoPlayer = document.getElementById("videoPlayer");
const videos = [
    "IMG/first.mp4",
    "IMG/firstR.mp4"
];
let currentVideoIndex = 0;

videoPlayer.addEventListener("ended", playNextVideo);


function playNextVideo() {
  currentVideoIndex = currentVideoIndex === 0 ? 1 : 0;
  videoPlayer.src = videos[currentVideoIndex];
  videoPlayer.play();
}

videoPlayer.src = videos[currentVideoIndex];
videoPlayer.play();


//! 2.video
const videoPlayer1 = document.getElementById("videoPlayer1");
const videos1 = [
    "IMG/second.mp4",
    "IMG/secondR.mp4"
];
let currentVideoIndex1 = 0;

videoPlayer1.addEventListener("ended", playNextVideo1);


function playNextVideo1() {
  currentVideoIndex1 = currentVideoIndex1 === 0 ? 1 : 0;
  videoPlayer1.src = videos1[currentVideoIndex1];
  videoPlayer1.play();
}

videoPlayer1.src = videos[currentVideoIndex1];
videoPlayer1.play();

//! 3.video
const videoPlayer2 = document.getElementById("videoPlayer2");
const videos2 = [
    "IMG/third.mp4",
    "IMG/thirdR.mp4"
];
let currentVideoIndex2 = 0;

videoPlayer1.addEventListener("ended", playNextVideo2);


function playNextVideo2() {
  currentVideoIndex2 = currentVideoIndex2 === 0 ? 1 : 0;
  videoPlayer2.src = videos2[currentVideoIndex2];
  videoPlayer2.play();
}

videoPlayer2.src = videos2[currentVideoIndex2];
videoPlayer2.play();









