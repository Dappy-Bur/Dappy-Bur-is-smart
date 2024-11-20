// присвоим переменной число 7.3 и дальще \/
const FirstRandomNumber = 7.3;
// округляем в большую сторону = 8; округляем в меньшую сторону = 7; округляем в ближайшее целое число = 7
console.log("Округление 7.3" + "\n в большую = " + 
    Math.ceil(FirstRandomNumber) + " \n в меньшую = " + 
    Math.floor(FirstRandomNumber) + "\n в целое = " + 
    Math.round(FirstRandomNumber)); 

//рандом
console.log("-------------------------------------------------");
{
    const FirstRandomNumber = Math.floor(Math.random() * 101);//задаём рандомное число, от 0 до 100
    const SecondRandomNumber = Math.floor(Math.random() * 101);
    const LargestNumber = FirstRandomNumber > SecondRandomNumber ? FirstRandomNumber : SecondRandomNumber;//выводим какое из чисел больше
    const DifferenceNumber = Math.abs(FirstRandomNumber - SecondRandomNumber);//ищем разницу между числами
    
    console.log("Генерация случайных чисел" + 
        "\n 1 рандомное число = " + FirstRandomNumber + 
        "\n 2 рандомное число = " + SecondRandomNumber + 
        "\n наибольшее из них: " + LargestNumber + 
        "\n разница между ними = " + DifferenceNumber
    );
}

//матан
console.log("-------------------------------------------------");
{

    const FirstNumber = 4;
    const SecondNumber = 3;
    const sumOfTheNumbers = FirstNumber + SecondNumber;//Сумма
    const productOfNumbers = FirstNumber * SecondNumber;//произведение
    const dividingNumbers = FirstNumber / SecondNumber;//Часное
    const constructionOfNumbers = Math.pow(FirstNumber, 2);//возведение в степень pow
    const rootOfNumber = Math.sqrt(SecondNumber); //Квадратный корень из числа sqrt
    console.log("Вычисления" + "\n Сумма = " + sumOfTheNumbers + 
        "\n Произведение = " + productOfNumbers + 
        "\n Часное = " + dividingNumbers + 
        "\n Возведение " + FirstNumber + " во вторую степень = " + constructionOfNumbers +
        "\n Квадратный корень из " + SecondNumber + " = " + rootOfNumber);
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
