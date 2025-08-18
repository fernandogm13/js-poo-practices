class Livro {
  constructor(titulo, autor, disponivel) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = disponivel;
  }
  emprestar() {
    if (this.disponivel === true) {
      this.disponivel = false;
    } else {
      console.log("Livro não disponível para emprestar!");
    }
  }
  devolver() {
    if (this.disponivel === false) {
      this.disponivel = true;
    } else {
      console.log("Livro já está na biblioteca");
    }
  }
  consultarDisponibilidade() {
    if (this.disponivel === true) {
      console.log("Livro disponível!");
    } else {
      console.log("Livro indisponível");
    }
  }
}

let livro  = new Livro("Neil Gaiman", "Coraline", true);
livro.consultarDisponibilidade();
livro.emprestar();
livro.consultarDisponibilidade();
livro.emprestar();
livro.consultarDisponibilidade();
livro.devolver();
livro.consultarDisponibilidade();
livro.devolver();