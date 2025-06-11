/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

let array = [1, 2, 3, 2, 1, 4]

console.log(array.indexOf(5));


function findUniqueElements(someArray) {
    const newArray = []

    for (let i = 0; i < someArray.length; i++) {

        for (let i = 0; i < someArray.length; i++) {
            if (newArray.indexOf(someArray[i]) === -1) {
                newArray.push(someArray[i])
            }
        }

    }
    return newArray
}
console.log(findUniqueElements(array));







// const value = includesElement(array, 4)
// console.log(value);



// for (let i = 0; i < someArray.length; i++) {
//     if (newArray.indexOf(someArray[i]) === -1) {
//         newArray.push(someArray[i])
//     }
// }
