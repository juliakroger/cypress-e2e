describe('Find Transaction Test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html', { timeout: 10000 })
		cy.get('#signin_button').click()
		cy.login('username', 'password')
	})

	it('should filter transactions', () => {
		cy.get('#account_activity_tab').click()
		cy.contains('Find Transactions').click()
		cy.get('#aa_fromAmount').type('200', { delay: 50 })
		cy.get('#aa_toAmount').type('2000', { delay: 50 })

		cy.get('button[type="submit"]').click()
	})

	it('should display results', () => {
		cy.get('#filtered_transactions_for_account').should('be.visible')
		cy.get('tbody > tr')
			.its('length')
			.should('be.gt', 0)
	})
})
