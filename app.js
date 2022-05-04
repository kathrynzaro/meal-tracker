// import functions and grab DOM elements
import { renderIngredient, renderMeal } from './utils.js';

const form = document.getElementById('add-ingredient');
const itemList = document.getElementById('item-list');

const mealName = document.getElementById('meal');
const mealList = document.getElementById('meal-list');

const remove = document.getElementById('remove');
const save = document.getElementById('save-meal');

// let state
let ingredients = [];
let meals = [];
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

function displayMeals() {
    mealList.textContent = '';
    for (let meal of meals) {
        const li = renderMeal(meal);
        mealList.appendChild(li);
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
    form.reset();
});

remove.addEventListener('click', () => {
    ingredients.pop();
    displayIngredients();
});

save.addEventListener('click', () => {
    const mealData = {
        name: mealName.value,
        ingredientCount: ingredients.length,
    };

    meals.push(mealData);
    itemList.textContent = '';
    displayIngredients();
    displayMeals();
});