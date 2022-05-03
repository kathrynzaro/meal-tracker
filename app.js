// import functions and grab DOM elements
import { renderIngredient } from './utils.js';

const form = document.getElementById('add-ingredient');
const itemList = document.getElementById('item-list');
// let state
let ingredients = [];
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

function displayIngredients() {
    itemList.textContent = '';
    for (let item of ingredients) {
        const li = renderIngredient(item);
        itemList.appendChild(li);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const itemData = new FormData(form);
    let ingredient = {
        ingredient: itemData.get('ingredient'), 
        quantity: itemData.get('quantity'), 
        measurement: itemData.get('measurement'),
    };
    ingredients.push(ingredient);
    console.log(ingredient);
    displayIngredients();
});
