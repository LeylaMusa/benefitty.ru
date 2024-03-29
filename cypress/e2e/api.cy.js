import user from '../fixtures/user.json'
describe('authorization form', () => {
  it('POST with valid credentials', () => {
    cy.request("POST","https://api-staging.benefitty.ru/v1/login",{username: 'test12345@benefitty.ru',password: '7W`x>Z"0&0Bh'}).then(
        (response) =>{
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('token');// true
     }
    )
  })
})