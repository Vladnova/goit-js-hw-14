const list = document.getElementById("categories");
const items = document.querySelectorAll(".item");

console.log(
  `Number of ${list.attributes.id.nodeValue}: ${list.children.length}`
);

items.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.innerText}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
