const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
    e.preventDefault();
    const text = this.querySelector('[name="item"]').value;
    const item = {
        text: text,
        done: false
    }

    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

addItems.addEventListener('submit', addItem);