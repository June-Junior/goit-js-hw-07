const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];  

const ingredientsList = ingredients.map(item => {
    const itemLi = document.createElement('li');
    console.log(itemLi);
    const itemName = document.createTextNode(item);
    itemLi.appendChild(itemName);
    return itemLi;
});
const list = document.querySelector("#ingredients");
// console.log(emptyArray);

list.append(...ingredientsList);
console.log(list);
