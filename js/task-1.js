 const allCategoriesEl = document.querySelectorAll('.item');
 console.log(allCategoriesEl);

 console.log(`В списке ${allCategoriesEl.length} категории.`);

 function request(category) {
    const headingEl = category.querySelector(".item h2");
    console.log(`Категория: ${headingEl.textContent}`); 
   
    const listItemEl = category.querySelectorAll(".item li");
    console.log(`Количество элементов: ${listItemEl.length}`);
 };
 

allCategoriesEl.forEach(request);
 
 