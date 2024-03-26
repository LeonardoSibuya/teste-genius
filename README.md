# Genius Game

O Genius Game é um jogo desenvolvido em React utilizando styled-components, Chakra UI e Cypress para testes automatizados.

## Instalação

Certifique-se de ter o Node.js instalado em sua máquina. Em seguida, execute o seguinte comando na raiz do projeto para instalar as dependências:

npm install

## Execução

Para iniciar o jogo, execute o seguinte comando:

npm run dev e abra o localhost em seu navegador.

## Modo de Jogo

Para jogar o Genius, siga os passos abaixo:

1. **Insira seu nome para registrar quem está jogando.**
2. **Aguarde o cronômetro zerar.**
3. **Uma sequência aleatória de cores será exibida.**
4. **Reproduza a sequência exata das cores clicando nelas.**
5. **Avance para novas sequências e acumule pontos.**
6. **O jogador poderá reiniciar o jogo a qualquer momento.**
7. **Ao clicar na cor errada da sequência, o jogo será finalizado.**
8. **A pontuação do jogador será exibida.**
9. **Ao finalizar o jogo, o jogador poderá clicar em começar um novo jogo**

Divirta-se jogando o Genius Game!

## Testes Automatizados com Cypress ^12.6.0

Para executar os testes automatizados com o Cypress, siga os passos abaixo:

1. Certifique-se de que o jogo está em execução em outra aba do terminal.
2. No terminal, execute o seguinte comando:

npm run cypress open

3. Isso abrirá uma janela do navegador Cypress.
4. Clique em "E2E Testing" para selecionar os testes de ponta a ponta.
5. Escolha o navegador em que deseja executar os testes.
6. Outro navegador será inicializado.
7. Selecione o genius.cy.js e os testes serão executados.
8. Para encerrar os testes, pressione Ctrl + C no terminal e confirme.

Aproveite o Cypress para garantir a qualidade do seu jogo!
