/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)

//your code

const isAdmin = false
const isVerifiedUser = true
const hasSpecialPermission = false
const hasTemporaryPass = false

let isAccess = ((isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass))
console.log(isAccess);




//варианты значений

// const isAdmin = true
// const isVerifiedUser = false
// const hasSpecialPermission = true
// const hasTemporaryPass = false





// const isAdmin = false
// const isVerifiedUser = false
// const hasSpecialPermission = false
// const hasTemporaryPass = false





// const isAdmin = false
// const isVerifiedUser = true
// const hasSpecialPermission = false
// const hasTemporaryPass = true



// const isAdmin = false
// const isVerifiedUser = true
// const hasSpecialPermission = false
// const hasTemporaryPass = false
