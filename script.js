// Сеть фастфудов предлагает несколько видов гамбургеров:
// маленький (5$, 20 калорий)
// большой (10$, 40 калорий)

// Гамбургер может быть с одним из нескольких видов начинок:
// сыром (+ 1$, + 20 калорий)
// салатом (+ 2$, + 5 калорий)
// картофелем (+ 1,5$ , + 10 калорий)

// Можно добавить добавки:
// посыпать приправой (+ 1,5$, 0 калорий)
// полить майонезом (+ 2$, + 5 калорий).

// Напишите программу, рассчитывающую стоимость и калорийность гамбургера.
//     Подсказка: нужен класс Гамбургер, глобальный объект HAMBURGER(с перечнем всех его ингредиентов и характеристик)
//  и методы для выбора опций и расчета нужных величин.


class HAMBURGER {
    constructor(name, cheese, salad, potatoes, seasoning, mayonnaise) {
        this.name = name;
        this.cheese = cheese;
        this.salad = salad;
        this.potatoes = potatoes;
        this.seasoning = seasoning;
        this.mayonnaise = mayonnaise;
    };

    options() {
        let size = 0;
        size = +prompt("Какой хочешь бургер большой / маленький (выбор цифрой 1, 2)");
        while (size !== 1 && size !== 2) {
            alert("Выберете бургер");
            size = +prompt("Какой хочешь большой / маленький (выбор цифрой 1, 2)");
        };
        if (size === 1) this.name = "big";
        if (size === 2) this.name = "small";

        let number = 0;
        number = +prompt(`Выберите начинку бургера (выбор цифрой 1, 2 или 3), если не хотите то нажмите отмена:
        1) с сыром;
        2) с салатом;
        3) с картофелем;
        `);
        if (number === 1) this.cheese = true;
        if (number === 2) this.salad = true;
        if (number === 3) this.potatoes = true;
        this.seasoning = confirm("Можем посыпать приправой?");
        this.mayonnaise = confirm("Поливаем майонезом?");

        return this;
    };

    calories() {
        let summ = 0;
        let calories = 0;

        if (this.name === "big") summ += 10, calories += 40;
        if (this.name === "small") summ += 5, calories += 20;
        if (this.cheese) summ += 1, calories += 20;
        if (this.salad) summ += 2, calories += 5;
        if (this.potatoes) summ += 1.5, calories += 10;
        if (this.seasoning) summ += 1.5, calories += 0;
        if (this.mayonnaise) summ += 2, calories += 5;

        return `сумма гамбургера ${summ}$ и его калории ${calories}.`
    };
};

class MyBurger extends HAMBURGER {
    constructor(name, cheese, salad, potatoes, seasoning, mayonnaise) {
        super(name, cheese, salad, potatoes, seasoning, mayonnaise);
    };
};

let hamburger = new MyBurger(this.name, this.cheese, this.salad, this.potatoes, this.seasoning, this.mayonnaise);
alert(hamburger.options().calories());