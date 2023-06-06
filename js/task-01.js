const totalUl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${totalUl.length}`);

totalUl.forEach(el =>
{
    console.log(`Category: ${el.firstElementChild.textContent}`)
    console.log(`Elements: ${el.lastElementChild.children.length}`)
})
