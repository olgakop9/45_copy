// Класс для описания CSS-класса
class CssClass {
  constructor(name) {
    this.name = name;
    this.styles = [];
  }

  setStyle(property, value) {
    this.styles.push({ property, value });
  }

  getCss() {
    let css = `.${this.name} {`;
    this.styles.forEach(style => {
      css += `${style.property}:${style.value};`;
    });
    css += '}';
    return css;
  }
}

// Класс для описания HTML-элемента
class HtmlElement {
  constructor(tagName, selfClosing = false) {
    this.tagName = tagName;
    this.selfClosing = selfClosing;
    this.textContent = '';
    this.attributes = [];
    this.children = [];
    this.cssClasses = [];
  }

  setAttribute(name, value) {
    this.attributes.push({ name, value });
  }

  addClass(cssClass) {
    this.cssClasses.push(cssClass);
  }

  appendChild(element) {
    this.children.push(element);
  }

  getHtml() {
    let html = `<${this.tagName}`;

    // Добавляем атрибуты
    this.attributes.forEach(attr => {
      html += ` ${attr.name}="${attr.value}"`;
    });

    // Добавляем CSS-классы
    if (this.cssClasses.length > 0) {
      const classNames = this.cssClasses.map(c => c.name).join(' ');
      html += ` class="${classNames}"`;
    }

    html += '>';

    // Добавляем текстовое содержимое
    if (this.textContent && !this.selfClosing) {
      html += this.textContent;
    }

    // Добавляем дочерние элементы
    this.children.forEach(child => {
      html += child.getHtml();
    });

    // Закрываем тег, если не самозакрывающийся
    if (!this.selfClosing) {
      html += `</${this.tagName}>`;
    }

    return html;
  }
}

// Класс для описания HTML-блока
class HtmlBlock {
  constructor() {
    this.styles = [];
    this.rootElement = null;
  }

  addStyle(cssClass) {
    this.styles.push(cssClass);
  }

  setRoot(element) {
    this.rootElement = element;
  }

  getCode() {
    let code = '<style>';
    
    // Добавляем все стили
    this.styles.forEach(style => {
      code += style.getCss();
    });
    
    code += '</style>';
    
    // Добавляем HTML-код
    if (this.rootElement) {
      code += this.rootElement.getHtml();
    }
    
    return code;
  }
}

// Создаем и настраиваем HTML-блок
const block = new HtmlBlock();

// Создаем стили
const headerStyle = new CssClass('header');
headerStyle.setStyle('background-color', '#f8f9fa');
headerStyle.setStyle('padding', '20px');
headerStyle.setStyle('text-align', 'center');

const navStyle = new CssClass('nav');
navStyle.setStyle('display', 'flex');
navStyle.setStyle('justify-content', 'center');
navStyle.setStyle('gap', '15px');
navStyle.setStyle('margin-top', '15px');

const linkStyle = new CssClass('link');
linkStyle.setStyle('text-decoration', 'none');
linkStyle.setStyle('color', '#007bff');
linkStyle.setStyle('font-weight', 'bold');

// Добавляем стили в блок
block.addStyle(headerStyle);
block.addStyle(navStyle);
block.addStyle(linkStyle);

// Создаем структуру элементов
const header = new HtmlElement('header');
header.addClass(headerStyle);

const h1 = new HtmlElement('h1');
h1.textContent = 'Добро пожаловать на наш сайт';
header.appendChild(h1);

const nav = new HtmlElement('nav');
nav.addClass(navStyle);

const links = [
  { text: 'Главная', href: '#' },
  { text: 'О нас', href: '#' },
  { text: 'Услуги', href: '#' },
  { text: 'Контакты', href: '#' }
];

links.forEach(link => {
  const a = new HtmlElement('a');
  a.addClass(linkStyle);
  a.setAttribute('href', link.href);
  a.textContent = link.text;
  nav.appendChild(a);
});

header.appendChild(nav);
block.setRoot(header);

// Выводим на страницу
document.write(block.getCode());