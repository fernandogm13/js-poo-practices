//Banco
class Banco {
  static info() {
    console.log("Bem-vindo ao Banco, cria sua conta:");
  }
  constructor(saldo = 0) {
    this.saldo = saldo;
  }
  verificarSaldo() {
    console.log(`Saldo atual: R$ ${this.saldo}`);
  }
  deposito(valor) {
    this.saldo += valor;
    console.log(`Valor depositado: R$ ${this.saldo}`);
  }
  saque(valor) {
    if (this.saldo - valor < 0) {
      console.log("Saque maior que o saldo disponível!");
      this.verificarSaldo();
      return;
    }
    this.saldo -= valor;
    console.log(`Valor sacado: R$ ${valor}`);
    this.verificarSaldo();
  }
}

Banco.info();
let minhaConta = new Banco();
minhaConta.verificarSaldo();
minhaConta.deposito(1000);
minhaConta.saque(500);
minhaConta.saque(600);
minhaConta.saque(500);
