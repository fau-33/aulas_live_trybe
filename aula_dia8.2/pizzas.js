const pizzas = [
  { flavor: 'Frango com Catupiry', price: 12.20 },
  { flavor: 'Marguerita', price: 13.50},
  { flavor: 'Gratinada', price: 15.32},
  { flavor: 'Quatro Queijos', price: 13.50 },
  { flavor: 'Xablau com um pouquinho assim de molho', price: 0 }
];
// FOREACH()
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

// SOME()
const priceLessThan = (number) => {
 return pizzas.some((pizza) => {
   return pizza.price < number;
  })
}
// EVERY()
const everyPriceBiggerThan = (number) => {
  return pizzas.every((pizza) => {
    return pizza.price >= number;
  })
}
// FIND()
const findPizza = (number) => {
  return pizzas.find((pizza) => pizza.price === number);
}
//console.log(findPizza(13.50));

// SORT()
const sortPizzas = (key) => {
  if(key === 'flavor'){
    return pizzas.sort((a, b) => a[key].localeCompare(b[key]));
  } else if(key === 'price'){
    return pizzas.sort((a, b) => a.price - b.price);
  } else {
    return 'Parâmetro inválido';
  }
}

module.exports = {
  infoPizzas,
  priceLessThan,
  everyPriceBiggerThan,
  findPizza,
  sortPizzas,
};