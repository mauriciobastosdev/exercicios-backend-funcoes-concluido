const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        let qtdTotal = 0;
        let somaTotal = 0;
        for (let produto of carrinho.produtos) {
            qtdTotal += produto.qtd;
            somaTotal += (produto.qtd * produto.precoUnit) / 100;
        }
        console.log(`Cliente: ${carrinho.nomeDoCliente}`);
        console.log(`Total de itens: ${qtdTotal} ${qtdTotal === 1 ? "item" : "itens"}`);
        console.log(`Total a pagar: R$ ${somaTotal}`);
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
carrinho.addProduto = function (produto) {
    const produtoExistente = this.produtos.find((p) => p.id === produto.id);

    if (produtoExistente) {
        produtoExistente.qtd += produto.qtd;
    } else {
        this.produtos.push(produto);
    }
}
carrinho.imprimirDetalhes = function () {
    console.log(`Cliente: ${this.nomeDoCliente}`);
    for (const [index, produto] of this.produtos.entries()) {
        console.log(`Item ${index + 1} - ${produto.nome} - ${produto.qtd} und - R$ ${(produto.qtd * produto.precoUnit / 100).toFixed(2)}`);
    }
    this.imprimirResumo();
}
carrinho.calcularTotalDeItens = function () {
    let totalItens = 0;
    for (const produto of this.produtos) {
        totalItens += produto.qtd;
    }
    return totalItens;
}
carrinho.calcularTotalAPagar = function () {
    let totalPagar = 0;
    for (const produto of this.produtos) {
        totalPagar += produto.qtd * produto.precoUnit;
    }
    return totalPagar;
}
carrinho.calcularDesconto = function () {
    const totalItens = this.calcularTotalDeItens();
    const totalAPagar = this.calcularTotalAPagar();
    let desconto = 0;

    if (totalItens > 4) {
        let menorPreco = this.produtos[0].precoUnit;
        for (const produto of this.produtos) {
            if (produto.precoUnit < menorPreco) {
                menorPreco = produto.precoUnit;
            }
        }
        desconto = menorPreco * 100;
    } else if (totalAPagar > 10000) {
        desconto = totalAPagar * 0.1;
    }

    return desconto;
}
console.log("Desconto:", carrinho.calcularDesconto()); // Desconto: 3000
carrinho.imprimirDetalhes();