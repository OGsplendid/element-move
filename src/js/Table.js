export default class Table {
  constructor(element) {
    try {
      this.element = element;
    } catch (error) {
      console.log(error);
    }
  }

  static createGoblinElement() {
    const goblinElement = document.createElement('img');
    goblinElement.classList.add('goblin');
    goblinElement.src = 'https://github.com/netology-code/ahj-homeworks/blob/AHJ-50/dom/pic/goblin.png?raw=true';
    return goblinElement;
  }

  findProperIndex() {
    const cells = [...this.element.querySelectorAll('.cell')];
    const activeCell = cells.find((el) => el.classList.contains('active'));
    const activeCellIndex = cells.indexOf(activeCell);
    const index = Math.floor(Math.random() * 16);

    if (activeCellIndex === index) {
      this.findProperIndex();
    }
    return index;
  }

  rotate() {
    const cells = [...this.element.querySelectorAll('.cell')];
    const goblinElement = Table.createGoblinElement();
    setInterval(() => {
      const index = this.findProperIndex();
      cells.forEach((el) => el.classList.remove('active'));
      cells[index].classList.add('active');
      cells[index].appendChild(goblinElement);
    }, 500);
  }
}
