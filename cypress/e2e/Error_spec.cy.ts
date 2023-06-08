describe('Error Handling', () => {
    it('should display the error page for random URLs', () => {
      cy.visit('http://localhost:3000/random-url');
  
      cy.contains('h2', 'Oops!!!!').should('be.visible');
      cy.get('.go-back').click();
      cy.url().should('include', '/');

    });
  });