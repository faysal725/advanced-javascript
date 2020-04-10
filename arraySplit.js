

// const nums= [1,2,3,4,5,6,7,8,9];
// const part = nums.slice(2, 5);

// const removed=nums.splice(2,5, 88,78,100,104);

// console.log(removed);
// console.log(nums);



// const together = nums.join(' ');
// console.log(together.length);
const name = ['karim', 'rahim', 'abul', 'babul', 'mofiz', 'mamun'];

const removed = name.splice(1,3, 'zayed', 'bappi');
console.log(removed);


const rahim = name.slice(1,3);
console.log(rahim);

const togather = name.join(' ');
console.log(togather);