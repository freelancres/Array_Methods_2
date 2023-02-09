let arr = [];
let result;

// function sum(a, b, c) {
//     return a + b + c;
// };

// const sum = (a, b, c) => a + b + c;

// const sum = (a, b, c) => {
//     result = a * 2 + b * 9;
//     result = result ** c;
//     return result * 0.258;
// };

// console.log(sum(1, 20, 3));

//1-  Array lenght propety
arr = ["Salah", "Basem", "Souad", "Batoul"];
//result = arr.length;

//2- Iterate: forEach
// let arr2 = [];
// arr.forEach(
//     (value, index,array) => {
//         console.log(value, index);
//         arr2.unshift(array[index]);

//     }
// );

// console.log(arr2);

//3- Searching in array :

// indexOf / lastIndexOf and includes
arr = [1, 0, false, 1];
result = arr.indexOf(false); // 2
result = arr.indexOf(null); // -1 means not present
result = arr.indexOf(1); // 0 : finds first occurence
result = arr.lastIndexOf(1); // 3: finds last occurence
result = arr.includes(false); // true : 'false' is included in arr

//find and findIndex/findLastIndex
arr = [
  { id: 1, name: "Talal", Salary: 25000 },
  { id: 2, name: "Mohammad", Salary: 20000 },
  { id: 3, name: "Ahmad", Salary: 35000 },
  { id: 4, name: "Nour", Salary: 0 },
];
// find the user with salary less than 24000
result = arr.find(item => item.Salary < 24000);
result = arr.findIndex(item => item.Salary < 24000);
result = arr.findLastIndex(item => item.Salary < 24000);


//filter
result = arr.filter(item => item.Salary > 20000);

//4- Transform an array
// map

// sort

// reverse

// split and join

// reduce/reduceRight

//5- Array.isArray

//log results in Console
console.log(arr);
console.log(result);
