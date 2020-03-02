describe('Transfer Funds Verification Test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html', { timeout: 10000 })
		cy.get('#signin_button').click()
		cy.login('username', 'password')
	})

	it('should fill transfer funds form', () => {
		cy.get('#transfer_funds_tab').click()
		cy.get('#tf_toAccountId').select('4')
		cy.get('#tf_amount').type('100', { delay: 50 })
		cy.get('#tf_description').type('transfer description', { delay: 50 })

		cy.get('#btn_submit').click()
	})

	it('should verfiy correct data', () => {
		cy.get('#tf_fromAccountId').should('have.value', 'Savings')
		cy.get('#tf_toAccountId').should('have.value', 'Loan')
		cy.get('#tf_amount').should('have.value', '100')
		cy.get('#btn_submit').click()
	})
})
