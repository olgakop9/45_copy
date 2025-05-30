//Реализовать класс, который описывает css класс.
//Класс CssClass должен содержать внутри себя:
//■ название css класса;
//■ массив стилей;
//■ метод для установки стиля;
//■ метод для удаления стиля;
//■ метод getCss(), который возвращает css код в виде строки


class CssClass {
  /**
   * Конструктор класса
   * @param {string} className - Название CSS-класса
   */
  constructor(className) {
    this.className = className;
    this.styles = {}; // Храним стили как объект (свойство: значение)
  }

  /**
   * Установка стиля
   * @param {string} property - CSS-свойство (например, 'color')
   * @param {string} value - Значение свойства (например, 'red')
   */
  setStyle(property, value) {
    this.styles[property] = value;
  }

  /**
   * Удаление стиля
   * @param {string} property - CSS-свойство для удаления
   */
  removeStyle(property) {
    delete this.styles[property];
  }

  /**
   * Генерация CSS-кода
   * @returns {string} Строка с CSS-кодом
   */
  getCss() {
    let cssCode = `.${this.className} {\n`;
    for (const [property, value] of Object.entries(this.styles)) {
      cssCode += `  ${property}: ${value};\n`;
    }
    cssCode += '}';
    return cssCode;
  }
}

// Пример использования
const buttonClass = new CssClass('primary-button');

// Устанавливаем стили
buttonClass.setStyle('color', 'white');
buttonClass.setStyle('background-color', 'blue');
buttonClass.setStyle('padding', '10px 20px');

// Получаем CSS-код
console.log(buttonClass.getCss());
// Выведет:
// .primary-button {
//   color: white;
//   background-color: blue;
//   padding: 10px 20px;
// }

// Удаляем один стиль
buttonClass.removeStyle('padding');

// Проверяем изменения
console.log(buttonClass.getCss());
// Выведет:
// .primary-button {
//   color: white;
//   background-color: blue;
// }