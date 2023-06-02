describe('Novidades', () => {
    it.only('Cdastrar e-mail com sucesso', () => {
        //acessar a minha aplicação
        cy.visit('/')
            .get('#top_header')

        // criar os steps/ações
        // selecionar esse elemento
        // preencher um campo
        cy.get('.form-control')
            .type('leticia.az@hotmail.com')
        // click num elemento
        cy.get('.clear .theme-btn-one.btn_md')
            .click()
        cy.get('.swal2-title')
            .should('be.visible')
            .should('have.text', 'Success')

        // #mc_embed_signup > form > div > div > button
        // .clear .theme-btn-one.btn_md
    })
})