const peopleArray = [
    { id: 123, name: "dave", age: 23 },
    { id: 456, name: "chris", age: 23 },
    { id: 789, name: "bob", age: 23 },
    { id: 101, name: "tom", age: 23 },
    { id: 102, name: "tim", age: 23 }
  ];

  const arrayToObject = (array, keyID) =>
   array.reduce((obj, item) => {
     obj[item[keyID]] = item
     return obj
   }, {})
const peopleObject = arrayToObject(peopleArray, 'ID')
console.log(peopleObject)