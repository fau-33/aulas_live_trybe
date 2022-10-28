const pizzas = [
  { flavor: 'Frango com Catupiry', price: 12.20 },
  { flavor: 'Marguerita', price: 13.50},
  { flavor: 'Gratinada', price: 15.32},
  { flavor: 'Quatro Queijos', price: 13.50 },
  { flavor: 'Xablau com um pouquinho assim de molho', price: 0 }
];

const infoPizzas = () => {
  pizzas.forEach((pizza) => {
    if(pizza.price > 0) {
      pizza.type = 'Pizza paga';
    }else {
      pizza.type = 'Pizza grátis';
    }
  })
  return pizzas;
}

//console.log(infoPizzas());


module.exports = {
  infoPizzas,
  
};