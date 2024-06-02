//how to use map filter and reduce to iterate through every items and apply specific function as we iterate
//write a function mapNameFamily that takes in characters array and returns an array with the name and house
//og each character

const characters = [
  { id: 1, name: "Arya", house: "Stark" },
  { id: 4, name: "Sansa", house: "Stark" },
  { id: 16, name: "Eddard", house: "Stark" },
  { id: 17, name: "Catelyn", house: "Stark" },
  { id: 20, name: "Robb", house: "Stark" },
  { id: 28, name: "Rickon", house: "Stark" },
  { id: 40, name: "Jaime", house: "Lannister" },
  { id: 41, name: "Cersei", house: "Lannister" },
  { id: 42, name: "Tyrion", house: "Lannister" },
  { id: 50, name: "Tywin", house: "Lannister" },
  { id: 53, name: "Kevan", house: "Lannister" },
  { id: 75, name: "Daenerys", house: "Targaryen" },
  { id: 77, name: "Viserys", house: "Targaryen" },
  { id: 81, name: "Rhaegar", house: "Targaryen" },
  { id: 83, name: "Theon", house: "Greyjoy" },
  { id: 84, name: "Yara", house: "Greyjoy" },
  { id: 87, name: "Davos", house: "Seaworth" },
  { id: 88, name: "Brienne", house: "Tarth" },
];

const mapNameFamily = (characters) => {
  // Return an array with the name and house of each character
  // Format: "Arya, of House Stark"

  //we are going to get back another array and we need to store another array in a different
  //variable
  //const nameFamily = characters.map(item => item.name)
  //we can write the function like thiis as well
  /*const nameFamily = characters.map((item) => {
    return item.name;
  });*/

  //another way imipliciity return without the return keyword
  //templaate literal $
  const nameFamily = characters.map(
    (item) => `${item.name}, of House ${item.house}`
  );

  //just name is returned
  return nameFamily;
};

//takes in charater array and house
const filterFamily = (characters, house) => {
  // Return an array with only the characters from a given house
  //run through array and for every item in this array, were are going too check a
  //specific function. of the function returns true, then we are adding that specific
  //item to a new array. the result of the filtered function is the new array that is
  //going to have some or all items iin the initial array

  //check that specific item iis going to be true, will be added to houses
  //if false, its not getting added too houses

  const houses = characters.filter((item) => item.house === house);

  //return characters;
  return houses;
};

const reduceHouses = (characters) => {
  // Return an object with the number of characters from each house

  //iterate through every functions of the array and we are adding up
  //have a current item and accumulator

  //const reducer = (accumulator, current) => accumulator + current.id;
  //const sum = characters.reduce(reducer, 0)

  //another way
  //const sum = characters.reduce((acc, curr) => acc + curr.id, 1000);

  /*const obj = {
    Stark: 0,
    Lannister: 0,
    Targaryen: 0,
    Greyjoy: 0,
    Seaworth: 0,
    Tarth: 0,
  };

  const houses = characters.reduce((acc, curr) => {
    if (acc.hasOwnProperty(curr.house)) {
      acc[curr.house]++;
    }
    return acc;
  }, obj);*/
  /*
  //another one 
  const houses = characters.reduce((acc, curr) => {
    if (acc.hasOwnProperty(curr.house)) {
      acc[curr.house]++;
    } else {
      acc[curr.house] = 1;
    }

    return acc;
  }, {});

*/

  //another one shortcut
  const houses = characters.reduce((acc, curr) => {
    //conditional statment
    acc.hasOwnProperty(curr.house)
      ? acc[curr.house]++ //what executed if true
      : (acc[curr.house] = 1); //what executed if false
    return acc;
  }, {});

  //return
  return houses;
};

console.log(mapNameFamily(characters));
// [
//   'Arya, of House Stark',
//   'Sansa, of House Stark',
//   'Eddard, of House Stark',
//   'Catelyn, of House Stark',
//   'Robb, of House Stark',
//   'Rickon, of House Stark',
//   'Jaime, of House Lannister',
//   'Cersei, of House Lannister',
//   'Tyrion, of House Lannister',
//   'Tywin, of House Lannister',
//   'Kevan, of House Lannister',
//   'Daenerys, of House Targaryen',
//   'Viserys, of House Targaryen',
//   'Rhaegar, of House Targaryen',
//   'Theon, of House Greyjoy',
//   'Yara, of House Greyjoy',
//   'Davos, of House Seaworth',
//   'Brienne, of House Tarth'
// ]

console.log(filterFamily(characters, 'Stark'));
// [
//   { id: 1, name: 'Arya', house: 'Stark' },
//   { id: 4, name: 'Sansa', house: 'Stark' },
//   { id: 16, name: 'Eddard', house: 'Stark' },
//   { id: 17, name: 'Catelyn', house: 'Stark' },
//   { id: 20, name: 'Robb', house: 'Stark' },
//   { id: 28, name: 'Rickon', house: 'Stark' }
// ]

console.log(filterFamily(characters, 'Greyjoy'));
// [
//   { id: 83, name: 'Theon', house: 'Greyjoy' },
//   { id: 84, name: 'Yara', house: 'Greyjoy' }
// ]

console.log(reduceHouses(characters));
//return object
// {
//   Stark: 6,
//   Lannister: 5,
//   Targaryen: 3,
//   Greyjoy: 2,
//   Seaworth: 1,
//   Tarth: 1
// }
