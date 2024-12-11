function fibonacci(n) {
    let a = 0, b = 1;
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(a);
        let temp = a + b;
        a = b;
        b = temp;
    }

    return result;
}


let n = 10; 
console.log(fibonacci(n));  
