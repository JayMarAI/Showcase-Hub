console.log("Preload running...");

// loop through all the content you want to preload
var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

// images and sounds
preload(
  "images/backrooms.jpg",
  "images/bg.jpg",
  "images/clint.png",
  "images/infil.png",
  "images/jail.png",
  "images/stardew.png",
  "images/group/nautilis.jpg",
  "images/group/orphanage1.jpeg",
  "images/group/orphanage2.jpg",
  "images/group/timemachine1.jpg",
  "images/group/turing.jpg",
  "images/poke.png"
);
