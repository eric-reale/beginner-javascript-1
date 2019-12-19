const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    ob.unobserve(terms.lastElementChild);
  }
}

const ob = new IntersectionObserver(obCallback,
  {
    root: terms,
    threshold: 1
});

ob.observe(terms.lastElementChild);

// terms.addEventListener('scroll', function(e) {
//   console.log(e);
// })



// Watch
// "intersection observer" - will watch if an element is on/off or partly on/off a page


//The Intersection Observer API allows you to configure a callback that is called whenever one element, called the target, intersects either the device viewport or a specified element; for the purpose of this API, this is called the root element or root.
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API



/// If you run a JS function but doesn't apply to the page you're on, it will break
// In order to get around that:

// function scrollToAccept() {
  // const terms = document.querySelector('.terms-and-conditions');
  // if(!terms) {
    // return;
  // }
//}
