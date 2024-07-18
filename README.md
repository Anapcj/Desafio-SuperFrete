DESAFIO TÉCNICO SUPERFRETE:

Em parceria com SuperFrete

APRESENTAÇÃO:

Para garantir a qualidade da tela de calculo de frete SuperFrete, foram desenvolvidos e executados testes das funcionalidades da mesma, com o objetivo de garantir a boa experiência do usuário final e proporcionar a expansão/aperfeiçoamento do sistema.

FERRAMENTAS DE TESTES UTILIZADAS:

Framework Cypress - Devido a experiência de uso e familiaridade, esta ferramenta foi utilizada para a automação e execução dos casos de testes.

PASSO A PASSO E LINKS PARA A INSTALAÇÃO DA FERRAMENTA:

Para a utilização do framework Cypress, siga os seguintes passos:

1 - Faça o download da interfae VSCode no site: https://code.visualstudio.com/download (escolha entre as opções Windows, Linux e MAC),

2 - Instale o Node JS acessando o site: https://nodejs.org,

3 - Crie uma pasta local em seu computador e selecione a opção de abrí-la com o VSCode,

4 - Ao abrir a pasta, abra o terminal dentro do VSCode e instale o Cypress utilizando os seguites comandos:

npm init -y

E por fim,

npm install cypress

5 - Abra o Cypress e confira se está tudo ok com o seguinte comando:

npx cypress open

6 - Instale o plugin mochawesome reporter para a geração de relatórios dos testes automatizados utilizando o seguinte comando:

npm i --save-dev cypress-mochawesome-reporter

CASOS DE TESTE:

Para a execução dos testes das funcionalidades, foram desenvolvidos os seguintes cenários:

Cenário 1: Validar Campo ‘CEP de origem’ Vazio;

Cenário 2: Validar Campo ‘Peso’ Vazio;

Cenário 3: Validar Campo ‘Altura’ Vazio;

Cenário 3.1: Campo ‘Altura’ Inválida;

Cenário 4: Validar Campo ‘Largura’ Vazio;

Cenário 4.1: Campo ‘Largura’ Inválida;

Cenário 5: Validar Campo ‘Comprimento’ Vazio;

Cenário 5.1: Campo ‘Comprimento’ Inválido;

Cenário 6: Validar Campo ‘CEP de destino’ Vazio;

Cenário 7: Calcular Frete;

Cenário 8: Cálculo do Frete sem CEP de origem;

Cenário 9: Cálculo do Frete sem CEP de destino;

Cenário 10: Salvar Informações da Origem;

Cenário 11: Limpar Informações da Origem.

