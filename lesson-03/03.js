// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

const num1 = 1
const num2 = 1
const num3 = 1



function findLargest(num1, num2, num3) {
    if ((num1 >= num2) && (num1 >= num3)) {
        return num1
    }
    if ((num2 >= num1) && (num2 >= num3)) {
        return num2
    }
    return num3
}
const result = findLargest(num1, num2, num3)
console.log(result);
