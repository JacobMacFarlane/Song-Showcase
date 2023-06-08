describe('Main error handler', () => {
    beforeEach(() => {
        cy.intercept("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=Pierre%20Bourne", {
            statusCode: 500,
            })
          cy.intercept("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=Asap%20Rocky", {
            statusCode: 500,
            })
          cy.intercept("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=Radiohead", {
            statusCode: 500,
            })
          cy.intercept("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=Frank%20Ocean", {
            statusCode: 500,
            })
          cy.intercept("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=Lana%20del%20rey", {
            statusCode: 500,
            })
          cy.intercept("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=The%20Cure", {
            statusCode: 500,
            })
          cy.intercept("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=Destroy%20Lonely", {
            statusCode: 500,
            })
          cy.intercept("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=Deftones", {
            statusCode: 500,
            })
          cy.intercept("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=Playboi%20Carti", {
            statusCode: 500,
            })
          cy.intercept("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=Kendrick%20Lamar", {
            statusCode: 500,
            })
            cy.visit('http://localhost:3000/').wait(2000);
  
    })
 it('should display error message', () => {
    cy.contains('h2', 'Oops!!!!').should('be.visible');
    cy.contains('p', 'There was an error fetching data, we are working to get it working, PLease try again later').should('be.visible');
 })
})