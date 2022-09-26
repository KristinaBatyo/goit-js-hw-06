
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");
const createEl = ingredients.map((el) => {
  const items = document.createElement('li');
  items.classList.add("item");
  items.textContent = el;
  return items;
});
ingredientsEl.append(...createEl);
console.log(ingredientsEl)
