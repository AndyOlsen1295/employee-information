function generateHTML(team) {
  let cards = "";
  for (let i = 0; i < team.length; i++) {
    let employee = team[i];
    let specificProperty = "";
    let specificValue = "";
    if (employee.getRole() === "Manager") {
      specificProperty = "Office Number";
      specificValue = employee.getOffice();
    } else if (employee.getRole() === "Engineer") {
      specificProperty = "GitHub";
      specificValue = employee.getGithub();
    } else if (employee.getRole() === "Intern") {
      specificProperty = "School";
      specificValue = employee.getSchool();
    }
    cards += `
    <div class="card">
      <div class="card-header">
        <h2>${employee.getName()}</h2>
        <h3>${employee.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul>
          <li>ID: ${employee.getId()}</li>
          <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
          <li>${specificProperty}: ${specificValue}</li>
        </ul>
      </div>
    </div>
    `;
  }
  let html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>My Team</title>
      <link rel="stylesheet" href="./style.css">
    </head>
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <main>
        ${cards}
      </main>
    </body>
  </html>
  `;
  return html;
}

module.exports = generateHTML;
