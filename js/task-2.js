const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];  
const emptyArray = [];  
const ingredientsList = ingredients.map(item => {
    const itemLi = document.createElement('li');
    console.log(itemLi);
    const itemName = document.createTextNode(item);
    itemLi.appendChild(itemName);
    emptyArray.push(itemLi);
});
const list = document.querySelector("#ingredients");
// console.log(emptyArray);

list.append(...emptyArray);
console.log(list);
