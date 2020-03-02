describe('Login / Logout Test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html', { timeout: 10000 })
		cy.get('#signin_button').click()
	})

	it('should try to login with invalid data', () => {
		cy.login('invalid name', 'pass')
		cy.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong.')
		cy.wait(1000)
	})

	it('should login to application', () => {
		cy.login('username', 'password')
		cy.get('.dropdown-toggle').contains('username')
	})

	it('should logout from application', () => {
		cy.wait(1000)
		cy.get('.dropdown-toggle').click({ multiple: true })
		cy.wait(1000)
		cy.get('#logout_link').click()
	})

	it('should be on the home page', () => {
		cy.url().should('include', 'index.html')
	})
})
