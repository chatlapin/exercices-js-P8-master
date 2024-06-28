const waitOn = require('wait-on');

Cypress.Commands.add('waitForAppToStart', (url) => {
    return waitOn({
        resources: [url],
        timeout: 10000 // Adjust timeout as needed
    });
});

it('visits the application', () => {
    cy.waitForAppToStart('http://localhost:8080'); // Adjust URL if needed
    cy.visit('http://localhost:8080');
    // Your test steps here
});

