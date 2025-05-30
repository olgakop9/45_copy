//Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
//■ поле, хранящее радиус окружности;
//■ get-свойство, возвращающее радиус окружности;
//■ set-свойство, устанавливающее радиус окружности;
//■ get-свойство, возвращающее диаметр окружности;
//■ метод, вычисляющий площадь окружности;
//■ метод, вычисляющий длину окружности.
//Продемонстрировать работу свойств и методов.


class Circle {
  constructor(radius) {
    this._radius = radius; // Инициализируем свойство _radius
  }

  get radius() {
    return this._radius; // Получаем радиус через circle.radius
  }

 //установим длину радиуса с проверкой
  set radius(value) {
    if (value <= 0) {
      throw new Error("Радиус должен быть положительным");
    }
    this._radius = value; // Позволяет установить радиус через circle.radius = 10
  }

  // получение диаметра (вычисляется автоматически)
  get diameter() {
    return this._radius * 2; // Диаметр = 2 * радиус
  }

  // Метод для вычисления площади
  calculateArea() {
    return Math.PI * this._radius ** 2; // π * r²
  }

//    Метод для вычисления длины окружности
  calculateCircumference() {
    return 2 * Math.PI * this._radius; // 2πr
  }
}

const circle = new Circle(5); // Создаём окружность с радиусом 5
console.log(circle.radius); // 5 (геттер)
console.log(circle.diameter); // 10 (геттер)
console.log(circle.calculateArea()); // ~78.54
console.log(circle.calculateCircumference()); // ~31.42

circle.radius = 10; // Устанавливаем новый радиус (сеттер)
console.log(circle.diameter); // 20 (автоматически пересчитался)