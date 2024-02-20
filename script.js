let x = 0, y = 0; // Global variables to track current mouse position
let ellipseSize = 40; // Default ellipse size
let brushColor = 'black'; // Default brush color

function setup() {
  createCanvas(1500, 1500);
  background(255); // Set initial background color

  // Select buttons and add event listeners
  const pencilButton = document.getElementById('pencil');
  pencilButton.addEventListener('click', setEllipseSizeTo5);

  const penButton = document.getElementById('pen');
  penButton.addEventListener('click', setEllipseSizeTo40);

  const markerButton = document.getElementById('marker');
  markerButton.addEventListener('click', setEllipseSizeTo80);

  const clearButton = document.getElementById('clear');
  clearButton.addEventListener('click', clearCanvas);

  const colorPicker = document.getElementById('color-picker');
  colorPicker.addEventListener('change', handleColorChange);
}

function draw() {
  if (mouseIsPressed) {
    fill(brushColor);
    ellipse(mouseX, mouseY, ellipseSize, ellipseSize);
  }

  // Update current mouse position (for easier tracking)
  x = mouseX;
  y = mouseY;
}

function setEllipseSizeTo5() {
  ellipseSize = 5;
}

function setEllipseSizeTo40() {
  ellipseSize = 40;
}

function setEllipseSizeTo80() {
  ellipseSize = 80;
}

function clearCanvas() {
  background(255);
}

function handleColorChange(event) {
  brushColor = event.target.value;
}
