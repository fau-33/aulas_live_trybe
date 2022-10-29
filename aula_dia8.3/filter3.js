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
// 1. Encontre todas as cidades da região Nordeste (NE)
const citiesNENames = () => {
  return cities.filter((city) => city.region === 'NE')
  .map((city) => city.name);
}

console.log(citiesNENames());
/* let arrayCities = [];
  citiesNEFilter.forEach((city) => arrayCities.push(city.name));
  return arrayCities;
 */
// 2. Encontre todas as cidades que comecem com a letra C