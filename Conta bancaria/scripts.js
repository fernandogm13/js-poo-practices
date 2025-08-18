class BankAccount {
  constructor(bankAccount, checkingBalance, savingsBalance, savingsInterest) {
    this.bankAccount = bankAccount;
    this._checkingBalance = checkingBalance;
    this._savingsBalance = Math.max(0, savingsBalance);
    this._savingsInterest = Math.max(0.05, savingsInterest);
  }

  get checkingBalance() {
    return this._checkingBalance;
  }
  get savingsBalance() {
    return this._savingsBalance;
  }
  get savingsInterest() {
    return this._savingsInterest;
  }

  set checkingBalance(value) {
    this._checkingBalance = value;
  }

  set savingsBalance(value) {
    if (value < 0) {
      console.log("Conta corrente não pode ser negativa!");
      value = 0;
    }
    this._savingsBalance = value;
  }
  set savingsInterest(rate) {
    if (rate < 0) {
      console.log("Juros não pode ser negativo!");
      rate = 0.05;
    }
    this._savingsInterest = rate;
  }

  deposit(amount) {
    if (amount <= 0) {
      return console.log("O valor não pode ser 0 ou negativo!");
    }
    this.checkingBalance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      return console.log("O valor não pode ser 0 ou negativo!");
    }
    this.checkingBalance -= amount;
  }

  toSavings(amount) {
    if (amount <= 0) {
      return console.log("O valor não pode ser 0 ou negativo!");
    }
    if (this.checkingBalance - amount < 0) {
      return console.log("Não há dinheiro suficiente na conta!");
    }
    this.checkingBalance -= amount;
    this.savingsBalance += amount;
  }

  toChecking(amount) {
    if (amount <= 0) {
      return console.log("O valor não pode ser 0 ou negativo!");
    }
    if (this.savingsBalance - amount < 0) {
      return "Saldo insuficente na poupança!";
    }
    this.checkingBalance += amount;
    this.savingsBalance -= amount;
  }

  applyInterest() {
    this.savingsBalance += (this.savingsBalance * this.savingsInterest) / 100;
  }

  infoBankAccount() {
    let saldo = `R$${this.checkingBalance.toFixed(2)}`;
    let poupana = `R$${this.savingsBalance.toFixed(2)}`;
    let juros = `${(this.savingsInterest * 100).toFixed(2)}%`;
    console.log(
      `Nome da conta: ${this.bankAccount}, Saldo: ${saldo}, Poupança: ${poupana}, Juros: ${juros}`
    );
  }
}

class BonusAccount extends BankAccount {
  constructor(bankAccount, checkingBalance, savingsBalance, savingsInterest) {
    super(bankAccount, checkingBalance, savingsBalance, savingsInterest * 2);
  }
}

let contaPrincipal = new BankAccount("Fe", 2000, 0, 1.5);
contaPrincipal.infoBankAccount();
contaPrincipal.deposit(1000);
contaPrincipal.withdraw(-10);
contaPrincipal.toSavings(1000);
contaPrincipal.toChecking(500);
contaPrincipal.infoBankAccount();
contaPrincipal.applyInterest();
contaPrincipal.infoBankAccount();

let contaBonus = new BonusAccount("FeBônus", 0, 1000, 1.5);
contaBonus.infoBankAccount();
contaBonus.applyInterest();
contaBonus.infoBankAccount();