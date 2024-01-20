describe('Example test.', () => {
  it('Things should be configured.', () => {
    cy.login()
    cy.visit('/admin/appearance')
    cy.get('#edit-admin-theme--2').find('option:selected').should('contain', 'Gin')
    cy.get('#edit-use-admin-theme').should('be.checked')
  })
  it('Modules should be enabled.', () => {
    cy.login()
    cy.visit('/admin/modules')
    cy.get('#edit-modules-gin-login-enable').should('be.checked')
    cy.get('#edit-modules-gin-toolbar-enable').should('be.checked')
  })
})
