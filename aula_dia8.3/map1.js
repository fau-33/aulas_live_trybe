const cities = [
  { state: 'AM', name: 'Manaus', region: 'N'},
  { state: 'PA', name: 'Belém', region: 'N'},
  { state: 'TO', name: 'Porto Nacional', region: 'N'},
  { state: 'MG', name: 'Nepomuceno', region: 'SE'},
  { state: 'BA', name: 'Cachoeira', region: 'NE'},
  { state: 'PR', name: 'Curitiba', region: 'S'},
  { state: 'SP', name: 'Hortolândia', region: 'SE'},
  { state: 'RN', name: 'Touros', region: 'NE'},
  { state: 'CE', name: 'Jericoacoara', region: 'NE'},
  { state: 'TO', name: 'Três Pedras', region: 'N'},
  { state: 'MG', name: 'João Pinheiro', region: 'SE'}
];

// 1. Transforme o array de objetos cities em um array de strings com o seguinte formato:
//"${nomeDaCidade} - ${siglaDoEstado}"

const citiesAndstates = () => {
  return cities.map((city) => `${city.name} - ${city.state}`);
}

//console.log(citiesAndstates());

//2. Transforme o array em outro array que contenha SOMENTE os nomes das cidades, porém com letras maiúsculas.

const citiesUppercase = (array) => {
  const citiesUppercase = array.map((city) => city.name.toUpperCase());
  citiesUppercase.sort();
  return citiesUppercase;
}

console.log(citiesUppercase(cities));