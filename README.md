
# Fast Food Max - Sistema de Menu Digital

Visão Geral

Este projeto é um sistema de menu digital desenvolvido para fins acadêmicos. Ele permite que os usuários selecionem itens de um cardápio, adicionem esses itens a um carrinho de compras e finalizem seus pedidos. O sistema inclui funcionalidades como seleção de itens, resumo do pedido, seleção de método de pagamento e confirmação do pedido.


## Funcionalidades

Os usuários podem navegar por diferentes categorias, como hambúrgueres, salgados e bebidas, selecionando itens para adicionar ao carrinho.
Carrinho de Compras: Os itens selecionados são exibidos no carrinho, juntamente com o preço total.
Finalização do Pedido: Os usuários são solicitados a fornecer seu nome, endereço de entrega e a selecionar um método de pagamento (Cartão de Crédito, Cartão de Débito, Pix).
Resumo e Confirmação do Pedido: Um resumo do pedido é exibido para confirmação final, incluindo detalhes dos itens, custo total e informações do cliente.
Remoção de Itens e Limpeza do Carrinho: Os usuários podem remover itens do carrinho ou limpar o carrinho inteiro, se necessário.
Estrutura dos Arquivos
index.html: Contém a estrutura HTML do sistema de menu digital.
style.css: Contém os estilos CSS para o layout e design da página.
script.js: Contém o código JavaScript responsável pelo funcionamento do carrinho, finalização do pedido e interações do usuário.
Como Funciona
Adicionando Itens ao Carrinho:

Os usuários podem selecionar itens do menu marcando as caixas de seleção associadas a cada item. O botão "Adicionar Itens Selecionados" aciona a função adicionarItensSelecionados(), que coleta os itens selecionados e atualiza o carrinho.
Visualizando e Confirmando o Carrinho:

O carrinho exibe todos os itens selecionados e o preço total. A função finalizarPedido() permite que os usuários finalizem o pedido, solicitando nome, endereço e método de pagamento.
Confirmação do Pedido:

Antes de finalizar o pedido, um resumo é exibido e os usuários devem confirmar os detalhes. Se confirmado, o pedido é processado e o carrinho é esvaziado.
Remoção de Itens do Carrinho:

Os usuários podem remover itens específicos usando a função removerItem(), que recalcula o total e atualiza a exibição do carrinho.
Requisitos
Um navegador web para visualizar a página HTML e interagir com o sistema.
Nenhuma integração com backend foi implementada, pois esta é uma demonstração apenas do frontend.
Iniciando
Clone este repositório.
Abra o arquivo index.html em um navegador web.
Use o menu para selecionar itens, visualizar o carrinho e finalizar o pedido.
Contribuições
Este projeto foi desenvolvido como parte de um exercício acadêmico. Contribuições para melhorar o código, adicionar funcionalidades ou integrar um sistema backend são bem-vindas.





## Licença
Licença Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
[MIT](https://choosealicense.com/licenses/mit/)
