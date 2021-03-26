// 1. Функция calculateTotalPrice(orderedItems) принимает один параметр
// orderedItems - массив чисел, и рассчитывает общую сумму его элементов,
// которая сохраняется в переменной totalPrice и возвращается как результат
// работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она 
// использовала метод forEach.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки
    
//     orderedItems.forEach(element => { totalPrice += element });

//     // Пиши код выше этой строки
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// 2. Функция filterArray(numbers, value) принимает массив чисел numbers и
// возвращает новый массив, в котором будут только те элементы
// оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она 
// использовала метод forEach.

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
//     numbers.forEach(num => { if (num > value) { filteredNumbers.push(num);}})

//     // Пиши код выше этой строки
//     return filteredNumbers;
// }
  
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// 3.Функция getCommonElements(firstArray, secondArray) принимает два массива
// произвольной длины в параметры firstArray и secondArray, и возвращает
// новый массив их общих элементов, то есть тех которые есть в обоих
// массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она 
// использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
  
//     firstArray.forEach(element => {
//         if (secondArray.includes(element))
//         { commonElements.push(element); }
//     });

//     return commonElements;  
//     // Пиши код выше этой строки
//   }


// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// 4.Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была
// объявлена как стрелочная.

// let calculateTotalPrice = (quantity, pricePerItem) =>{
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));

// 5. Выполни рефакторинг функции calculateTotalPrice() так, чтобы она
// использовала неявный возврат.

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Пиши код выше этой строк

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));

// 6.Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её
// объявление на стрелочную функцию.Замени коллбек - функцию
// передаваемую в метод forEach() на стрелочную функцию.

// Пиши код ниже этой строки
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Пиши код выше этой строки

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// 7. Замени объявление функции filterArray() и коллбек для метода forEach() на
// стрелочные функции.

// Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach(number => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
// }
  
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// 8. Замени объявление функции getCommonElements() и коллбек для метода
// forEach() на стрелочные функции.

// Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach( element => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return commonElements;
// }
  
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// 9. Функция changeEven(numbers, value) принимает массив чисел numbers и
// обновляет каждый элемент, значение которого это чётное число, добавляя к
// нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла
// массив чисел numbers, а создавала, наполняла и возвращала новый массив
// с обновлёнными значениями.

// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//     const newArray = [];
//     numbers.forEach(number => {
//         if (number % 2 === 0) { number += value}
//         newArray.push(number);
//     });
         
//     return newArray;
//     // Пиши код выше этой строки
// }
  
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// 10. Дополни код так, чтобы в переменной planetsLengths получился массив
// длин названий планет.Обязательно используй метод map().

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);

// 11. Используя метод map() сделай так, чтобы в переменной titles получился
// массив названий книг(свойство title) из всех объектов массива books.

// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
// const titles = books.map(book => book.title);
  
// console.log(titles);

// 12. Используя метод flatMap() сделай так, чтобы в переменной genres получился
// массив всех жанров книг(свойство genres) из массива книг books.

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
  
// const genres = books.flatMap(book => book.genres);
  
// console.log(genres);

// 13. Дополни функцию getUserNames(users) так, чтобы она возвращала массив
// имён пользователей(свойство name) из массива объектов в параметре users.

// // Пиши код ниже этой строки
// const getUserNames = users => {
//   const userName = (users.map(user => user.name));
  
//   return userName
    
//   };
//   // Пиши код выше этой строки

// 14. Дополни функцию getUserEmails(users) так, чтобы она возвращала массив
// почтовых адресов пользователей(свойство email) из массива объектов в
// параметре users.

// // Пиши код ниже этой строки
// const getUserEmails = users => {
//     const userEmail = users.map(user => user.email);

//     return userEmail
//   };
//   // Пиши код выше этой строки

// 15. Дополни код так, чтобы в переменной evenNumbers получился массив
// чётных чисел из массива numbers, а в переменной oddNumbers массив
// нечётных.Обязательно используй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number%2 ===0);
// const oddNumbers = numbers.filter(number => number%2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// 16. Дополни код так, чтобы в переменной allGenres был массив всех жанров книг
// (свойство genres) из массива books, а в переменной uniqueGenres массив
// уникальных жанров - без повторений.

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, allGenres) => allGenres.indexOf(genre) === index);
  
// console.log(allGenres);
// console.log(uniqueGenres);

