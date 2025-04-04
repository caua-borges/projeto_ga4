const carrinho = [];
let total = 0;

function adicionarAoCarrinho(produto, preco) {
    carrinho.push({ produto, preco });
    total += preco;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(
        {
            event: 'add_to_cart',
            produto: produto,
            preco: preco,
            total: total
        }
    );
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('carrinho');
    const totalElemento = document.getElementById('total');

    listaCarrinho.innerHTML = '';
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.produto} - R$${item.preco}`;
        listaCarrinho.appendChild(li);
    });

    totalElemento.textContent = `Total: R$${total}`;
}