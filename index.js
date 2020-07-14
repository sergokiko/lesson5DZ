// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

function Tag(name, action, titleOfAttr1, actionOfAttr1,titleOfAttr2 = 'атрибут',actionOfAttr2 = 'опис якихось властивостей атрибута' ){

    this.titleOfTag = `<${name}>`;
        this.action = action;
        this.attrs =  [{titleOfAttr: titleOfAttr1, actionOfAttr: actionOfAttr1 },
                        {titleOfAttr: titleOfAttr2, actionOfAttr: actionOfAttr2 }
            ]
}

// let a = new Tag('a','Тег a является одним из важных элементов HTML и предназначен для создания ссылок.',
//     'href','Задает адрес документа, на который следует перейти.',
//     'accesskey','Активация ссылки с помощью комбинации клавиш.'
// )
// let div = new Tag('div',`Элемент div является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.`,
//     'align', 'Задает выравнивание содержимого тега div', 'title','Добавляет всплывающую подсказку к содержимому.');
//
// let h1 =new Tag('h1',' тег h1 представляет собой наиболее важный заголовок первого уровня',
//     'align', 'Определяет выравнивание заголовка')
// let span  = new Tag('sapn', 'Тег span предназначен для определения строчных элементов документа.',
//     'class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.',
//     'accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.');
//
// let input = new Tag('input', 'Тег input является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//     'value', 'Значение элемента', 'type', 'Сообщает браузеру, к какому типу относится элемент формы.');
// let form = new Tag('form', 'Tег form устанавливает форму на веб-странице', 'id', 'Связывает поле с формой по её идентификатору')
//
// let option = new Tag('option' , 'Тег option определяет отдельные пункты списка, создаваемого с помощью контейнера select',
//     'disabled', 'Заблокировать для доступа элемент списка.', 'selected', 'Заранее устанавливает определенный пункт списка выделенным.')
// let select = new Tag('select' , 'Tег select позволяет создать элемент интерфейса в виде раскрывающегося списка',
//     'accesskey', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.', 'multiple','Позволяет одновременно выбирать сразу несколько элементов списка')
//

// console.log(a);
// console.log(div);
// console.log(h1);
// console.log(span);
// console.log(input);
// console.log(form);
// console.log(option);
// console.log(select);





// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }



class Tags{
    constructor(name, action, atr1, atr2 = 'більше немає атрибутів') {
        this.titleOfTag = `<${name}>`;
            this.action = action;
            this.attrs = [atr1, atr2]
    }
}
class Attribut {
    constructor(name, description) {
        this.titleOfAttr = name;
        this.actionOfAttr = description;

    }
}

let attrOfa1 = new Attribut('href','Задает адрес документа, на который следует перейти.');
let attrOfa2 = new Attribut('accesskey', 'Активация ссылки с помощью комбинации клавиш.') ;

let a1 = new Tags('a', 'Тег a является одним из важных элементов HTML и предназначен для создания ссылок.', attrOfa1, attrOfa2);

console.log(a1);



let attrOfDiv1 = new Attribut('align', 'Задает выравнивание содержимого тега div')
let attrOfDiv2 = new Attribut('title', 'Добавляет всплывающую подсказку к содержимому.')

let div1 = new Tags('div', 'Элемент div является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', attrOfDiv1, attrOfDiv2);
console.log(div1);



let attrOfH1 = new Attribut('align', 'Определяет выравнивание заголовка')

let header1 = new Tags('h1', 'тег h1 представляет собой наиболее важный заголовок первого уровня', attrOfH1);

console.log(header1);


let attrOfSpan1 = new Attribut('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением')
let attrOfSpan2 = new Attribut('accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш')

let span1 = new Tags('sapn', 'Тег span предназначен для определения строчных элементов документа.', attrOfSpan1, attrOfSpan2);

console.log(span1);



let attrOfInput1 = new Attribut('value', 'Значение элемента')
let attrOfInput2 = new Attribut('type', 'Сообщает браузеру, к какому типу относится элемент формы')

let input1 = new Tags('input', 'Тег input является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие  с пользователем', attrOfInput1, attrOfInput2);
console.log(input1);



let attrOfForm1 = new Attribut('id', 'Связывает поле с формой по её идентификатору')

let form1 = new Tags('form', 'Tег form устанавливает форму на веб-странице.', attrOfForm1);

console.log(form1);


let attrOfOption1 = new Attribut('disabled', 'Заблокировать для доступа элемент списка.')
let attrOfOption2 = new Attribut('selected', 'Заранее устанавливает определенный пункт списка выделенным.')

let option1 = new Tags('option', 'Тег option определяет отдельные пункты списка, создаваемого с помощью контейнера select.', attrOfOption1, attrOfOption2);

console.log(option1);



