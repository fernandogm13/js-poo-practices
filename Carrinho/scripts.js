//e-commerce;
class Carrinho {
  constructor(itens, qtd, valorTotal) {
    this.itens = itens; // array com objetos dos produtos
    this.qtd = qtd; // quantidade total de itens no carrinho
    this.valorTotal = valorTotal; // valor total do carrinho
  }

  addItem(item) {
    let count = 0; // marca se o item já existia

    // Percorre cada índice do array "this.itens"
    for (let itemCarrinho in this.itens) {
      // Compara o id do item novo com o id do item no carrinho
      if (this.itens[itemCarrinho].id == item.id) {
        this.itens[itemCarrinho].qtd += item.qtd; // soma a quantidade
        count = 1; // achou o item
      }
    }

    // Se não achou (count == 0), adiciona no array
    if (count == 0) {
      this.itens.push(item);
    }

    // Atualiza quantidade e valor total do carrinho
    this.qtd += item.qtd;
    this.valorTotal += item.preco * item.qtd;
  }

  removeItem(item) {
    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == item.id) {
        // Procura a posição (índice) do item no array
        let index = this.itens.findIndex(function (obj) {
          return obj.id == item.id;
        });

        // Diminui quantidade e valor total
        this.qtd -= this.itens[itemCarrinho].qtd;
        this.valorTotal -=
          this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;

        // Remove o item pelo índice encontrado
        this.itens.splice(index, 1);
      }
    }
  }
}

let carrinho = new Carrinho(
  [
    {
      id: 1,
      nome: "Camisa",
      qtd: 1,
      preco: 20,
    },
    {
      id: 2,
      nome: "Calça",
      qtd: 2,
      preco: 50,
    },
  ],
  3,
  120
);

console.log(carrinho);

carrinho.addItem({ id: 1, nome: "camisa", qtd: 2, preco: 20 });
console.log(carrinho);

carrinho.addItem({ id: 3, nome: "Boné", qtd: 1, preco: 15 });
console.log(carrinho);

carrinho.removeItem({ id: 1, nome: "camisa", qtd: 1 });
console.log(carrinho);
