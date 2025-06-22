console.log('This is a popup!');
const Steve = [
"Steve1.png",
"Steve2.png",
"Steve3.png",
"Steve4.png",
"Steve5.png",
"Steve6.png",
"Steve7.png",
"Steve8.png",
"Steve9.png",
"Steve10.png"
];

var fs = require('fs');
var files = fs.readdirSync('.');

function get_random_image() {
  const random_index = Math.floor(Math.random() * image_array.length);
  const selected_image = image_array[random_index];
  document.getElementById('image_shower').src = `./images/${selected_image}`;
}
const SteveImage = document.getElementById("Steve-image");
const changeSteveBtn = document.getElementById("change-Steve");

changeSteveBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * Steve.length);
  SteveImage.src = Steve[randomIndex];
});