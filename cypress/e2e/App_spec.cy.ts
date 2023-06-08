describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=Pierre%20Bourne", {
      status: 200,
      fixture: "songData"})
    cy.intercept("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=Asap%20Rocky", {
      status: 200,
      fixture: "songData"})
    cy.intercept("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=Radiohead", {
      status: 200,
      fixture: "songData"})
    cy.intercept("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=Frank%20Ocean", {
      status: 200,
      fixture: "songData"})
    cy.intercept("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=Lana%20del%20rey", {
      status: 200,
      fixture: "songData"})
    cy.intercept("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=The%20Cure", {
      status: 200,
      fixture: "songData"})
    cy.intercept("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=Destroy%20Lonely", {
      status: 200,
      fixture: "songData"})
    cy.intercept("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=Deftones", {
      status: 200,
      fixture: "songData"})
    cy.intercept("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=Playboi%20Carti", {
      status: 200,
      fixture: "songData"})
    cy.intercept("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=Kendrick%20Lamar", {
      status: 200,
      fixture: "songData"})
    cy.visit("http://localhost:3000/").wait(2000)
  })


  it('Should navigate to the main page', () => {
    cy.url().should('include', '/')
    cy.contains('Song Versuz').should('exist')
    cy.get('.song').should('have.length', 10)
  })

  it('should navigate to the favorites page', () => {
    cy.get('.fav').click()
    cy.url().should('include', '/favorites')
  })
  it('Should be able to go back to the main page from favorites page', () => {
    cy.get('.fav').click()
    cy.url().should('include', '/favorites')
    cy.contains('Song Versuz').click()
    cy.url().should('include', '/')
  })
  it('should add a song to favorites', () => {
    cy.get('.song button').first().click()
    cy.get('.fav').click()
    cy.get('.song').should('have.length', 1)
  })
  
  it('SHould be able to unadd a song from favorites', () => {
    cy.get('.song button').first().click()
    cy.get('.fav').click()
    cy.get('.song button').first().click()
    cy.get('.song').should('have.length', 0)
   
  })
})