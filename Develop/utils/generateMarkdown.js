// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === "MIT") {
    return `![MIT](https://img.shields.io/badge/MIT-License-brightgreen)`;
  } else if (data.license === "Apache") {
    return `![Apache](https://img.shields.io/badge/Apache-License-brightgreen)`;
  } else if (data.license === "GPL") {
    return `![GPL](https://img.shields.io/badge/GPL-License-brightgreen)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === "MIT") {
    return `![https://choosealicense.com/licenses/mit/#]`;
  } else if (data.license === "GPL") {
    return `![https://choosealicense.com/licenses/gpl-3.0/]`;
  } else if (data.license === "Apache") {
    return `![https://choosealicense.com/licenses/apache-2.0/]`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license === "N/A") {
    return "";
  } else {
    return (
      `\n## License
${data.license}
    ` +
      "\n" +
      renderLicenseLink(data)
    );
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data)}

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
${data.install}

## Usage 
${data.usage}
${renderLicenseSection(data)}
## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
For additional questions feel free to contact: ${data.email}
GitHub: https://github.com/${data.username}

`;
}

module.exports = generateMarkdown;
