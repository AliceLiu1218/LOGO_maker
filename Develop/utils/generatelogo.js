let shape_color;
let text_color;
let text;

function circle_logo(shape_color,text_color,text) {
  const htmlContent = `
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    <circle cx="100" cy="100" r="80"   fill=${shape_color}/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill=${text_color}>${text}</text>
  </svg>

  `;

  return htmlContent;
}


function rect_logo (shape_color,text_color,text) {
  const htmlContent = `
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100">
    <rect width="200" height="100" fill=${shape_color} />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill=${text_color}>${text}</text>
  </svg>

  `;

  return htmlContent;
}


function tri_logo (shape_color,text_color,text) {
  const htmlContent = `
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    <polygon points="100,20 30,180 170,180" fill=${shape_color} />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill=${text_color}>${text}</text>
  </svg>

  `;

  return htmlContent;
}


module.exports = {
  
  circle_logo,
  rect_logo,
  tri_logo
};
