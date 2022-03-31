// Grab the canvas element from the DOM to reference
let canvas = document.getElementById("myCanvas");

// Get the drawing context from the CanvasRenderingContext2D interface
// by calling getContext() and specifying a 2D plane
let context = canvas.getContext("2d");

// Next, set the stroke color of the "brush" that will be used on the canvas
context.strokeStyle = "red";

/* 
    You can use any CSS color value to set the stroke or fill color, as long as 
    we specify it as a string: a hexadecimal value such as #00FFFF, a color name 
    such as red or blue, or an RGB value such as rgb(0, 0, 255). We can even use 
    the property rgba to set a semitransparent stroke or fill color. 
*/

// Set the fill color to blue @ 50% opacity
context.fillStyle = "rgba(0, 0, 255, 0.5)";

// Now, draw a rectangle to the canvas
context.fillRect(10, 10, 100, 100); 
context.strokeRect(10, 10, 100, 100);

// And a circle
function drawCircle() {
    var canvas = document.getElementById("myCanvas2");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
   context.fill();
   context.stroke();
}

// And a gradient
function drawGradient() {
    var canvas = document.getElementById("myCanvas3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue"); 
    gradient.addColorStop(1, "white"); 
    context.fillStyle = gradient; 
    context.fillRect(0, 0, 200, 200); 

}

// Now, for a variation on fillStyle

function drawPattern() {
    var canvas = document.getElementById("myCanvas4");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var img = new Image(); 
    img.src = "../img/pokeball.png";

    img.onload = function() {
        var pattern = context.createPattern(img, "repeat");
       context.fillStyle = pattern;
       context.fillRect(0, 0, 200, 200); 
    };
}

drawCircle();
drawGradient();