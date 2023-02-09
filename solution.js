// Exercise : 1 
// declare array of 10 numbers
// forEach number , check if it is evevn or odd
// after forEach ends :
// console log the count of even and odd numbers

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let even = 0;
// let odd = 0;

// arr.forEach(
//     (item) => {
//         if (item % 2 == 0) {
//             even++;
//         } else {
//             odd++;
//         }
//     }

// );

// console.log(even, odd);

// Exercise : 2

// defien a function that takes an array of numbers
// and return the first value less than '15'
// undefined if no result

// function findLessThan15(numbers) {
//     // your code is here
//     return numbers.find((item) => item < 15);
// };

// console.log(findLessThan15([25, 32, 8, 15, 78, 2]));


// define a function takes array of strings
// return list of strings with length more than 5 or equal
// return empty list if no string satisfy the 

// longerStrings(['Safwan', 'Ali', 'Nour', 'Mohammad']) 
// -> ['Safwan', 'Mohammad']

function longerStrings(strings) {
    return strings.filter(item => item.length >= 5);
}

console.log(longerStrings(["Safwan", "Ali", "Nour", "Mohammad"])); 

