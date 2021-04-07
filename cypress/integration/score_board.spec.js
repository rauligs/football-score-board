describe('Score Board', () => {
    it('Displays the correct title', () => {
        cy.visit('http://localhost:3000');
        cy.get('.application-title').should('have.text', 'Football Score Board')
    });
});
