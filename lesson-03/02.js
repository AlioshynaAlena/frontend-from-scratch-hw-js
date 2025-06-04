// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

const num = 6
let result;

function isEven(number) {
    if (number % 2 === 0) {
        result = true
    } else {
        result = false
    }
}
isEven(num)
console.log(result);


// можно использовать еще стрелочную функцию, тернарный оператор
