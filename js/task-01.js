const categoriesElement = document.querySelectorAll('li.item');
console.log('Number of categories', categoriesElement.length);

categoriesElement.forEach(category => {    
console.log('Category:', category.firstElementChild.textContent)
console.log('Elements:', category.lastElementChild.children.length)
})