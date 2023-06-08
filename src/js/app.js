const cells = [...document.querySelectorAll('.cell')];

const goblinElement = document.createElement('img');
goblinElement.src = 'https://github.com/netology-code/ahj-homeworks/blob/AHJ-50/dom/pic/goblin.png?raw=true';
goblinElement.classList.add('goblin');

// функция ищет индекс != индексу активного элемента
function getProperIndex() {
  const activeCell = cells.find((el) => el.classList.contains('active'));
  const activeCellIndex = cells.indexOf(activeCell);
  let index = Math.floor(Math.random() * 16);
  if(activeCellIndex !== index) {
    return index;
  } else {
    getProperIndex();
  }
}

setInterval(() => {
  const index = getProperIndex();
  cells.forEach((el) => el.classList.remove('active'));
  cells[index].classList.add('active');
  cells[index].appendChild(goblinElement);
}, 1000);
