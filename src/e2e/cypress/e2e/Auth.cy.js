describe('Study buddy app', () => {
  it('Renders unauthenticated app', () => {
    cy.visit('/');
    cy.findByText(/login/i).should('exist');
  });

  it('Allows user to authenticate', () => {
    cy.visit('/');
    cy.findByText(/login/i).should('exist');
    cy.findByText(/login/i).click();
    cy.findByText(/login/i).type('teacher@studybuddy.com');
    cy.findByText(/password/i).click();
    cy.findByText(/password/i).type('Test123');
    cy.findByText(/sign in/i).click();

    cy.findByText(/Logged as/i).should('exist');
  });
});
