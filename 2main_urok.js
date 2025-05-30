class HtmlElement {
    constructor(tagName, isSelfClosinng = false) {
        this.tagName = tagName;
        this.isSelfClosinng = isSelfClosinng;
        this.text = '';
        this.attributes = [];
        this.styles = [];
        this.children = [];
    }
    // методы для установки атрибута
    setAttribute(name, value) {
        const att = {name: name, value: value};
        this.attributes.push(att);
    }
    setStyle(style) {
        this.styles.push(style);
    }
    setText(text) {
        this.text = text;
    }


    setChildToStart(element) {
        this.children.unshift(element);
    }
    setChildToEnd(element) {
        this.children.push(element);
    }
    //метод который возвращает html сод get

    getHtml() {
    let HTMLString = '';
    HTMLString += '<';
    HTMLString += this.tagName
    HTMLString += ' ';

    for(let attr of this.attributes) {
        HTMLString += `${attr.name}="${attr.value}"`;
        HTMLString += ' ';
        
    }

    if(this.styles.length > 0) {
        HTMLString+= 'style="';
        HTMLString += this.styles.join(' ');
        HTMLString += '"';
        HTMLString += ' ';
    }

    if(this.isSelfClosinng) {
    HTMLString += '/>';
    return HTMLString;
    }
        HTMLString += `> \n`;
        HTMLString += this.text;
        HTMLString += `\n`;

        for(let el of this.children) {
        HTMLString += el.getHtml();
        HTMLString += `\n`;
    
}

HTMLString += `<\\${this.tagName}>`;

return HTMLString;

    }}

const container = new HtmlElement('div');
container.setAttribute('class', 'container');
container.setStyle('width: 500px;');
container.setStyle('margin: 0 auto;');
container.setStyle('border: 1px solid black;');

const title = new HtmlElement('h1');
title.setText("домашнее задание");

const image = new HtmlElement('img', true);
image.setAttribute('src', 'html')

image.setAttribute('alt', 'Пример картинки')

container.setChildToEnd(title);
container.setChildToEnd(image);

const app = document.querySelector('#app');
app.textContent = container.getHtml();