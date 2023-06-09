import React from 'react'

const Svgani = () => {
        var triangle = document.getElementById("triangle");
var length = triangle.getTotalLength();

// The start position of the drawing
triangle.style.strokeDasharray = length;

// Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
triangle.style.strokeDashoffset = length;

// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
window.addEventListener("scroll", myFunction);

function myFunction() {
var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var draw = length * scrollpercent;
  
  // Reverse the drawing (when scrolling upwards)
  triangle.style.strokeDashoffset = length - draw;
}
  return (
    <div>
        <svg id="mySVG">
    <path fill="none" stroke="red" stroke-width="3" id="triangle" d="M150 0 L75 200 L225 200 Z" />
    Sorry, your browser does not support inline SVG.
  </svg>
  </div>
  )
}

export default Svgani