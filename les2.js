console.log('№1______________________________');
{
    const Dz = "Типа дз";
    const name = "Sergey aka DappyBur";
    const age = 23;
    const isStudent = "ЦОПП";
    const height = 175;
    const hobby = "Not to understand anything";
    const favoriteNumber = 37;
    const isGraduated = "Did not graduate";

console.log(
    Dz +
    "\n Моё имя: " + name + ", " + 
    "Возраст: " + age + ", " +
    "Мой рост: " + height + "cm" + ",\n " +
    "Обучаюсь в: " + isStudent + ", " +  
    "Хобби: " + hobby + ", " + 
    "Любимоё число: " + favoriteNumber + "," + 
    "Окончил университет: " + isGraduated + ".");
}

console.log('№2______________________________');
{
    const New = 2024;
    const Old = 2001;
    const sum = New - Old;
    console.log ("Да, мне " + sum + " года.");
}

console.log('№3______________________________');
{
    let a = undefined;
    let b;  
    const c = null;
    console.log(a + "||" + b + "||" + c)
}

console.log('№4*_____________________________');
{
    const birth = new Date('06/20/2001');
    const now = new Date();
    const sekday = 1000 * 60 * 60 * 24; // день в секундах
    const days = (now - birth) / sekday;
    const year =  Math.floor(days / 365 );
    console.log("Сегодня: " + now
    );
    console.log("И на данный момент мне: " + year + " года.");
}


