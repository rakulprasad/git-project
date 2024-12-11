// function sumOfDigits(number) {
    
//     let numStr = number.toString();
//     let sum = 0;
  
    
//     for (let i = 0; i < numStr.length; i++) {
      
//       sum += parseInt(numStr[i], 10);
//     }
  
//     return sum;
//   }
  
  
//   let result = sumOfDigits(12345);
//   console.log(result);  

function sumOfDigits(number){
    let numrr = number.toString();
    let sum = 0;
    for(let i=0; i<numrr.length;i++){
        sum += parseInt(numrr[i],10);

    }
    return sum;
}
  let result = sumOfDigits(12345);
  console.log(result);
  