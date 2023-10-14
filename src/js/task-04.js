const root = document.querySelector("#counter");
const incrementBtn = root.lastElementChild;
const decrementBtn = root.firstElementChild;
const span = decrementBtn.nextElementSibling;

incrementBtn.addEventListener("click", handlerIncrement);
decrementBtn.addEventListener("click", handlerDecrement);

let count = 0;

function handlerIncrement(e) {
  count += 1;
  updateCounter(count);
}

function handlerDecrement() {
  count -= 1;
  updateCounter(count);
}

function updateCounter(newCount) {
  span.innerText = newCount;
}
