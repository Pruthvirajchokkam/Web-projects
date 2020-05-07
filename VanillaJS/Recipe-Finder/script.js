const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-icon');
const RandomBtn = document.getElementById('random-icon');
const searchResultMsg = document.getElementById('search-result-message');
const recipiesElement = document.getElementById('search-result-recipies');
const recipieElement = document.getElementById('search-item');

function searchRecipies(e) {
  e.preventDefault();
  recipiesElement.innerHTML = '';
  recipieElement.innerHTML = '';
  const recipieForSearch = searchInput.value;

  if (recipieForSearch.trim()) {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipieForSearch}`
    )
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        searchResultMsg.innerHTML = `<h2>Search results for "${recipieForSearch}" are</h2>`;
        if (data.meals === null) {
          searchResultMsg.innerHTML = `<h2>Search results for "${recipieForSearch}" are not found</h2>`;
        } else {
          recipiesElement.innerHTML = data.meals
            .map(item => {
              const x = `<div class="meal">
              <img src="${item.strMealThumb}" alt="${item.strMeal} />
              <div class="meal-info" data-id="${item.idMeal}">
              </div>
            </div>`;

              return x;
            })
            .join('');
        }
      });

    searchInput.value = '';
  } else {
    alert(
      'You have not entered any item to search, Please enter to get results'
    );
  }
}

function showDetails(e) {
  const recipe = e.path.find(item => {
    if (item.classList) {
      return item;
    } else {
      return false;
    }
  });
  console.log(recipe);

  if (recipe) {
    const itemId = recipe.getAttribute('data-id');
    fetchItemData(itemId);
  }
}

function fetchItemData(id) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}
    `)
    .then(resp => resp.json())
    .then(data => {
      addItemToDOM(data.meals[0]);
    });
}

function addItemToDOM(item) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (`${item[`strIngredient${i}`]}`) {
      console.log('into array of ingredients');
      ingredients.push(
        `${item[`strIngredient${i}`]} - ${item[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  console.log(ingredients);

  recipieElement.innerHTML = `
  <div class="main">
    <div class="single-item">
      <h1>${item.strMeal}</h1>
      <img src="${item.strMealThumb}" class="big-image"/>
      <div class="food">
      <div >${item.strArea}</div>
      <div >${item.strCategory}</div>
      </div>
      <span class="instructions">${item.strInstructions}</span>
      <h3>Ingredients</h3>
        <ul>
          ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        <ul>
    </div>    
  `;

  // const ingredients = [];

  // for (let i = 1; i <= 20; i++) {
  //   if (meal[`strIngredient${i}`]) {
  //     ingredients.push(
  //       `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
  //     );
  //   } else {
  //     break;
  //   }
  // }

  // recipieElement.innerHTML = `
  //   <div class="single-meal">
  //     <h1>${meal.strMeal}</h1>
  //     <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
  //     <div class="single-meal-info">
  //       ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
  //       ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
  //     </div>
  //     <div class="main">
  //       <p>${meal.strInstructions}</p>
  //       <h2>Ingredients</h2>
  //       <ul>
  //         ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
  //       </ul>
  //     </div>
  //   </div>
  // `;
}

searchBtn.addEventListener('click', searchRecipies);
recipiesElement.addEventListener('click', showDetails);
