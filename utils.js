export function renderIngredient(item) {
    const li = document.createElement('li');
    li.textContent = `${item.ingredient}: ${item.quantity} ${item.measurement}`;
    return li;
}

export function renderMeal(meal) {
    const li = document.createElement('li');
    li.textContent = `Meal Name:${meal.name} ${meal.ingredientCount} ingredients`;
    return li;
}
