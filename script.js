var t = document.getElementById("top");
let idx = 0;

const bg = [
  "images/group/nautilis.jpg",
  "images/group/orphanage2.jpg",
  "images/group/orphanage1.jpeg",
  "images/group/timemachine1.jpg",
  "images/group/turing.jpg",
];

const rooms = [
  "https://l28l6q.csb.app/",
  "https://nyf2gw.csb.app/",
  "https://rocka5.github.io/Esacpe-Room1/",
  "https://emilyspicybeatz2.github.io/BackRoomsLvL0/",
  "https://mtranb.github.io/startPage/",
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function hover(e) {
  e.classList.add("shadow");
}

function hoverNeg(e) {
  e.classList.remove("shadow");
}

function goRoom(e) {
  window.open(rooms[e], "_blank");
}

function walkthrough() {
  window.open(
    "https://docs.google.com/presentation/d/1Mldq3dAeIJ_KlbhRNtrKZu_dA85GwHmU37dCgdGtWj8/edit?usp=sharing",
    "_blank"
  );
}

function creditsShow() {
  credits.style.display = "flex";
}

function creditsClose() {
  credits.style.display = "none";
}

function imgCycle() {
  idx = (idx + 1) % bg.length;
  t.style.backgroundImage = `url(${bg[idx]})`;
}

setInterval(imgCycle, 10000);

function changeDef1(event) {
  document.getElementById("image1").classList.add("clickable");
  document.getElementById("words1").classList.add("words2");
  document.getElementById("words1").classList.remove("words1");
}
function changeDef2(event) {
  document.getElementById("image2").classList.add("clickable");
  document.getElementById("words2").classList.add("words2");
  document.getElementById("words2").classList.remove("words1");
}

function changeDef3(event) {
  document.getElementById("image3").classList.add("clickable");
  document.getElementById("words3").classList.add("words2");
  document.getElementById("words3").classList.remove("words1");
}

function changeDef4(event) {
  document.getElementById("image4").classList.add("clickable");
  document.getElementById("words4").classList.add("words2");
  document.getElementById("words4").classList.remove("words1");
}

function changeDef5(event) {
  document.getElementById("image5").classList.add("clickable");
  document.getElementById("words5").classList.add("words2");
  document.getElementById("words5").classList.remove("words1");
}

function changeDef6(event) {
  document.getElementById("image6").classList.add("clickable");
  document.getElementById("words6").classList.add("words2");
  document.getElementById("words6").classList.remove("words1");
}

function changedef1(event) {
  document.getElementById("image1").classList.remove("clickable");
  document.getElementById("words1").classList.remove("words2");
  document.getElementById("words1").classList.add("words1");
}
function changedef2(event) {
  document.getElementById("image2").classList.remove("clickable");
  document.getElementById("words2").classList.remove("words2");
  document.getElementById("words2").classList.add("words1");
}

function changedef3(event) {
  document.getElementById("image3").classList.remove("clickable");
  document.getElementById("words3").classList.remove("words2");
  document.getElementById("words3").classList.add("words1");
}

function changedef4(event) {
  document.getElementById("image4").classList.remove("clickable");
  document.getElementById("words4").classList.remove("words2");
  document.getElementById("words4").classList.add("words1");
}

function changedef5(event) {
  document.getElementById("image5").classList.remove("clickable");
  document.getElementById("words5").classList.remove("words2");
  document.getElementById("words5").classList.add("words1");
}

function changedef6(event) {
  document.getElementById("image6").classList.remove("clickable");
  document.getElementById("words6").classList.remove("words2");
  document.getElementById("words6").classList.add("words1");
}
