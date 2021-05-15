


function add(num1, num2){
    const sum = [...arguments];
    
    console.log(sum)
    for (let i = 0; i < sum.length; i++) {
        let element = sum[i] + sum[i+1];
        return element;
    }

    return element;
}


const result = add(2, 3, 5, 7);

console.log(result);