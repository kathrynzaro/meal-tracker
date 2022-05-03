// import functions and grab DOM elements
const form = document.getElementById('add-ingredient');
// let state
let ingredients = [];
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

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
});
