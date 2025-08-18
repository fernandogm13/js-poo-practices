class Voo {
  constructor(codigoVoo, origem, destino, assentosDisponiveis) {
    this.codigoVoo = codigoVoo;
    this.origem = origem;
    this.destino = destino;
    this.assentosDisponiveis = assentosDisponiveis;
  }
  reservarAssento() {
    if (this.assentosDisponiveis > 0) {
      this.assentosDisponiveis--;
      return console.log("Assento reservado com sucesso!");
    } else {
      return console.log("Não há assentos disponíveis.");
    }
  }
  consultarAssentosDisponivei() {
    return this.assentosDisponiveis;
  }
}

const voo = new Voo("ABC123", "São Paulo", "Rio de Janeiro", 100);
voo.reservarAssento();
console.log(voo.consultarAssentosDisponivei());
