function isPalindrome(str) {
    
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    
    return cleanedStr === reversedStr;
}


console.log(isPalindrome("A man, a plan, a canal, Panama")); 
console.log(isPalindrome("hello")); 
