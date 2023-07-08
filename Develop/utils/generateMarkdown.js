// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}


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
module.exports = generateMarkdown;
