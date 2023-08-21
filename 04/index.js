const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor;
        if (valor > 0) {
            this.historicos.push("Deposito: " + (valor / 100).toFixed(2))
        }
        console.log(`Depósito de R$${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`);
    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`);
        } else {
            this.saldo -= valor;
            this.historicos.push("Saque: " + (valor / 100).toFixed(2))
            console.log(`Depósito de R$${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`);
        }
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: R$ ${(this.saldo / 100).toFixed(2)}`);
        console.log(`Histórico: ${this.historicos}`)
    }
}

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());