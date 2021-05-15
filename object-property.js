const student =[
    {id: 21, name: 'omor sunny'},
    {id: 31, name: 'manaa'},
    {id: 41, name: 'moyuri'},
    {id: 71, name: 'dipjol'},





];


// const newArray = [];

// for (let i = 0; i < student.length; i++) {
//     const element = newArray.push(student[i].name);
//     console.log(element)
    
// }
// console.log(newArray);

const name = student.map( s => s.name);

const id = student.map(s =>s.id);

const bigger = student.filter(s => s.id > 40);

const lookForIt = student.find(s => s.id > 40);

console.log(name);
console.log(id);

console.log(bigger);

console.log(lookForIt);