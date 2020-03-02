describe('SeachBox Test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html', { timeout: 10000 })
	})

	it('should type into searchbox and submit with pressing enter', () => {
		cy.get('#searchTerm').type('search text {enter}')
	})

	it('should show search results page', () => {
		cy.get('h2').contains('Search Results:')
	})
})
