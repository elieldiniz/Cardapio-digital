function finalizarPedido() {
    // Verificar se o carrinho está vazio
    const carrinho = document.getElementById('carrinho');
    const itensCarrinho = carrinho.querySelectorAll('div');
    
    if (itensCarrinho.length === 0) {
      alert("O carrinho está vazio. Por favor, adicione itens ao seu pedido.");
      return;
    }
    
    // Coletar os itens do carrinho para confirmação
    let itensTexto = "";
    itensCarrinho.forEach((item) => {
      if (!item.textContent.startsWith("Total:")) {
        itensTexto += item.textContent + "\n";
      }
    });

    // Exibir os itens do carrinho para confirmação
    const confirmar = confirm("Os seguintes itens estão no seu carrinho:\n\n" + itensTexto + "\nDeseja finalizar o pedido?");
    
    if (confirmar) {
        // Solicitar nome completo e endereço do cliente
        const nome = prompt("Por favor, insira seu nome completo:");
        const endereco = prompt("Por favor, insira seu endereço para entrega:");

        // Exibir opções de pagamento
        const opcoesPagamento = ["Cartão de Crédito", "Cartão de Débito", "Pix"];
        let opcaoPagamento = prompt("Escolha a forma de pagamento (Digite o número correspondente):\n1. Cartão de Crédito\n2. Cartão de Débito\n3. Pix");

        // Validar a escolha de pagamento
        if (opcaoPagamento < 1 || opcaoPagamento > 3) {
            alert("Opção de pagamento inválida.");
            return;
        }

        opcaoPagamento = opcoesPagamento[opcaoPagamento - 1];

        // Exibir resumo do pedido para confirmação
        const resumoPedido = `Resumo do Pedido:
        Nome: ${nome}
        Endereço: ${endereco}
        Forma de Pagamento: ${opcaoPagamento}
        Itens:
        ${itensTexto}
        Total: ${carrinho.querySelector('div:last-child').textContent}
        `;
        
        const confirmarPedido = confirm(resumoPedido + "\nDeseja confirmar o pedido?");
        
        if (confirmarPedido) {
            alert("Pedido finalizado com sucesso!");
            limparCarrinho();
        } else {
            alert("Pedido cancelado.");
        }
    }
}

  
  function adicionarItensSelecionados() {
    // Obter todos os checkboxes marcados
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  
    // Criar um array para armazenar os itens selecionados
    let itensSelecionados = [];
  
    // Iterar sobre os checkboxes marcados e adicionar os valores ao array
    checkboxes.forEach((checkbox) => {
      itensSelecionados.push(checkbox.value);
    });
  
    // Exibir os itens selecionados no carrinho
    const carrinho = document.getElementById('carrinho');
    carrinho.innerHTML = '<h2>Carrinho de Compras</h2>';
    let total = 0; // Inicializa o total como zero
  
    // Adiciona os itens ao carrinho e calcula o total
    itensSelecionados.forEach((item) => {
      // Extrai o preço do valor do item
      let precoMatch = item.match(/R\$(\d+,\d+)/);
      if (precoMatch) {
        let preco = precoMatch[1];
        preco = parseFloat(preco.replace(',', '.'));
        total += preco;
      }
  
      // Adiciona o item ao carrinho
      carrinho.innerHTML += `<h2 style="color: #FFFFFF; font-size: 20px;">${item}</h2>`;
    });
  
    // Exibe o total no carrinho
    carrinho.innerHTML += `<div style="color: #111; font-size: 20px">Total: R$${total.toFixed(2)}</div>`;
  }
  
  function limparCarrinho() {
    // Limpar o conteúdo do carrinho
    const carrinho = document.getElementById('carrinho');
    carrinho.innerHTML = '<h2>Carrinho de Compras</h2>';
    
    // Desmarcar todos os checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
  function removerItem() {
    const item = prompt("Qual item você deseja remover?");
    
    if (item) {
        const confirmar = confirm(`Você deseja remover o item: ${item}?`);
        
        if (confirmar) {
            const carrinho = document.getElementById('carrinho');
            const itensCarrinho = carrinho.querySelectorAll('div');
            let itemRemovido = false;

            // Encontrar e remover o item do carrinho
            itensCarrinho.forEach((div) => {
                if (div.textContent.includes(item) && !div.textContent.startsWith("Total:")) {
                    div.remove();
                    itemRemovido = true;
                }
            });

            if (itemRemovido) {
                // Recalcular o total após a remoção do item
                let total = 0;
                carrinho.querySelectorAll('div').forEach((div) => {
                    if (!div.textContent.startsWith("Total:")) {
                        let precoMatch = div.textContent.match(/R\$(\d+,\d+)/);
                        if (precoMatch) {
                            let preco = precoMatch[1];
                            preco = parseFloat(preco.replace(',', '.'));
                            total += preco;
                        }
                    }
                });

                // Atualizar o total no carrinho
                const totalDiv = carrinho.querySelector('div:last-child');
                if (totalDiv) {
                    totalDiv.innerHTML = `Total: R$${total.toFixed(2)}`;
                }
            } else {
                alert("Item não encontrado no carrinho.");
            }
        }
    }
}


  
  // Adiciona o event listener ao botão
  document.getElementById('adicionar-itens').addEventListener('click', adicionarItensSelecionados);