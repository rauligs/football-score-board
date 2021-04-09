describe('Score Board', () => {

    it('Displays the correct title', () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="titleText"]').should('have.text', 'Football Score Board');
    });

    it('The Board is Visible', () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="scoreboardApp"]').should('be.visible');
    });
});
