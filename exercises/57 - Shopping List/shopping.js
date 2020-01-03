const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold our state

let items = [];

function handleSubmit(e) {
  e.preventDefault();
  // console.log(e);
  const name = e.currentTarget.item.value;  /// 'item' is the name assigned to it in HTML form
  // If it's empty, then don't submit it
  if (!name) return;
  // console.log(name);
  const item = {
    name: name,
    id: Date.now(),
    complete: false,
  };
  // console.log(item);
  items.push(item);
  // console.log(`There are now ${items.length} in your state`);
  e.target.reset();
  // displayItems(); // instead of this, fire off a custome event
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  console.log(items);
  const html = items
    .map(
      item => `<li class="shopping-item">
      <input
        value="${item.id}"
        type="checkbox"
        ${item.complete && 'checked'}
      >
      <span class="itemName">${item.name}</span>
      <button
        aria-label="Remove ${item.name}"
        value="${item.id}"
      >&times;</buttonaria-label="Remove>
  </li>`
    )
    .join('');
  list.innerHTML = html;
}

function deleteItem(id) {
  console.log('DELETIENG ITEM', id);
  // update our items array without this one
  items = items.filter(item => item.id !== id);
  console.log(items);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  console.log('Marking as complete', id);
  const itemRef = items.find(item => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);

list.addEventListener('click', function(e) {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});

