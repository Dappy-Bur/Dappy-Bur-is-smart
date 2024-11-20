// присвоим переменной число 7.3 и дальще \/
const firstRandomNumber = 7.3;
// округляем в большую сторону = 8; округляем в меньшую сторону = 7; округляем в ближайшее целое число = 7
console.log("Округление 7.3" + "\n в большую = " + 
    Math.ceil(firstRandomNumber) + " \n в меньшую = " + 
    Math.floor(firstRandomNumber) + "\n в целое = " + 
    Math.round(firstRandomNumber)); 

//рандом
console.log("-------------------------------------------------");
{
    const firstRandomNumber = Math.floor(Math.random() * 101);//задаём рандомное число, от 0 до 100
    const secondRandomNumber = Math.floor(Math.random() * 101);
    const largestNumber = firstRandomNumber > secondRandomNumber ? firstRandomNumber : secondRandomNumber;//выводим какое из чисел больше
    const differenceNumber = Math.abs(firstRandomNumber - secondRandomNumber);//ищем разницу между числами
    
    console.log("Генерация случайных чисел" + 
        "\n 1 рандомное число = " + firstRandomNumber + 
        "\n 2 рандомное число = " + secondRandomNumber + 
        "\n наибольшее из них: " + largestNumber + 
        "\n разница между ними = " + differenceNumber
    );
}

//матан
console.log("-------------------------------------------------");
{

    const firstNumber = 4;
    const secondNumber = 3;
    const sumOfTheNumbers = firstNumber + secondNumber;//Сумма
    const productOfNumbers = firstNumber * secondNumber;//произведение
    const dividingNumbers = firstNumber / secondNumber;//Часное
    const constructionOfNumbers = Math.pow(firstNumber, 2);//возведение в степень pow
    const rootOfNumber = Math.sqrt(secondNumber); //Квадратный корень из числа sqrt
    console.log("Вычисления" + "\n Сумма = " + sumOfTheNumbers + 
        "\n Произведение = " + productOfNumbers + 
        "\n Часное = " + dividingNumbers + 
        "\n Возведение " + firstNumber + " во вторую степень = " + constructionOfNumbers +
        "\n Квадратный корень из " + secondNumber + " = " + rootOfNumber);
}

console.log("-------------------------------------------------");
{

    const textEditing = (" Hello, JavaScript! ")
    console.log("Работа со строчкой \n" + textEditing.length + " || " + //lenght - количество символов(длина)
        textEditing.toUpperCase() + " || " + //toUpperCase - верхний рег
        textEditing.toLowerCase() + " || " + //toLowerCase - нижний рег
        !!textEditing.lastIndexOf("java") + " || " + //lastIndexOf - спиздить слово из предлложения
        textEditing.slice(7, 18) + " || " +  //выести что то по порядковым числам от и до
        textEditing.trim());//нахуято убираем пробелы с концов, хз не пригодится
}

console.log("-------------------------------------------------");


    const todayDate = new Date();
    console.log("Снова даты \n" + todayDate +
        "\n год " + todayDate.getFullYear() +
        "\n месяц " + todayDate.getMonth() +
        "\n день " + todayDate.getDate());

        todayDate.setFullYear(2025);
        todayDate.setMonth(0);
    console.log("Изменение даты + 1 год и январь \n" + todayDate);

    ('b' + 'a' + + 'a' + 'a').toLowerCase()
    console.log(toLowerCase)