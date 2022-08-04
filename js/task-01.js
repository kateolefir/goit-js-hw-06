const сategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${сategories.length}`);

сategories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});