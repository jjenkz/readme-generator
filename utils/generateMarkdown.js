// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  const licenseBadges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Apache-2.0":
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GPL-3.0":
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  };

  if (licenseBadges[license]) {
    return licenseBadges[license];
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  const licenseLinks = {
    MIT: "https://opensource.org/licenses/MIT",
    "Apache-2.0": "https://opensource.org/licenses/Apache-2.0",
    "GPL-3.0": "https://www.gnu.org/licenses/gpl-3.0",
  };
  if (licenseLinks[license]) {
    return licenseLinks[license];
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  const licenseSections = {
    MIT: `
## License

This project is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) for details.
`,
    "Apache-2.0": `
## License

This project is licensed under the Apache License 2.0 - see the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0) for details.
`,
    "GPL-3.0": `
## License

This project is licensed under the GNU General Public License v3.0 - see the [GNU GPL v3.0](https://www.gnu.org/licenses/gpl-3.0) for details.
`,
  };
  if (licenseSections[license]) {
    return licenseSections[license];
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title
  ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Questions? Contact at: [${data.author}](mailto:${data.email}).
`;
}

// const markdown = generateMarkdown(data);
// console.log(markdown);

module.exports = generateMarkdown;
