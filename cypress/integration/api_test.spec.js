/// <reference types="cypress" />

// This spec file contains api test for api https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false
  


describe('Cypress api test', () => {
  it('Check the api for acceptance criteria', () => {
    	 cy.request('https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false').then((response) => {
 	 expect(response.body).property('Name').to.eq('Carbon credits')
         expect(response.body).property('CanRelist').to.be.true
	 const promotions = response.body.Promotions
	 expect(promotions[1]).property('Name').to.eq('Gallery')
	 expect(promotions[1]).property('Description').to.contain('Good position in category')
     })
  })
})
