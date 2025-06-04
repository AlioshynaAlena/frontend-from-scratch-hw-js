// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

// const number = 0
// let result;

// function isEven(number) {
//     if (number % 2 === 0) {
//         result = true
//     } else {
//         result = false
//     }
// }
// isEven(number)
// console.log(result);


// let number = 7
// let value = 2
// let result;

// function isEven(number, value) {
//     if (number % value === 0) {
//         result = true
//     } else {
//         result = false
//     }
// }
// isEven(number, value)
// console.log(result);



// можно использовать еще стрелочную функцию, тернарный оператор


const number = 0

function isEven(number) {
    return number % 2 === 0 ? "True" : "False"

}
const result = isEven(number)
console.log(result);

// const number = 0

// function isEven(number) {
//     return number % 2 === 0;
// }
// const result = isEven(number)
// console.log(result);
