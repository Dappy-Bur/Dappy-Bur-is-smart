// присвоим переменной число 7.3 и дальще \/
const roundingNumber = 7.3;
// округляем в большую сторону = 8; округляем в меньшую сторону = 7; округляем в ближайшее целое число = 7
console.log("Округление 7.3" + "\n в большую = " +  Math.ceil(roundingNumber) + " \n в меньшую = " +  Math.floor(roundingNumber) + "\n в целое = " + Math.round(roundingNumber)); 


//рандом
console.log("-------------------------------------------------");
{
    const NumberRandom1 = Math.floor(Math.random() * 101);//задаём рандомное число, от 0 до 100
    const NumberRandom2 = Math.floor(Math.random() * 101);
    const NumberBig = NumberRandom1 > NumberRandom2 ? NumberRandom1 : NumberRandom2;//выводим какое из чисел больше
    const Numberdifference = Math.abs(NumberRandom1 - NumberRandom2);//ищем разницу между числами
    
    console.log("Генерация случайных чисел" + 
        "\n 1 рандомное число = " + NumberRandom1 + 
        "\n 2 рандомное число = " + NumberRandom2 + 
        "\n наибольшее из них: " + NumberBig + 
        "\n разница между ними = " + Numberdifference
    );
}

//матан
console.log("-------------------------------------------------");
{

    const Number1 = 4;
    const Number2 = 3;
    const Symma = Number1 + Number2;//Сумма
    const Proizved = Number1 * Number2;//произведение
    const Chasnoe = Number1 / Number2;//Часное
    const vozvedenie = Math.pow(Number1, 2);//возведение в степень pow
    const Koren = Math.sqrt(Number2); //Квадратный корень из числа sqrt
    console.log("Вычисления" + "\n Сумма = " + Symma + 
        "\n Произведение = " + Proizved + 
        "\n Часное = " + Chasnoe + 
        "\n Возведение " + Number1 + " во вторую степень = " + vozvedenie +
        "\n Квадратный корень из " + Number2 + " = " + Koren);
}

console.log("-------------------------------------------------");
{

    const Predlojenie = (" Hello, JavaScript! ")
    console.log("Работа со строчкой \n" + Predlojenie.length + " || " + //lenght - количество символов(длина)
        Predlojenie.toUpperCase() + " || " + //toUpperCase - верхний рег
        Predlojenie.toLowerCase() + " || " + //toLowerCase - нижний рег
        !!Predlojenie.lastIndexOf("java") + " || " + //lastIndexOf - спиздить слово из предлложения
        Predlojenie.slice(7, 18) + " || " +  //выести что то по порядковым числам от и до
        Predlojenie.trim());//нахуято убираем пробелы с концов, хз не пригодится
}

console.log("-------------------------------------------------");


    const now = new Date();
    console.log("Снова даты \n" + now +
        "\n год " + now.getFullYear() +
        "\n месяц " + now.getMonth() +
        "\n день " + now.getDate());

now.setFullYear(2025);
now.setMonth(0);
    console.log("Изменение даты + 1 год и январь \n" + now);