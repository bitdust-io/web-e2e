it('loads page', () => {
    cy.visit('/');
    cy.get('.loading').should('exist');
    cy.wait(10000);
    cy.get('.container').should('exist');
    cy.contains('friend').click();
    cy.contains('Please select a friend to chat !').should('exist');
    cy.contains('settings').click();
    cy.get('.settings-list').should('exist');
});
