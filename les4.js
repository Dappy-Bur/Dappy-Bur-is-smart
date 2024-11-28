// Напишите функцию, которая принимает строку и проверяет, состоит ли она только из цифр.
console.log("\n------------------------------------------------- \n тут только числа?");
function searchingForNumbers(str) {
    return /^\s*\d{1,7}(,\d{3})*$/.test(str)
}
console.log(searchingForNumbers("123"));//true
console.log(searchingForNumbers("+12"));//false
console.log(searchingForNumbers("53 234"));//false

//Напишите функцию, которая принимает строку и возвращает количество букв
console.log("\n------------------------------------------------- \n какое количество букв?");
function рowManyLetters(str) {
    return str.replace(/[^a-zA-ZА-Яа-яЁё]/g, '').length
}
console.log(рowManyLetters('Sex'));//3
console.log(рowManyLetters('S<3E<3X'));//3

//Напишите функцию, которая принимает строку и возвращает количество гласных букв
console.log("\n------------------------------------------------- \n какое гласных букв?");
function vowelLetters(str) {
    return str.match(/[aeiouyаеёиоуыэюя]/g).length;
}
console.log(vowelLetters("sex, секс"));//2 

//Напишите функцию, которая принимает год и определяет, является ли он високосным.
console.log("\n------------------------------------------------- \n определение года и високосный ли он?");
function whatALeapYear(leap) {
    return (leap % 4 === 0 && leap % 100 !== 0) || leap % 400 === 0;
}
console.log(whatALeapYear(2024));//true
console.log(whatALeapYear(2025));//false

//Напишите функцию, которая принимает двузначное число и возвращает разницу между его цифрами.
console.log("\n------------------------------------------------- \n разница между цифрами двухзначного числа");
function whatDifference(num){
    if (num<10 || num>100) {return ("шото не так");}
    const a = Math.floor(num / 10);
    const b = num % 10;
    return Math.abs(a - b);
}
console.log(whatDifference(12)); //1
console.log(whatDifference(122)); //шотонетак

//Напишите функцию, которая принимает число и проверяет, является ли оно зеркальным
console.log("\n------------------------------------------------- \n зеркальное ли оно?");
function isPalindromeNumber(num) {
    const str = num.toString() 
    return str === str.split("").reverse().join("")
}                                     
  console.log(isPalindromeNumber(1234));//true
  console.log(isPalindromeNumber(3883));//false
