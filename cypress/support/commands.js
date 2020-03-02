Cypress.Commands.add('login', (username, password) => {
	cy.clearCookies()
	cy.clearLocalStorage()

	cy.get('#user_login').as('username')
	cy.get('#user_password').as('password')

	cy.get('@username').type(username, { delay: 50 })
	cy.get('@password').type(password, { delay: 50 })

	cy.get('#user_remember_me').click()

	cy.get('input')
		.contains('Sign in')
		.click()
})

Cypress.Commands.add('newPeyee', (name, address, account, details) => {
	cy.get('#np_new_payee_name').as('name')
	cy.get('#np_new_payee_address').as('address')
	cy.get('#np_new_payee_account').as('account')
	cy.get('#np_new_payee_details').as('details')

	cy.get('@name').type(name, { delay: 50 })
	cy.get('@address').type(address, { delay: 50 })
	cy.get('@account').type(account, { delay: 50 })
	cy.get('@details').type(details, { delay: 50 })

	cy.get('#add_new_payee').click()
})

Cypress.Commands.add(
	'newPayment',
	(payee = 'bofa', account = '2', amount, date, description) => {
		cy.get('#sp_amount').as('amount')
		cy.get('#sp_date').as('date')
		cy.get('#sp_description').as('description')

		cy.get('#sp_payee').select(payee)
		cy.get('#sp_account').select(account)

		cy.get('@amount').type(amount, { delay: 50 })
		cy.get('@date').type(`${date} {enter}`, { delay: 50 })
		cy.get('@description').type(description, { delay: 50 })

		cy.get('#pay_saved_payees').click()
	}
)
