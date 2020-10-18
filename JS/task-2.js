const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const conteinerEL = document.querySelector('#ingredients');
  
  const element = ingredients.map(option => {
    const elementLi = document.createElement('li');
    elementLi.textContent = option;
    return elementLi;
  });

console.log(element);

conteinerEL.append(...element);


