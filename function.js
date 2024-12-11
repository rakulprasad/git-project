let num1 = 14;
let num2 = 76;

var sum = num1 + num2;
console.log(sum);

let num3 = 98;
let num4 = 75;

var sum = num3 + num4;
console.log(sum);

function add(){
    console.log("function without parameter");
    
}
add();

function addition (a,f){
    console.log(a+f);
    
}
addition(76,90);

// arrow function (compact way to weite a logic )

const addvalue = (a,b) => a + b;
console.log(addvalue(54,65));

// function expression

var rr = function greeting (){
    console.log("this is an function expression");
    
};

rr();

//immediate invoke function>>()

var arr = (function(msg){
    console.log(msg);
    
})("this is immediate invoke function");


