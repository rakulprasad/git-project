function isArmstrongNumber(number) {

    const digits = number.toString().split('');
    const numDigits = digits.length;

    const sum = digits.reduce((acc, digit) => {
        return acc + Math.pow(parseInt(digit), numDigits);
    }, 0);

    return sum === number;
}

const number = 507;
if (isArmstrongNumber(number)) {
    console.log(`${number} is an Armstrong number.`);
} else {
    console.log(`${number} is not an Armstrong number.`);
}

  
  
  
  