describe('App', () => {
  beforeEach(() => {
    cy.visit("https://weekender-denver-app.herokuapp.com/").wait(2000)
  })

  it('Should visit the website', () => {
    cy.visit("https://weekender-denver-app.herokuapp.com/")
  })

  it('Should show a landing page with a navigation bar and logo', () => {
    cy.get('.nav-button').should('be.visible').contains('VIEW ALL TRIPS')
      .get('.logo').should('have.attr', 'src').should('include', 'static/media/logo.d10014c799bf04a0fa18.png')
  })

  it('Should show a featured trip', () => {
    cy.intercept('GET', 'https://weekender-api.herokuapp.com/api/v1/trips', {
          statusCode: 201
        })
      .get('.featured-title-area').should('have.css', 'background-image')
      .get('.featured-trip-title').contains('FEATURED TRIP:')
      .get('.featured-body-text').contains('DRIVE TIME FROM DENVER:')
  })
  
  it('Should show an error message if the response is not ok', () => {
    cy.intercept({
        method: 'GET',
        url: 'https://weekender-api.herokuapp.com/api/v1/trips'
      },
      {
        statusCode: 401,
        body: { 
          message: `Error 404. The data could not be fetched. Please reload and try again` 
        }
      })
  })
  
  it('Should click View All Trips and be directed to a different page showing all trips', () => {
    cy.get('.nav-button').first().click()
      .url().should('include', '/all-trips')
      .get('.trip-container-title').should('contain', 'ALL WEEKEND TRIPS')
      .get('.card').first().should('have.css', 'background-image')
      .and('include', 'https://downtownfortcollins.com/wp-content/uploads/2021/07/Flowers-Linden-Hotel-Richard-Haro.jpg')
      .get('h5').first().contains('Ft. Collins')
  })

  it('Should show a dropdown filter option for drive-time length from Denver', () => {
    cy.get('.nav-button').first().click()
      .get('select[name="drive_time"]').select('2 - 3 Hours')
      .get('.search-button').click()
      .get('h5').first().contains('Salida')
      .get('h5').last().contains('Grand Lake')
  })

  it('Should click View Details to view corresponding trip details', () => {
    cy.get('.nav-button').first().click()
      .get('select[name="drive_time"]').select('2 - 3 Hours')
      .get('.search-button').click()
      .get('.view-details-card-button').first().click()
      .url().should('include', '/4')
      .get('h2').contains('Salida')
      .get('.activity-image').first().should('have.attr', 'src').should('include', 'https://i0.wp.com/whitewater.net/wp-content/colorado-whitewater-rafting-photos/1989871-900x597.jpg?resize=900%2C597')
  })

  it('When one city\'s details are shown, none of the other cities should be visible', () => {
    cy.get('.nav-button').first().click()
      .get('select[name="drive_time"]').select('2 - 3 Hours')
      .get('.search-button').click()
      .get('.view-details-card-button').first().click()
      .get('h2').should('not.contain','Breckenridge')
  })

  it('Should be able to click the logo to be taken back to the home page', () => {
    cy.get('.nav-button').first().click()
      .get('select[name="drive_time"]').select('2 - 3 Hours')
      .get('.search-button').click()
      .get('.logo-trip-cont').click()
      .url().should('not.contain', '/all-trips')
      .get('.logo').should('have.attr', 'src').should('include', 'static/media/logo.d10014c799bf04a0fa18.png')
  })
})