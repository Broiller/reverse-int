module.exports = function reverse (n) {

    let reverseNumber = 0;
    n = checkNegative(n);

    while (n >= 1) {
        let lastNumber = n % 10;
        reverseNumber = (reverseNumber * 10) + lastNumber;
        n = Math.trunc(n / 10);
    }
    return reverseNumber;
}

const checkNegative = (n) => {
    if (n < 0) { 
        n = Math.abs(n); 
    }
    return n;
}




    
  

