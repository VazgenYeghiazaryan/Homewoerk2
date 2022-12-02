// 1.Given two objects. Write a function that performs shallow compare.

let a = { a: 4, b: 45 };
let b = { a: 2 };

function compareObjects(obj1, obj2) {
    for (let key in obj1) {
        if (!(key in obj2) || obj1[key] !== obj2[key]) {
            return false;
        }
    }
    for (let key in obj2) {
        if (!(key in obj1) || obj1[key] !== obj2[key]) {
            return false;
        }
    }
    {
        return true;
    }
}

console.log(compareObjects(a, b));

//2. Determine if a word or phrase is an isogram. An isogram (also known as a &quot;non pattern word&quot;) is a word or phrase without a repeating letter.

function isIsogram(word) {
    for (let i = 0; i < word.length; i++)
        for (let j = i + 1; j < word.length; j++)
            if (word[i] === word[j]) {
                return true
            }
    return false
}

console.log(isIsogram('samson'))


//3. Given a number n(n & gt;= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3,5, 8 …, ak = ak - 1 + ak - 2)

function fibonacci(num) {
    if (num < 2) {
        return num
    }
    return fibonacci(num - 1) + fibonacci(num - 2)
}
console.log(fibonacci(10))



//4. Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum,
// print the quotient, otherwise print the remainder.

function calculate(num) {
    let newNumber = num.toString();
    let sum = 0;
    let product = 1;
    if (num === 0) return Cannot calculate
    for (let i = 0; i < newNumber.length; i++) {
        sum += +newNumber[i];
        product *= +newNumber[i];
    }
    if (product % sum === 0) return Quotient is ${ product / sum };
  else if (product % sum !== 0) return Reminder is ${ product % sum }
}

console.log(calculate(0));


//5. Write a program to print X star pattern series. 


function printMatrix(x) {
    let result = ''
    let number = 0;
    for (let i = 0; i < x; i++) {
        let row = ''
        for (let j = 0; j < x; j++) {
            if (j === number || j === x - (number + 1)) {
                row += '👍'
            } else {
                row += ' '
            }
        }
        number++
        result += row + '\n'
    }
    return result
}

console.log(printMatrix(10))