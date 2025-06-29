/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/

let array = [12, 56, 98, 65, 36, 98, 72, 61]

function includesElement(someArray, someElement) {
    for (let i = 0; i < someArray.length; i++) {
        if (someArray[i] === someElement) {
            return true
        }
    }
    return false
}

const value = includesElement(array, 72)
console.log(value);
