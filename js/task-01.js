const totalUl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${totalUl.length}`);

totalUl.forEach(el =>
{
    console.log(`Category: ${el.querySelector('h2').textContent}`)
    console.log(`Elements: ${el.querySelectorAll('li').length}`)
})
