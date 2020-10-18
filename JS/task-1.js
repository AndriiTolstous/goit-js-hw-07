
const itemsEl = document.querySelectorAll('.item');

console.log(`В списке ${itemsEl.length} категории.`);

itemsEl.forEach((information) => {
  const nameCategory = information.querySelector(`h2`);
  console.log(`Категория: ${nameCategory.textContent}`);
  const qualityItems = information.querySelectorAll('.item li');
  console.log(`Количество Элементов: ${qualityItems.length}`);
});