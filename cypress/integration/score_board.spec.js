describe('Score Board', () => {
    it('Displays the correct title', () => {
        cy.visit('http://localhost:3000');
        cy.title().should('eq', 'Football Score Board')
    });
});
