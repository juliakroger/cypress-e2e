describe('Currency Exchange Test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html', { timeout: 10000 })
		cy.get('#signin_button').click()
		cy.login('username', 'password')
	})

	it('should fill conversion form', () => {
		cy.get('#pay_bills_tab').click()
		cy.contains('Purchase Foreign Currency').click()
		cy.get('#pc_currency').select('AUD')
		cy.get('#pc_amount').type('100', { delay: 50 })
		cy.get('#pc_inDollars_true').click()
		cy.get('#pc_calculate_costs').click()
	})

	it('should display correct conversion ammount', () => {
		cy.get('#pc_conversion_amount')
			.should('be.visible')
			.and('contain', '91.02 dollar (AUD) = 100.00 U.S. dollar (USD)')
	})
})