// 17. Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг рейтинг которых
// (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором
// с именем(свойство author) которое совпадает со значением в переменной AUTHOR.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = topRatedBooks.filter((book) => book.author === AUTHOR );

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// 18. Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она
// возвращала массив пользователей у которых цвет глаз(свойство eyeColor)
// совпадает со значением параметра color.

// Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
//  const userEyeColor = users.filter((user) => user.eyeColor === color);
//   return userEyeColor;

// };
// Пиши код выше этой строки

// 19. Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она
// возвращала массив пользователей, возраст которых(свойство age) попадает
// в промежуток от minAge до maxAge.

// const getUsersWithAge = (users, minAge, maxAge) =>
//  users.filter ( user => user.age >= minAge && user.age <= maxAge);

// 20. Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она
// возвращала массив пользователей у которых есть друг с именем в
// параметре friendName.Массив друзей пользователя хранится в свойстве
// friends.

// const getUsersWithFriend = (users, friendName) => 
//  users.filter(user => user.friends.includes(friendName));

// 21. Дополни функцию getFriends(users) так, чтобы она возвращала массив
// друзей всех пользователей(свойство friends).У нескольких пользователей
// могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не
// содержал повторений.

// const getFriends = (users) => 
// users
// .flatMap(user => user.friends)
// .filter((friend, index, arr) => arr.indexOf(friend) === index);

// 22. Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив
// активных пользователей, значение свойства isActive которых true.

// const getActiveUsers = (users) =>
// users.filter(user => user.isActive);

// 23. Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив
// неактивных пользователей, значение свойства isActive которых false.

// const getInactiveUsers = (users) => 
// users.filter(user => !user.isActive);

// 24. Используя метод find() дополни код так, чтобы:

// В переменной bookWithTitle получился объект книги название
// которой(свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор
// который(свойство author) совпадает со значением переменной AUTHOR.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((book)=>book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book)=>book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

// 25. Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала
// объект пользователя, почта которого(свойство email) совпадает со
// значением параметра email.

// const users = [
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male'
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female'
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male'
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female'
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male'
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male'
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female'
//     }
// ];

// // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
//     return users.find((user) => user.email === email) 
   
// };
// // Пиши код выше этой строки

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));

// 26. Используя метод every() дополни код так, чтобы:

// В переменной eachElementInFirstIsEven был результат проверки всех
// элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех
// элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех
// элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех
// элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех
// элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех
// элементов массива thirdArray на нечётность.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((element) => element%2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((element) => element%2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((element) => element%2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((element) => element%2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((element) => element%2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((element) => element%2 !== 0);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

// 27. Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли
// пользователи сейчас активны(свойство isActive) и возвращала true или false.

// const users = [
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male'
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female'
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male'
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female'
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male'
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male'
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female'
//     }
// ];

// // Пиши код ниже этой строки
// const isEveryUserActive = (users) => {
//     return users.every((user) => user.isActive)
   
// };
// // Пиши код выше этой строки

// console.log(isEveryUserActive(users));

// 28. Используя метод some() дополни код так, чтобы:

// В переменной anyElementInFirstIsEven был результат проверки наличия
// чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия
// нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия
// чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия
// нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия
// чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия
// нечётных элементов в массиве thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some((element) => element%2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((element) => element%2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((element) => element%2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((element) => element%2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((element) => element%2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((element) => element%2 !== 0);

// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);
// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);
// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsOdd);

// 29. Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие
// активных пользователей(свойство isActive) и возвращала true или false.

// const users = [
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male'
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female'
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male'
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female'
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male'
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male'
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female'
//     }
// ];

// // Пиши код ниже этой строки
// const isAnyUserActive = users => {
//     return users.some((user) => user.isActive)
   
// };
// // Пиши код выше этой строки

// console.log(isAnyUserActive(users));

// 30. Игровому сервису необходим функционал подсчёта среднего времени
// проведённого в играх.Дополни код так, чтобы в переменной totalPlayTime
// получилось общее игровое время из массива playtimes.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((previousValue, playerTime) => {
//   return previousValue + playerTime;
// }, 0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(averagePlayTime);

// 31. Нашему сервису необходимо рассчитать среднее время проведённое в
// одной игре для каждого игрока, и получить общую сумму этих времён.
// Рассчитать время для каждого из игроков, можно разделив его
// время(свойство playtime) на количество игр(свойство gamesPlayed).

// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((total, player) =>
// total + player.playtime / player.gamesPlayed,
//   0,
// );

// console.log(totalAveragePlaytimePerGame);

// 32. Дополни функцию calculateTotalBalance(users) так, чтобы она считала и
// возвращала сумму всех средств(свойство balance) которые хранят
// пользователи из массива users.

// const users = [
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male'
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female'
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male'
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female'
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male'
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male'
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female'
//     }
// ];

// // Пиши код ниже этой строки
// const calculateTotalBalance = users => {
//     return users.reduce((total, user) => total + user.balance,
//     0,);}
    
// // Пиши код выше этой строки

// console.log(calculateTotalBalance(users));

// 33. Дополни функцию getTotalFriendCount(users) так, чтобы она считала и
// возвращала общее количество друзей(свойство friends) всех пользователей
// из массива users.

// const users = [
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male'
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female'
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male'
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female'
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male'
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male'
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female'
//     }
// ];

// // Пиши код ниже этой строки
// const getTotalFriendCount = users => {
//  return users.reduce((friends, user) => friends + user.friends.length, 0);  
// };
// // Пиши код выше этой строки

// console.log(getTotalFriendCount(users));

// 34. Дополни код так, чтобы в переменной ascendingReleaseDates получилась
// отсортированная по возрастанию копия массива releaseDates, а в
// переменной alphabeticalAuthors копия массива имён авторов authors
// отсортированная в по алфавиту.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// 35. Онлайн бибилиотеке необходимо отображать книги сортированные по дате
// издания, по её возрастанию или убыванию.Дополни код так, чтобы в
// переменной ascendingReleaseDates получилась отсортированная по
// возрастанию копия массива releaseDates, а в переменной
// descendingReleaseDates копия отсортированная по убыванию.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((minDates, maxDates) => minDates - maxDates);

// const descendingReleaseDates = [...releaseDates].sort((minDates, maxDates) => maxDates - minDates);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// 36. Онлайн бибилиотеке необходимо отображать книги отсортированные по
// автору, в алфавитном и обратном алфавитном порядке.Дополни код так,
// чтобы в переменной authorsInAlphabetOrder получилась отсортированная по
// алфавиту копия массива authors, а в переменной authorsInReversedOrder
// копия отсортированная в обратном алфавитном порядке.

// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
  
// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
  
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
  
// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

// 37. Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг
// отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг
// отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг
// отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг
// отсортированный по убыванию рейтинга.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author)
// );

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author)
// );

// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) =>
//   firstBook.rating - secondBook.rating);

// const sortedByDescentingRating = [...books].sort((firstBook, secondBook) =>
//   secondBook.rating - firstBook.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// 38. Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала
// массив пользователей отсортированный по возрастанию их
// баланса(свойство balance).

// const users = [
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male'
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female'
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male'
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female'
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male'
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male'
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female'
//     }
// ];

// // Пиши код ниже этой строки
// const sortByAscendingBalance = users => {
//     return [...users].sort((minBalance, maxBalance) =>
//   minBalance.balance - maxBalance.balance);
   
// };
// // Пиши код выше этой строки

// console.log(sortByAscendingBalance(users));

// 39. Дополни функцию sortByDescendingFriendCount(users) так, чтобы она
// возвращала массив пользователей отсортированный по убыванию
// количества их друзей(свойство friends).

// const users = [
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male'
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female'
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male'
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female'
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male'
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male'
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female'
//     }
// ];

// // Пиши код ниже этой строки
// const sortByDescendingFriendCount = users => {
//     return [...users].sort((minFriends, maxFriends) =>
//         maxFriends.friends.length - minFriends.friends.length)
   
// };
// // Пиши код выше этой строки

// console.log(sortByDescendingFriendCount(users));

// 40. Дополни функцию sortByName(users) так, чтобы она возвращала массив
// пользователей отсортированный по их имени(свойство name) в алфавитном
// порядке.

const users = [
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        gender: 'male'
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        gender: 'female'
    },
    {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        gender: 'male'
    },
    {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        gender: 'female'
    },
    {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        gender: 'male'
    },
    {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        gender: 'male'
    },
    {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        gender: 'female'
    }
];

// Пиши код ниже этой строки
const sortByName = users => {
   
};
// Пиши код выше этой строки