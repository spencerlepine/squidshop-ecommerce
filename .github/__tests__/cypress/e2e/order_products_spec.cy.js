const clickHeaderLink = (index) => {
  return cy.get('header')
    .within(() => {
      cy.get('a')
        .and(($img) => {
          $img[index].click()
        })
    })
}

describe('The Home Page', () => {
  it('loads successfully', () => {
    cy.visit('http://localhost:3000')
  })

  describe('Registration/Login', () => {
    it('should reject invalid form input', () => {
      cy.visit('http://localhost:3000/signup')

      cy.get('#firstName')
        .should('be.visible')
        .type('John')
      cy.get('#lastName')
        .should('be.visible')
        .type('Doe')
      cy.get('#email')
        .should('be.visible')
        .type('badEmail')
      cy.get('#password')
        .should('be.visible')
        .type('xyz')
      cy.get('button[type="submit"]')
        .should('be.visible')
        .click()
      cy.contains('Unable to create account')
        .should('be.visible')
        .click()
    })

    const user = {
      firstName: 'John',
      lastName: 'Doe',
      email: `johndoe${Math.round((Math.random() * 100))}@gmail.com`,
      password: 'T0ttallY#ArdPa55$'
    }

    it('should register valid user account', () => {
      cy.visit('http://localhost:3000')

      cy.contains('Sign In').click()
      cy.contains('Don\'t have an account? Sign Up').click()

      cy.get('#firstName')
        .should('be.visible')
        .type(user.firstName)
      cy.get('#lastName')
        .should('be.visible')
        .type(user.lastName)
      cy.get('#email')
        .should('be.visible')
        .type(user.email)
      cy.get('#password')
        .should('be.visible')
        .type(user.password)
      // cy.get('#rememberMe')
      //   .should('be.visible')
      //   .check()
      cy.get('button[type="submit"]')
        .should('be.visible')
        .click()
    })

    it('should login valid user account', () => {
      cy.contains('Don\'t have an account? Sign Up').should('be.visible')

      cy.get('#email')
        .should('be.visible')
        .type(user.email)
      cy.get('#password')
        .should('be.visible')
        .type(user.password)
      cy.get('button[type="submit"]')
        .should('be.visible')
        .click()

      cy.getCookies()
        .should('have.length', 2)
        .then((cookies) => {
          expect(cookies[0]).to.have.property('name', 'accessToken')
          expect(cookies[0]).to.have.property('httpOnly')
          expect(cookies[0]).to.have.property('secure')
          expect(cookies[1]).to.have.property('name', 'refreshToken')
          expect(cookies[1]).to.have.property('httpOnly')
          expect(cookies[1]).to.have.property('secure')

          // expect(cookies[0]).to.have.property('value', '123ABC')
          // expect(cookies[0]).to.have.property('domain')
          // expect(cookies[0]).to.have.property('path')
        })
    })
  })

  describe('Header', () => {
    it('should render page title', () => {
      cy.get('header')
        .should('be.visible')
        .within(() => {
          cy.get('h1')
            .should('contain.text', 'SquidShop')
          cy.get('a')
            .should('be.visible')
        })
    })
  })

  describe('Product Catalog', () => {
    it('should render product demo images', () => {
      cy.get('.productList').find('img')
        .should('be.visible')
        .and(($img) => {
          // "naturalWidth" and "naturalHeight" are set when the image loads
          expect($img[0].naturalWidth).to.be.greaterThan(0)
          expect($img.length).to.be.greaterThan(9)
        })
    })

    it('clicking on product card should open products page', () => {
      cy.get('.productList').find('img')
        .and(($img) => {
          $img[0].click()
        })

      cy.get('.addToCartBtn')
        .should('be.visible')
      cy.get('.relatedProducts')
        .should('be.visible')
    })

    it('should render list of related products', () => {
      cy.get('.relatedProducts').find('img')
        .should('be.visible')
        .and(($img) => {
          // "naturalWidth" and "naturalHeight" are set when the image loads
          expect($img[0].naturalWidth).to.be.greaterThan(0)
          expect($img.length).to.be.greaterThan(5)
        })
    })

    it('should render navigate to related products page on click', () => {
      cy.get('.relatedProducts').find('img')
        .should('be.visible')
        .and(($img) => {
          $img[0].click()
        })
    })

    it('should navigate back home', () => {
      cy.get('header')
        .within(() => {
          cy.get('h1')
            .should('contain.text', 'SquidShop')
            .click()
        })
    })
  })

  describe('Adding to Cart', () => {
    it('should add product to cart after clicking the button', () => {
      // Open product page
      cy.get('.productList').find('img')
        .and(($img) => {
          $img[0].click()
        })

      // Test the item is in cart
      cy.get('.productTitle')
        .then(($elem) => {
          let productName = $elem.text()
          cy.log($elem.text())

          // Click button
          cy.get('.addToCartBtn')
            .should('be.visible')
            .click()

          // Navigate to cart
          clickHeaderLink(2)

          cy.get('h2')
            .should('contain.text', 'Cart')

          cy.get('.productTitle').should('be.visible');

          cy.get('.removeBtn').click()

          cy.get('.productTitle').should('not.exist');
        })
    })
  })

  describe('Checking out Cart to Order', () => {
    it('should add product to cart after clicking the button', () => {
      // navigate home
      cy.get('header')
        .should('be.visible')
        .within(() => {
          cy.get('h1').click()
        })

      // choose a product
      cy.get('.productList').find('img')
        .and(($img) => {
          $img[5].click()
        })

      // add to cart
      cy.get('.addToCartBtn').click()

      // navigate to cart
      clickHeaderLink(2)

      // checkout order
      cy.get('.productTitle')
        .should('be.visible')

      cy.get('.checkoutBtn')
        .should('be.visible')
        .click()
      cy.get('.productTitle').should('not.exist');

      // Navigate to account page
      clickHeaderLink(3)

      // Navigate to orders page
      cy.contains('Orders').click()

      // Test the order details 
      cy.contains('Order ID').should('be.visible');
      cy.get('.productTitle').should('be.visible');
      cy.contains('Address').should('be.visible');
      cy.contains('Total').should('be.visible');
      cy.contains('Date').should('be.visible');
    })
  })
})