const wes = document.querySelector('.wes');

console.log(wes);


// window.addEventListener('keyup', function() {
//   alert("hello");
// });

function handleKeyup(event) {
  console.log('it works');
  console.log(event);

}

window.addEventListener('keyup', handleKeyup);
