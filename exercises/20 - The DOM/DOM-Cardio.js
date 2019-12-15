// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body

// make an unordered list

function createDiv() {
  document.body.appendChild(div);
  addElements();
  createImg();
  addParagraphs();
}

function addElements() {
  const list = document.createElement('ul');
  div.insertAdjacentElement('beforeend', list);

  const item1 = document.createElement('li');
  item1.innerHTML = 'one';
  item1.classList.add('wrapper');
  list.insertAdjacentElement('beforeend', item1);

  const item2 = document.createElement('li');
  item2.innerHTML = 'two';
  item2.classList.add('wrapper');
  list.insertAdjacentElement('beforeend', item2);

  const item3 = document.createElement('li');
  item3.innerHTML = 'three';
  item3.classList.add('wrapper');
  list.insertAdjacentElement('beforeend', item3);
}

// add three list items with the words "one, two three" in them


document.addEventListener('click', createDiv);

// put that list into the above wrapper

// create an image

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

function createImg() {
  const img = document.createElement('img');
  img.src = 'https://images.unsplash.com/photo-1571942676516-bcab84649e44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80';
  img.alt = 'good food';
  img.classList.add('photo-class')
  img.width = 250;
  const wrapper = document.querySelector('.wrapper');
  wrapper.append(img);
}

// with HTML string, make a div, with two paragraphs inside of it
function addParagraphs() {
  const myHTML = `
  <p>One paragraph</p>
  <p>Two paragraph</p>`;
  div.insertAdjacentHTML('afterbegin', myHTML);
  const p2 = document.querySelector('div.wrapper')
  p2.children[1].classList.add('warning')
}



// put this div before the unordered list from above

// add a class to the second paragraph called warning
// remove the first paragraph

function removeParagraph() {
  const p = document.querySelector('div.wrapper')
  p.children[0].remove();
}

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
  const html = `
  <div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be an old dog!</p>
  </div>
  `;
  const div = document.createElement('div');
  div.innerHTML = html
  div.classList.add('cards');
  return div
};

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
