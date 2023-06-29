describe('Notes view', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.findByText(/login/i).should('exist');
    cy.findByText(/login/i).click();
    cy.findByText(/login/i).type('teacher@studybuddy.com');
    cy.findByText(/password/i).click();
    cy.findByText(/password/i).type('Test123');
    cy.findByText(/sign in/i).click();
  });

  it('Allows to create a new note and delete it', () => {
    cy.visit('/notes');
    cy.findByText(/title/i).click();
    cy.findByText(/title/i).type('My cypress note');
    cy.findByText(/content/i).click();
    cy.findByText(/content/i).type('cypres ipsum');
    cy.findByText(/add/i).click();
    cy.findAllByText('My cypress note').should('exist');
    cy.findAllByText('cypres ipsum').should('exist');

    cy.findAllByText('My cypress note')
      .first()
      .parent()
      .findByLabelText(/delete/i)
      .click();
    cy.findByText('My cypress note').should('not.exist');
  });
});
