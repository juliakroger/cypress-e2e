describe('Navbar Test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html', { timeout: 10000 })
	})

	it('should click on online banking', () => {
		cy.get('#onlineBankingMenu').click()
	})

	it('should display online banking page', () => {
		cy.get('h1').contains('Online Banking')
	})

	it('should click on feedback', () => {
		cy.url().should('include', 'online-banking.html')
		cy.get('#feedback').click()
	})

	it('should fill feedback form', () => {
		cy.get('#name').type('My Name Here', { delay: 50 })
		cy.get('#email').type('test@email.com', { delay: 50 })
		cy.get('#subject').type('testing cypress', { delay: 50 })
		cy.get(
			'#comment'
		).type(
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies hendrerit nibh, id maximus ligula commodo quis.',
			{ delay: 50 }
		)
	})

	it('should submit feedback form', () => {
		cy.get('input')
			.contains('Send Message')
			.click()
	})

	it('should display feedback message', () => {
		cy.get('#feedback-title').contains('Feedback')
	})
})
