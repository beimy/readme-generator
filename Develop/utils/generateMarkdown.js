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

  // destructure data 
  const { title, description, install, usage, contrib, testing} = data;

  console.log(data);

  return `# ${title}

  ## Description
    ${description}

  ## Installation Instructions
    ${install}

  ## Usage Rights
    ${usage}

  ## Contribution Guidelines
    ${contrib}

  ## Testing Instructions
    ${testing}
  `;
}

module.exports = generateMarkdown;
