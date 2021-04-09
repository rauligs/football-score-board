describe('Score Board', () => {

    it('Displays the correct title', () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="titleText"]').should('have.text', 'Football Score Board');
    });

    it('The Board is Visible', () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="scoreBoardApp"]').should('be.visible');
    });

    it('Should add a game and get displayed', () => {
        cy.visit('http://localhost:3000');
        cy.get('#home-team').type('Team A')
        cy.get('#away-team').type('Team B')
        cy.get('#start-game-form').submit()
        cy.get('#summary-games-table tr').find('td').contains('Team A 0 - Team B 0')
    })
});
