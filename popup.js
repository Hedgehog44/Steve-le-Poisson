console.log('This is a popup!');

var fs = require('fs');
var files = fs.readdirSync('.');

function get_random_image() {
  const random_index = Math.floor(Math.random() * image_array.length);
  const selected_image = image_array[random_index];
  document.getElementById('image_shower').src = `./images/${selected_image}`;
}
