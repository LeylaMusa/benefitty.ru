import user from '../fixtures/user.json'
describe('authorization form', () => {
  beforeEach(() =>{
    cy.visit('https://lk.staging.benefitty.ru')
    cy.get('.header__auth_signUp').click();
  })
  it('authorization with valid credentials', () => {
    cy.get('[name="username"]').type(user.email);
    cy.get('[name="password"]').type(user.password);
    cy.get('.btn-rounded').click();
    cy.get('.auth-modal__roles > :nth-child(1)').click();
    cy.url().should('eq',"https://lk.staging.benefitty.ru/person/profile");
  })
  it('authorization with empty credentials', () =>{
    cy.get('.btn-rounded').click();
    cy.get('.is-invalid').should('exist');
  })
  it ('authorization with valid e-mail and invalid password', () => {
    cy.get('[name="username"]').type(user.email);
    cy.get('[name="password"]').type('7W`x>Z"');
    cy.get('.btn-rounded').click();
    cy.get('.text-danger').should('not.have.css', 'display', 'none')
  })
  it ('authorization with invalid e-mail and valid password', () => {
    cy.get('[name="username"]').type('test12345@benefitty');
    cy.get('[name="password"]').type(user.password);
    cy.get('.btn-rounded').click();
    cy.get('.text-danger').should('not.have.css', 'display', 'none');
})
})