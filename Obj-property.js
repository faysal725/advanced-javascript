
const students = [
    {id: 21, name: 'omor sani'},
    {id: 31, name: 'mana'},
    {id: 41, name: 'vijay'},
    {id: 71, name: 'hoot'},
];



const names = students.map(s => s.name);
console.log(names);

const id = students.find(s => s.id < 40);
console.log(id);

const slug = students.filter(s => s.id >40)
console.log(slug);

