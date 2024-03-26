/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Iniciando o jogo Genius', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    })

    it('Verifica se o jogo foi iniciado corretamente', () => {
        // Iniciando o jogo como nome que o usuário digitou
        cy.get('.chakra-input').click()
        cy.get('.chakra-input').type('Leonardo')
        cy.get('.chakra-button').click();

        cy.wait(3000);

        // Renderizou o componente que contém o texto "Bom Jogo"
        cy.contains('Bom Jogo')
    });

    it('Verifica se a função showSequence foi executada', () => {
        // Iniciando o jogo como nome que o usuário digitou
        cy.get('.chakra-input').click();
        cy.get('.chakra-input').type('Leonardo');
        cy.get('.chakra-button').click();


        cy.wait(3000);

         // Verifica se renderizou o componente que contém o texto "Bom Jogo"
        cy.contains('Bom Jogo')

        // Verifica se os componentes BOX receberam o brightness(1) ou None
        cy.get('.css-1mwp7mh')
            .should('have.css', 'filter')
            .and('match', /brightness\(1\)|none/)

        cy.get('.css-1hcqbfb')
            .should('have.css', 'filter')
            .and('match', /brightness\(1\)|none/)

        cy.get('.css-1wkfwtt')
            .should('have.css', 'filter')
            .and('match', /brightness\(1\)|none/)

        cy.get('.css-1005ez2')
            .should('have.css', 'filter')
            .and('match', /brightness\(1\)|none/)
    });
});

describe('Verifica interação do usuário com as cores do jogo', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    })


    it('Verifica se o jogador clica na cor correta e o jogo continua', () => {
        // Iniciando o jogo como nome que o usuário digitou
        cy.get('.chakra-input').click();
        cy.get('.chakra-input').type('Leonardo');
        cy.get('.chakra-button').click();

        cy.wait(3000);

         // Verifica se renderizou o componente que contém o texto "Bom Jogo"
        cy.contains('Bom Jogo');

        // Simula o clique na cor correta
        cy.get('.css-1005ez2').click();

        cy.wait(1000);

        // Verifica se o texto "pontuação" não está presente
        cy.get('p').should('not.contain', 'pontuação');
    });

    it('Verifica se o jogador clica na cor errada e o jogo encerra', () => {
        // Iniciando o jogo como nome que o usuário digitou
        cy.get('.chakra-input').click();
        cy.get('.chakra-input').type('Leonardo');
        cy.get('.chakra-button').click();

        cy.wait(3000);

         // Verifica se renderizou o componente que contém o texto "Bom Jogo"
        cy.contains('Bom Jogo');

        // Simula o clique na cor errada
        cy.get('.css-1005ez2').click();

        cy.wait(1000);

        // Verifica se o texto "pontuação" está presente
        cy.contains('pontuação');
    });
});