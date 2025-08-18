class Address {
  constructor(street, district, city, state) {
    this.street = street;
    this.district = district;
    this.city = city;
    this.state = state;
  }

  set newStreet(newStreet) {
    this.street = newStreet;
  }

  set newDistrict(newDistrict) {
    this.district = newDistrict;
  }

  set newCity(newCity) {
    this.city = newCity;
  }

  set newState(newState) {
    this.state = newState;
  }

  getFullAddress() {
    return `${this.street}, ${this.district}, ${this.city}, ${this.state}`;
  }

  /* updateField(field, value) {
    if (this.hasOwnProperty(field)) {
      this[field] = value;
    } else {
      console.log(`O campo "${field}" não existe no endereço.`);
    }
  } */
}

let myAddress = new Address(
  "Av Edith Inácia da Silva",
  "Bairro Vila Paulista",
  "Mogi das Cruzes",
  "São Paulo"
);

console.log(myAddress.getFullAddress());
/* myAddress.updateField("street", "Rua das Flores");
myAddress.updateField("district", "Jardim Esperança");
console.log(myAddress.getFullAddress());
myAddress.updateField("number", 150); */

myAddress.newStreet = "Rua das Flores";
console.log(myAddress.getFullAddress());
