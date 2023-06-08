describe('API Testing', () => {

    // Passing Test
    it('GET - read - Pass', () => {

        cy.request({
            method: 'GET',
            url:'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization' : 'Bearer' + Cypress.env('accessToken')
            }
        }).then((response) => {
            expect(response).to.have.property('status', 200);
            expect(response.body).to.not.be.null;
        });
    });

    // Failing Test
    it('GET - read - Failing', () => {

        cy.request({
            method: 'GET',
            url:'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization' : 'Bearer' + Cypress.env('accessToken')
            }
        }).then((response) => {
            expect(response).to.have.property('status', 200);
            expect(response.body.data).to.have.length(20);
        });
    });

    // // Testing Body
    // it('GET - read - User Details', () => {

    //     cy.request({
    //         method: 'GET',
    //         url:'https://gorest.co.in/public/v2/users/1661',
    //         headers: {
    //             'Authorization' : 'Bearer' + Cypress.env('accessToken')
    //         }
    //     }).then((response) => {
    //         expect(response).to.have.property('status', 200);
    //         expect(response.body.data).to.have.property('name');
    //         expect(response.body.data.name).to.eq('Miss Garud Khan');
    //     });
    // });

});