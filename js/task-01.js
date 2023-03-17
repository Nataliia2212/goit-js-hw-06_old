const itemsRef = document.querySelectorAll('.item')
console.log('Number of categories:', itemsRef.length)

itemsRef.forEach(item => {
    const categoryRef = item.querySelector('h2')
    const nameOfCategory = categoryRef.textContent
    const elementsFromCategoryRef = item.querySelectorAll('li')
    
    console.log('Category:', nameOfCategory)

    console.log('Elements:', elementsFromCategoryRef.length)
});