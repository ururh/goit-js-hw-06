const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients')
console.log(ul);
const li = ingredients.map(el => {
  const allLi = document.createElement('li');
  allLi.classList.add('item');
  allLi.textContent = el;
  return allLi;
})

ul.append(...li)

