# Projeto final - WEB

Como escopo do nosso projeto, deverá ser observado os seguintes requisitos:
  
  - I - Processo de Venda
  - II - Cadastro de Produtos
  - III - Cadastro de Fabricante
  - IV - Cadastro de Clientes
  - V - Emissão de Relatórios

### Requisitos

1. O sistema deverá ser desenvolvido utilizando arquitetura MVC Clássica onde deverá ser 
desenvido um Controller para cada View existente no projeto.

2. Como estrutura (modelagem dos dados), será necessário modelar as serguintes tabelas:
  
  - Cliente (idCliente, nomeCliente, enderecoCliente, telefoneCliente e idCidade)
  - Cidade (codigoCidade, nomeCidade, estadoCidade)

Logo, teremos uma tabela para cadastrarmos os clientes com as suas respectivas 
informações como nome, endereço e telefone. Como precisamos categorizar os 
clientes por cidade, é necessário criar uma tabela auxiliar, ligando os clientes com 
suas respectivas cidades

3. Precisamos também controlar produtos:

  - Produto (idProduto, descricaoProduto, estoqueProduto, precoCusto, precoVenda e 
idFabricante)
  - Fabricante (idFabricante, nomeFabricante, siteFabricante)

Neste caso, cadastraremos informações como: descrição, quantidade em estoque, 
preço de custo e preço de venda. Precisamos também saber qual é o fabricante de 
cada produto. Como podem surgir novos fabricantes a qualquer momento, 
preferimos criar uma tabela auxiliar que contenha o nome e o site do fabricante para 
podermos categorizar os produtos por fabricante.

4. Proximo controle que deveremos implementar são das vendas realizadas onde teremos as 
seguintes tabelas:

  - Venda (idVendas, idCliente, dataVenda, valorTotal, valorPago e desconto)
  - Item (idItem, idVenda, idProduto, quantidadeItem)

Neste caso, precisaremos armazenar para qual cliente a venda foi realizada e em 
qual data. Também precisaremos armazenar o valor total da venda e também o valor 
pago, caso tenha sido concedido algum desconto. Em uma venda, podem ser 
vendidas quantidades diferentes de produtos. Portanto faz-se necessária a criação 
de uma tabela para armazenar quais foram os produtos que participaram de uma 
determinada venda.

5. Como ultimo tópico a ser desenvolvido, deverá ser implementado um relatório com os seguintes 
requisitos:

Nosso relatório exibirá em tela uma tabela contendo as vendas de um período, dentro 
do qual serão exibidas em tela a data da venda, o cliente para o qual a venda fora 
realizada e todos os itens que compuseram aquela venda: descrição do produto, 
quantidade, preço e um subtotal.

**Nota**: como instruções adicionais, o projeto poderá ser desenvolvido em PHP ou Javascript. O 
uso de frameworks para as camadas de interação e persistencia de dados são fortemente 
recomendados. Procedimentos para Internacionalização, Controle de Sessões e Registros 
deverão ser implementados.