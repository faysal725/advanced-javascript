const numbers = [3,4,5,6,7,8,9];
// const numbers = ['alam', 'balom', 'salom', 'palom'];

// const output = [];
// for(let i =0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }


// function square(element){
//     return element * element;
// }

// const result = numbers.map(function(element){
//     return element * element;
// })



// const result = numbers.map(element => element * element);

// console.log(result);

// const bigger = numbers.filter( x => x < 5);
// console.log(bigger);

const bigger = numbers.find( x => x > 5);
console.log(bigger);