const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrOfIngredients = [];

ingredients.map(ingredient => {
  const ingredientEl = document.createElement('li')
  
  ingredientEl.textContent = `${ingredient}`
  ingredientEl.classList.add('item')

  arrOfIngredients.push(ingredientEl)
})

const listOfIngredientsRef = document.querySelector('#ingredients')

listOfIngredientsRef.append(...arrOfIngredients)