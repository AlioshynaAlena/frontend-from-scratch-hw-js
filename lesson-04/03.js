/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

let array1 = [1, 2, 3, 4, 5, 6]
let array2 = [7, 8, 9, 10, 3, 5]

function findCommonElements(oneArray, twoArray) {
    const newArray = []
    for (let i = 0; i < oneArray.length; i++) {
        for (let j = 0; j < twoArray.length; j++) {
            if (oneArray[i] === twoArray[j]) {
                newArray.push(oneArray[i])
            }
        }
    }
    return newArray
}

const result = findCommonElements(array1, array2)
console.log(result);
