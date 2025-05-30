class CssClass {
  constructor(className) {
    this.className = className;
    this.styles = []; // Массив объектов {property, value}
  }

  setStyle(property, value) {
    const index = this.styles.findIndex(s => s.property === property);
    if (index >= 0) {
      this.styles[index].value = value; // Обновляем если существует
    } else {
      this.styles.push({property, value}); // Добавляем новый
    }
  }

  removeStyle(property) {
    this.styles = this.styles.filter(s => s.property !== property);
  }

  getCss() {
    const stylesStr = this.styles
      .map(s => `  ${s.property}: ${s.value};`)
      .join('\n');
    return `.${this.className} {\n${stylesStr}\n}`;
  }
}
//Какой вариант лучше зависит от требований:

//Объект ({}) - быстрее для поиска/изменения конкретных свойств

//Массив ([]) - сохраняет порядок добавления стилей