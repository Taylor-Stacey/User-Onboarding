describe('user-onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    const nameInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]')
    const tosBox = () => cy.get('input[type=checkbox]')
    const foobarInput = () => cy.get('input[name=foobar]')
    const submitBtn = () => cy.get('input[id=submitBtn]')
    


    it('Sanity check to make sure tests work', () => {
        expect(1 + 2).to.equal(3);
    })

    it('the proper elements are showing', () => {
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        tosBox().should('exist');
        foobarInput().should('not.exist');
        submitBtn().should('exist');
    })

    describe('filling out the inputs', () =>{
        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost');
        })
       it('submit button starts out disabled', () => {
           submitBtn().should('be.disabled');
       })
       it('can type into the input fields', () => {
           nameInput()
           .should('have.value', '')
           .type('lorem ipsum')
           .should('have.value', 'lorem ipsum');

           emailInput()
           .should('have.value', '')
           .type('lorem@mail.com')
           .should('have.value', 'lorem@mail.com')

           passwordInput()
           .should('have.value', '')
           .type('123456')
           .should('have.value', '123456')

           tosBox().check()
       })

       it('the submit button enables when the inputs are filled out', () => {
           nameInput().type('somename');
           emailInput().type('test@mail.com')
           passwordInput().type('generic-password')
           tosBox().check()
           submitBtn().should('not.be.disabled')
       })

       it('user is allowed to click the submit button', () => {
        nameInput().type('somename');
        emailInput().type('test@mail.com')
        passwordInput().type('generic-password')
        tosBox().check()
        submitBtn().should('not.be.disabled')
        submitBtn().click()
    })

       it('the submit button should be disabled if a field is blank', () => {
           nameInput().type('hero-name')
           emailInput().type('new@mail.com')
           submitBtn().should('be.disabled')
       })

       it('the submit button should be disabled if the wrong email is used', () => {
        nameInput().type('somename');
        emailInput().type('test')
        passwordInput().type('generic-password')
        tosBox().check()
        submitBtn().should('be.disabled')
       })
       
    })


})
