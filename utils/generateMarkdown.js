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

  return licenseBadges[license] || "";
}

function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  const licenseLinks = {
    MIT: "https://opensource.org/licenses/MIT",
    "Apache-2.0": "https://opensource.org/licenses/Apache-2.0",
    "GPL-3.0": "https://www.gnu.org/licenses/gpl-3.0",
  };

  return licenseLinks[license] || "";
}

function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  return `## License

This project is licensed under the [${license}](${renderLicenseLink(
    license
  )}) license.
`;
}

function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ${renderLicenseBadge(data.license)}

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

${renderLicenseSection(data.license)}

## Contributing

${data.contributors}

## Tests

${data.tests}

## Questions

If you have any questions about the project, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }).
`;
}

module.exports = generateMarkdown;
