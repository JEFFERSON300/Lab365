class Conta {
  #senha;

  constructor(saldo, senha) {
    this.saldo = saldo;
    this.#senha = senha;
  }

  get senha() {
    return this.#senha;
  }

  set senha(novaSenha) {
    this.#senha = novaSenha;
  }

  deposito(senhaDigitada) {
    if (this.senha == senhaDigitada) {
      let adicionar = Number(
        window.prompt("Digite o valor que deseja adicionar ao seu saldo")
      );
      this.saldo += adicionar;
      console.log(`Saldo final: ${this.saldo}`);
    } else {
      console.log("Senha invalida");
    }
  }

  retirada(senhaDigitada) {
    if (this.senha == senhaDigitada) {
      let retirar = Number(
        window.prompt("Digite o valor que deseja retirar do seu saldo")
      );
      if (this.saldo < retirar) {
        console.log("Saldo Insuficiente");
      } else {
        this.saldo -= retirar;
        console.log(`Saldo final: ${this.saldo}`);
      }
    } else {
      console.log("Senha invalida");
    }
  }
}

class ContaPoupanca extends Conta {
  constructor(saldo, senha, deposito, retirada) {
    super(saldo, senha, deposito, retirada);
  }

  juros() {
    let newValue = (this.saldo * 1.007).toFixed(2);
    console.log(`Após o ganho o novo saldo é R$ ${newValue}`);
  }
}

let contaCorrente = new ContaPoupanca(300, 1235);
contaCorrente.deposito(1235);
contaCorrente.retirada(1235);
contaCorrente.juros();
