const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }
];

const filterNoDriver = (users) => {
  return users.filter((user) => user.isDriver === false);
}
//console.log(filterNoDriver(users));

module.exports = {
  filterNoDriver,
  users,
}