let attrOfSelect1 = new Attribut('accesskey', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш')
let attrOfSelect2 = new Attribut('multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка')

let select1 = new Tags('select', 'Tег select позволяет создать элемент интерфейса в виде раскрывающегося списка', attrOfSelect1, attrOfSelect2);

console.log(select1);







// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================




let objCar = {
    model: '530i',
    producer: 'BMW',
    year: 2005,
    maxSpeed: 270,
    engine : '2.0L',
    drive : function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    },
    info: function () {
        console.log(`model:${this.model}, produser:${this.producer}, year:${this.year}, max.speed:${this.maxSpeed},engine:${this.engine}`)
    },
    increaseMaxSpeed: function (newSpeed) {
        this.maxSpeed = newSpeed;
    },
    changeYear: function (newValue) {
        this.year = newValue;
    },
    addDriver: function (driver) {
        this.driver = driver

    }

}
//
// objCar.drive();
// objCar.info();
// objCar.increaseMaxSpeed(290);
// let driver = {name:'Sergio',age:29, expirience:10};
// objCar.addDriver(driver);
// console.log(objCar);


//
// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================



function NewCar(model, producer , year, maxSpeed, engine){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info =  function () {
        console.log(`model:${this.model}, produser:${this.producer}, year:${this.year}, max.speed:${this.maxSpeed},engine:${this.engine}`)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver =  function (driver) {
        this.driver = driver

    }
}

let car = new NewCar('fusion' , 'Ford',2015,195,'2.0 Turbo');


// car.drive()
// car.info()
// car.changeYear(2014)
// car.increaseMaxSpeed(220)
// car.addDriver(driver)
// console.log(car);
//


//
// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

 class Car {

     constructor(model,producer,year,maxSpeed,engine) {
         this.model = model;
         this.producer = producer;
         this.year = year;
         this.maxSpeed = maxSpeed;
         this.engine = engine;
     }
     drive () {
         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
     };
     info () {
         console.log(`model:${this.model}, produser:${this.producer}, year:${this.year}, max.speed:${this.maxSpeed},engine:${this.engine}`)
     };
     increaseMaxSpeed(newSpeed) {
         this.maxSpeed = newSpeed;
     };
     changeYear(newValue) {
         this.year = newValue;
     };
     addDriver(driver) {
         this.driver = driver;

     }

 }


 let someCar = new Car('Outlander', 'Mitsubishi',2007,180,'2.4');

 class Bissnescalass extends Car{};
  let coolCar = new Bissnescalass('S600','Mrecedes-Benz', 2018, 250, '4.0 Twin-turbo')
console.log(coolCar);



//
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================;


class Popelushka {
    constructor(name,age,shoesSize) {
        this.name =  name;
        this.age = age;
        this.shoesSize =shoesSize;
    }

}



let popelushka1 = new Popelushka('Vika',25,36)
let popelushka2 = new Popelushka('Olha',20,34)
let popelushka3 = new Popelushka('Oksana',32,40)
let popelushka4 = new Popelushka('Mary',27,37)
let popelushka5 = new Popelushka('Lilya',24,36)
let popelushka6 = new Popelushka('Ira',25,39)
let popelushka7 = new Popelushka('Ivanka',35,41)
let popelushka8 = new Popelushka('Romanna',29,35)
let popelushka9 = new Popelushka('Maianna',18,34)
let popelushka10 = new Popelushka('Vika',21,38);;


 function pushPopelushokinArr() {
     let newArr = [];
     for (let i = 0; i < arguments.length ; i++) {
         newArr.push(arguments[i])
     }
    return newArr;
 }

 let arrOfPopelushi  = pushPopelushokinArr(popelushka1, popelushka2, popelushka3,popelushka4,popelushka5,popelushka6,popelushka7,popelushka8,popelushka9,popelushka10);


class Prince {
    constructor(name,age,shoeSizeThatHeFound) {
        this.name = name;
        this.age = age;
        this.foundedShoeSize = shoeSizeThatHeFound;
    }

}
let prince = new Prince('Sergio' ,29,37);

for (let elem of arrOfPopelushi) {
    if(elem.shoesSize === prince.foundedShoeSize){

        console.log(`Попелюшка ${elem.name} має бути з ${prince.name}`)
    }

}




//
// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================



function Popelushki2(name, age, shoeSzie) {
    this.name = name;
    this.age = age;
    this.shoeSzie = shoeSzie;

}

let popelush1 = new Popelushki2('Vika',25,36)
let popelush2 = new Popelushki2('Olha',20,34)
let popelush3 = new Popelushki2('Oksana',32,40)
let popelush4 = new Popelushki2('Mary',27,37)
let popelush5 = new Popelushki2('Lilya',24,36)
let  popelush6 = new Popelushki2('Ira',25,39)
let  popelush7 = new Popelushki2('Ivanka',35,41)
let  popelush8 = new Popelushki2('Romanna',29,35)
let  popelush9 = new Popelushki2('Maianna',18,34)
let  popelush10 = new Popelushki2('Vika',21,38);;


let popelushki  = pushPopelushokinArr(popelush1, popelush2, popelush3,popelush4,popelush5,popelush6,popelush7,popelush8,popelush9,popelush10);;

console.log(popelushki);

function  Prince2(name,age, foundedShoe) {
    this.name = name;
    this.age = age;
    this.foundedShoe = foundedShoe;
    this.findPoprlushka = function (arrOfPopel) {
        for (let popelushka of arrOfPopel) {
          if(popelushka.shoeSzie === this.foundedShoe){
              return `${this.name} знайшов свою попелюшку ${popelushka.name}`
          }
        }
    }
}

let prince2 = new Prince2('Kolya', 32, 39);
console.log(prince2.findPoprlushka(popelushki));
