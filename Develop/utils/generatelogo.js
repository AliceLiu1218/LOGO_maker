
const fs = require('fs');

const htmlContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <circle cx="100" cy="100" r="80"   fill="red"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill="black">Logo</text>
</svg>

`;

// TODO: Create a function to generate markdown for README
// function generatelogo(data) {
//   console.log(data);
//   fs.writeFile('index.html', htmlContent, (err) => {
//     if (err) {
//       console.error('Error writing HTML file:', err);
//     } else {
//       console.log('HTML file created successfully!');
//     }
//   });
// }


{/* <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <circle cx="100" cy="100" r="80"   fill="red"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill="black">Logo</text>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100">
  <rect width="200" height="100" fill="blue" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill="black">Logo</text>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <polygon points="100,20 30,180 170,180" fill="red" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill="black">Logo</text>
</svg> */}
module.exports = {
  // generatelogo,
  htmlContent
};
