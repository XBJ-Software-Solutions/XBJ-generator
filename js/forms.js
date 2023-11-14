let ingredientsForm = document.getElementById('ingredientsForm');
let options = document.querySelectorAll('option');
let selectedIngredients = [];

console.log(options);

let base = document.getElementById('dropDownBase');
let citrus = document.getElementById('dropDownCitrus');
let bitter = document.getElementById('dropDownBitter');
let sweet = document.getElementById('dropDownSweet');
console.log(options);

let baseFunction = function(){
  for(let i = 0;i < baseSpirits.length; i++){
    let baseName = baseSpirits[i].name;
    let baseOption = document.createElement('option');
    baseOption.textContent = baseName;
    base.appendChild(baseOption); 
  }
}

let citrusFunction = function(){
  for(let i = 0; i < citrusIngredients.length; i++){
    let citrusName = citrusIngredients[i].name;
    let citrusOption = document.createElement('option');
    citrusOption.textContent = citrusName;
    citrus.appendChild(citrusOption);
  }
}

let bitterFunction = function(){
  for(let i = 0; i < bitterIngredients.length; i++){
    let bitterName = bitterIngredients[i].name;
    let bitterOption = document.createElement('option');
    bitterOption.textContent = bitterName;
    bitter.appendChild(bitterOption);
  }
}

let sweetFunction = function(){
  for (i = 0; i < sweetIngredients.length; i++){
    let sweetName = sweetIngredients[i].name;
    let sweetOption = document.createElement('option');
    sweetOption.textContent = sweetName;
    sweet.appendChild(sweetOption);
  }
}

function handleSelectionBase (event) {
  let userBase = event.target.name
  console.log (userBase);
  if (event.target.value === baseSpirits[0].name) { 
    selectedIngredients.push(this);
  };
};
console.log (selectedIngredients);

for(let i = 0; i < options.length; i++) {s
    options[i].addEventListener('changes', handleSelectionBase)
      // console.log(event.target.name, event.target.value);

      // if (event.target.value === allIngredients[0].name) { 
        // selectedIngredients.push(this);
        console.log (selectedIngredients);
        console.log (allIngredients[0].name);
      };
      // selectedIngredients[event.target.name] = event.target.value;


  function renderRecipe () {
    let recipeDisplay = document.getElementById('something');
    let recipeElement = document.createElement('p');
    
    //unitOfMeasure is written as unitofMeasure
    recipeElement.textContent = `Here you go! Mix ${selectedIngredients[0].volume}${selectedIngredients[0].unitofMeasure} of ${selectedIngredients[0].name}, ${selectedIngredients[1].volume}${selectedIngredients[1].unitofMeasure} of ${selectedIngredients[1].name}, and ${selectedIngredients[2].volume}${selectedIngredients[2].unitofMeasure} of ${selectedIngredients[2].name}. Stir over ice and pour into a chilled cocktail glass. Enjoy!`
    recipeDisplay.appendChild(recipeElement);
  }


  ingredientsForm.addEventListener("submit", function(event) {
    event.preventDefault();
    ingredientsForm.reset();
    // base.focus();
    renderRecipe();

    // renderImage(); this function hasn't been made yet
    }
  );


  baseFunction();
  citrusFunction();
  bitterFunction();
  sweetFunction();
