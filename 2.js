// Реализовать класс, описывающий html элемент.
// Класс HtmlElement должен содержать внутри себя:
// ■ название тега;
// ■ самозакрывающийся тег или нет;
// ■ текстовое содержимое;
// ■ массив атрибутов;
// ■ массив стилей;
// ■ массив вложенных таких же тегов;
// ■ метод для установки атрибута;
// ■ метод для установки стиля;
// ■ метод для добавления вложенного элемента в конец текущего элемента;
// ■ метод для добавления вложенного элемента в начало текущего элемента;
// ■ метод getHtml(), который возвращает html код в виде
// строки, включая html код вложенных элементов.
// С помощью написанного класса реализовать следующий блок
// и добавить его на страницу с помощью document.write().
// Обратите внимание. Чтобы получить весь этот html в виде
// строки должно быть достаточно вызвать метод getHtml только
// у тега с идентификатором wrapper
// Вот реализация класса HtmlElement и создание указанного блока HTML:

class HtmlElement {
  constructor(tagName, selfClosing = false, textContent = '') {
    this.tagName = tagName;
    this.selfClosing = selfClosing;
    this.textContent = textContent;
    this.attributes = [];
    this.styles = [];
    this.children = [];
  }

  setAttribute(name, value) {
    this.attributes.push({ name, value });
  }

  setStyle(name, value) {
    this.styles.push({ name, value });
  }

  appendChild(element) {
    this.children.push(element);
  }

  prependChild(element) {
    this.children.unshift(element);
  }

  getHtml() {
    let html = `<${this.tagName}`;

    // Добавляем атрибуты
    for (const attr of this.attributes) {
      html += ` ${attr.name}="${attr.value}"`;
    }

    // Добавляем стили
    if (this.styles.length > 0) {
      let styleString = '';
      for (const style of this.styles) {
        styleString += `${style.name}:${style.value};`;
      }
      html += ` style="${styleString}"`;
    }

    html += '>';

    // Добавляем текст, если есть
    if (this.textContent && !this.selfClosing) {
      html += this.textContent;
    }

    // Добавляем дочерние элементы
    for (const child of this.children) {
      html += child.getHtml();
    }

    // Закрываем тег, если не самозакрывающийся
    if (!this.selfClosing) {
      html += `</${this.tagName}>`;
    }

    return html;
  }
}

// Создаем структуру из примера
const wrapper = new HtmlElement('div');
wrapper.setAttribute('id', 'wrapper');

const form = new HtmlElement('form');
wrapper.appendChild(form);

const input = new HtmlElement('input', true);
input.setAttribute('type', 'text');
input.setAttribute('name', 'login');
input.setAttribute('placeholder', 'Логин');
form.appendChild(input);

const br1 = new HtmlElement('br', true);
form.appendChild(br1);

const input2 = new HtmlElement('input', true);
input2.setAttribute('type', 'password');
input2.setAttribute('name', 'password');
input2.setAttribute('placeholder', 'Пароль');
form.appendChild(input2);

const br2 = new HtmlElement('br', true);
form.appendChild(br2);

const button = new HtmlElement('button');
button.setAttribute('type', 'submit');
button.textContent = 'Войти';
form.appendChild(button);

const div = new HtmlElement('div');
wrapper.appendChild(div);

const p = new HtmlElement('p');
p.textContent = 'Нет аккаунта?';
div.appendChild(p);

const a = new HtmlElement('a');
a.setAttribute('href', '#');
a.textContent = 'Зарегистрируйтесь!';
p.appendChild(a);

console.log(new HtmlElement);

// Выводим HTML на страницу
// document.write(wrapper.getHtml());
// Ключевые моменты реализации:
// Структура класса:

// Все свойства инициализируются в конструкторе

// Методы для управления атрибутами, стилями и дочерними элементами

// Рекурсивный метод getHtml() для построения итоговой строки

// Создание структуры:

// Сначала создается wrapper-элемент

// Постепенно добавляются все дочерние элементы

// Для самозакрывающихся тегов (input, br) установлен флаг selfClosing

// Генерация HTML:

// Метод getHtml() обрабатывает все атрибуты, стили и вложенные элементы

// Рекурсивно вызывает getHtml() для всех дочерних элементов

// Корректно обрабатывает самозакрывающиеся теги

// Вывод на страницу:

// Для вывода используется document.write()

// Достаточно вызвать getHtml() только для wrapper-элемента

// Результатом будет точно такой HTML-блок, как показано в примере, со всеми атрибутами и вложенными элементами.

