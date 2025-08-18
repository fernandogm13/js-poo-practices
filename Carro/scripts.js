class Car {
  constructor(brand, color, consumption, tankCapacity = 50, fuelLevel = 0) {
    this.brand = brand;
    this.color = color;
    this.consumption = Math.max(0, consumption);
    this.tankCapacity = Math.max(1, tankCapacity);
    this._fuelLevel = Math.min(Math.max(fuelLevel, 0), this.tankCapacity);
  }

  get fuelLevel() {
    return this._fuelLevel;
  }
  set fuelLevel(amount) {
    if (amount < 0) amount = 0;
    if (amount > this.tankCapacity) amount = this.tankCapacity;
    this._fuelLevel = amount;
  }

  drive(km) {
    if (this.fuelLevel >= km * this.consumption) {
      this.fuelLevel -= km * this.consumption;
      console.log(`Dirigiu ${km}Km, Combustível: ${this.fuelLevel}L.`);
    } else {
      console.log("Não há combustível suficiente!");
    }
  }

  refuel(amount) {
    if (this.fuelLevel + amount <= this.tankCapacity) {
      this.fuelLevel += amount;
      console.log(`Adicionando ${amount}L, Combustível: ${this.fuelLevel}L.`);
    } else {
      const spaceLeft = this.tankCapacity - this.fuelLevel;
      this.fuelLevel = this.tankCapacity;
      console.log(
        `Só coube ${spaceLeft}L para preencher o tanque. Agora está cheio!`
      );
    }
  }

  infoCar() {
    console.log(
      `Modelo: ${this.brand}, Cor: ${this.color}, Capacidade do tanque: ${this.tankCapacity}, Consumo: ${this.consumption}L/Km, Combustível: ${this.fuelLevel}L.`
    );
  }
}

let myCar = new Car("Fusca", "Preto", 2, 20, 5);
myCar.infoCar();
myCar.refuel(2);
myCar.drive(3);
myCar.drive(1);
myCar.refuel(50);
