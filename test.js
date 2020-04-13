// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0 && i % 3 !== 0) {
//     console.log('Buzz');
//   } else if (i % 5 === 0 && i % 3 === 0) {
//     console.log('FizzBuzz'); // well never run
//   }
// }

// const size = 8;
// let str = '';

// for (let i = 0; i < size; i++) {
//   for (let j = 0; j < size; j++) {
//     if (i % 2 === 0) {
//       str += (j % 2 === 0) ? ' ' : '#';
//     } else {
//       str += (j % 2 !== 0) ? ' ' : '#';
//     }
//   }
//   str += '\n';
// }

// console.log(str);

// function findSolution(target) {
//   function find(current, history) {
//     if (current == target) {
//       return history;
//     } else if (current > target) {
//       return null;
//     } else {
//         return  find(current + 5, `(${history} + 5)`) ||
//                 find(current * 3, `(${history} * 3)`) ||
//                 find(current * 3, `(${history} * 3)`) ||
//                 find(current + 1, `(${history} + 1)`);
//     }
//   }
//   return find(1, "1");
// }

// console.log(findSolution(8));

// function min(a, b) {
//   return a < b ? a : b;
// }

// console.log(min(8, 12));

// function isEven(a) {
//   if (a === 0) return true;

//   if (a === 1) return false;

//   return isEven(a - 2);
// }

// console.log(isEven(50));
// console.log(isEven(75));

// function countChar(str, char) {
//   let count = 0;
  
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countChar('BoBo', 'o'));

// function range(start, end, step) {
//   const arr = [];
//   step = step || false;
  
//   for (start; start < end;) {
//     arr.push(start);

//     start += step ? step : 1
//   }

//   return arr;
// }

// function sum(arr) {
//   let result = 0;

//   for (const num of arr) {
//     result += num;
//   }

//   return result;
// }

// console.log(sum(range(1, 10, 2)));

// function reverseArray(arr) {
//   const resArr = []

//   for (let i = arr.length; i > 0; i--) {
//     resArr.push(arr[i - 1]);
//   }
//   return resArr;
// }

// function deepEqual(a, b) {

//   if (typeof a === 'object' && typeof b === 'object' && a !== null && b !== null) {

//     if (Object.keys(a).length === Object.keys(b).length) {
      
//       for (key in a) {
//         if (typeof a[key] === 'object' && typeof b[key] === 'object' && a[key] !== null && b[key] !== null) {
//           return deepEqual(a[key], b[key]);
//         }

//         if (a[key] !== b[key]) {
//           return false;
//         }
//       }

//       return true;
//     } else {
//       return false;
//     }

//   } else {
//     return a === b ? true : false;
//   }
// }

// console.log(deepEqual({name: 'John', age: 23, role: null}, {name: 'John', age: 23, role: {admin: true}}));