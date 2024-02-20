let x = 0, y = 0; // Global variables to track current mouse position
let ellipseSize = 40; // Default ellipse size
let brushColor = 'black'; // Default brush color

function setup() {
  const canvas = createCanvas(windowWidth - 20, windowHeight - 200);
  canvas.parent('canvas-container');
  background(255); // Set initial background color

  // Select buttons and add event listeners
  const pencilButton = document.getElementById('pencil');
  pencilButton.addEventListener('click', () => setEllipseSize(5));

  const penButton = document.getElementById('pen');
  penButton.addEventListener('click', () => setEllipseSize(40));

  const markerButton = document.getElementById('marker');
  markerButton.addEventListener('click', () => setEllipseSize(80));

  const clearButton = document.getElementById('clear');
  clearButton.addEventListener('click', clearCanvas);

  const colorPicker = document.getElementById('color-picker');
  colorPicker.addEventListener('change', handleColorChange);

  const eraseButton = document.getElementById('white');
eraseButton.addEventListener('click', () => handleErase());

}

function draw() {
  if (mouseIsPressed) {
    fill(brushColor);
    ellipse(mouseX, mouseY, ellipseSize, ellipseSize);
    noStroke();
  }

  // Update current mouse position (for easier tracking)
  x = mouseX;
  y = mouseY;
}

function setEllipseSize(size) {
  ellipseSize = size;
 
}
// Add an event listener to the erase button

// Function to handle erasing
function handleErase() {
  brushColor = 'white'; // Set brush color to white
}


function clearCanvas() {
  background(255);
}

function handleColorChange(event) {
  brushColor = event.target.value;
}

function windowResized() {
  resizeCanvas(windowWidth - 20, windowHeight - 200);
}
  
