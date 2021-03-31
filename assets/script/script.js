var buttonValue = document.querySelector("#mexicoBtn")
var buttonValueAmerican = document.querySelector("#americanBtn")
var buttonValueFrance = document.querySelector("#franceBtn")
var buttonValueItaly = document.querySelector("#italynBtn")
var buttonValueIndian = document.querySelector("#indiaBtn")
var buttonValueChina = document.querySelector("#chinaBtn")
var buttonValueJapan = document.querySelector("#japanBtn")
var buttonValueGreece = document.querySelector("#greeceBtn")
var buttonValueJamaica = document.querySelector("#jamaicaBtn")
const createTitlePlacement = document.getElementById("title")


var onClickCuisineMexico = function (event) {
    event.preventDefault();
    var mexicanButtonValue = buttonValue.value;
    if (mexicanButtonValue) {
        getCuisinaCountry(mexicanButtonValue);
        getDessertCuisine(mexicanButtonValue);
        
    }
};

var onClickCuisineAmerica = function (event) {
    event.preventDefault();
    var americanButtonValue = buttonValueAmerican.value;
    if (americanButtonValue) {
        getCuisinaCountry(americanButtonValue);
        getDessertCuisine(americanButtonValue);
    }
}

var onClickCuisineFrance = function (event) {
    event.preventDefault();
    var franceButtonValue = buttonValueFrance.value;
    if (franceButtonValue) {
        getCuisinaCountry(franceButtonValue);
        getDessertCuisine(franceButtonValue);
    }
}

var onClickCuisineItaly = function (event) {
    event.preventDefault();
    var italyButtonValue = buttonValueItaly.value;
    if (italyButtonValue) {
        getCuisinaCountry(italyButtonValue);
        getDessertCuisine(italyButtonValue);
    }
}

var onClickCuisineIndian = function (event) {
    event.preventDefault();
    var indianButtonValue = buttonValueIndian.value;
    if (indianButtonValue) {
        getCuisinaCountry(indianButtonValue);
        getDessertCuisine(indianButtonValue);
    }
}

var onClickCuisineChina = function (event) {
    event.preventDefault();
    var chinaButtonValue = buttonValueChina.value;
    if (chinaButtonValue) {
        getCuisinaCountry(chinaButtonValue);
        getDessertCuisine(chinaButtonValue);
    }
}

var onClickCuisineJapan = function (event) {
    event.preventDefault();
    var japanButtonValue = buttonValueJapan.value;
    if (japanButtonValue) {
        getCuisinaCountry(japanButtonValue);
        getDessertCuisine(japanButtonValue);
    }
}

var onClickCuisineGreece = function (event) {
    event.preventDefault();
    var greekButtonValue = buttonValueGreece.value;
    if (greekButtonValue) {
        getCuisinaCountry(greekButtonValue);
        getDessertCuisine(greekButtonValue);
    }
}

var onClickCuisineJamaica = function (event) {
    event.preventDefault();
    var jamaicaButtonValue = buttonValueJamaica.value;
    if (jamaicaButtonValue) {
        getCuisinaCountry(jamaicaButtonValue);

    }
}

var getDessertCuisine = function (cuisine) {
    fetch("https://api.edamam.com/search?q=Desserts&app_id=96a1ce69&app_key=bdba3210ad31eeb9ca5d5c1cc397acb7&from=1&to=5&cuisineType=" + cuisine)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE NOT OK");
            }
        })
        .then(function (data) {
            console.log(data);
            displayDessertRecipes(data);
        });

}

function displayDessertRecipes(data) {
    // Title 
    const dessertName = data.hits[2].recipe.label
    const createDessertTitle = document.createElement("h1")
    const dessertTitlePlacement = document.getElementById("dessertTitle")
    createDessertTitle.innerHTML = dessertName
    dessertTitlePlacement.appendChild(createDessertTitle)

    //Ingridients + Instructions
    const createIngridientsPlacementDessert = document.getElementById("dessertingridients")
    const createIngridientsSectionDessert = document.createElement("span")
    const getIngridientsDesserts = data.hits[2].recipe.ingredientLines
    createIngridientsSectionDessert.innerHTML = "<h2> Ingridients: </h2>" + getIngridientsDesserts
    createIngridientsPlacementDessert.appendChild(createIngridientsSectionDessert)

    //Image
    const createImagePlacementDessert = document.getElementById("dessertimage")
    const createImageSectionDessert = document.createElement("span")
    const getImageDessert = data.hits[2].recipe.image
    createImageSectionDessert.innerHTML = "<img src=" + getImageDessert + ">"
    createImagePlacementDessert.appendChild(createImageSectionDessert)

}


var getCuisinaCountry = function (cuisine) {

    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + cuisine)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE NOT OK");
            }
        })
        .then(function (data) {
            console.log(data);
            displayCuisineRecipes(data);
        })
        .catch((error) => {
            console.error("FETCH ERROR:", error);
        });

    function displayCuisineRecipes(data) {
        cuisineNumber = data.meals[1].idMeal
        const createRecipeSection = document.createElement("li")
        const getRecipeInformation = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + cuisineNumber
        fetch(getRecipeInformation)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("NETWORK RESPONSE NOT OK");
                }
            })
            .then(function (data) {
                console.log(data);
                const instructionsRecipe = data.meals[0].strInstructions
                createRecipeSection.innerHTML = instructionsRecipe
                const createInstructions = document.getElementById("instructions")
                createInstructions.appendChild(createRecipeSection)

                //Title
                const createTitlePlacement = document.getElementById("title")
                const createTitleSection = document.createElement("h1")
                const getTitle = data.meals[0].strMeal
                createTitleSection.innerHTML = getTitle
                createTitlePlacement.appendChild(createTitleSection)

                //Image
                const createImagePlacement = document.getElementById("image")
                const createImageSection = document.createElement("span")
                const getImage = data.meals[0].strMealThumb
                createImageSection.innerHTML = "<img src=" + getImage + ">"
                createImagePlacement.appendChild(createImageSection)

                //Ingridients
                const createIngridientsPlacement = document.getElementById("ingridients")
                const createIngridientsSection = document.createElement("span")
                const getIngridients = data.meals[0].strIngredient1
                const getIngridients2 = data.meals[0].strIngredient2
                const getIngridients3 = data.meals[0].strIngredient3
                const getIngridients4 = data.meals[0].strIngredient4
                const getIngridients5 = data.meals[0].strIngredient5
                const getIngridients6 = data.meals[0].strIngredient6
                const getIngridients7 = data.meals[0].strIngredient7
                const getIngridients8 = data.meals[0].strIngredient8
                const getIngridients9 = data.meals[0].strIngredient9
                const getIngridients10 = data.meals[0].strIngredient10
                createIngridientsSection.innerHTML = "<h2> Ingridients: </h2>" + "<ul>" + getIngridients + "</ul>" + "<ul>" + getIngridients2 + "</ul>" + "<ul>" + getIngridients3 + "</ul>" + "<ul>" + getIngridients4 + "</ul>" + "<ul>" + getIngridients5 + "</ul>" + "<ul>" + getIngridients6 + "</ul>" + "<ul>" + getIngridients7 + "</ul>" + "<ul>" + getIngridients8 + "</ul>" + "<ul>" + getIngridients9 + "</ul>" + "<ul>" + getIngridients10 + "</ul>"
                createIngridientsPlacement.appendChild(createIngridientsSection)
            })

    }
}

buttonValue.addEventListener("click", onClickCuisineMexico)
buttonValueAmerican.addEventListener("click", onClickCuisineAmerica)
buttonValueFrance.addEventListener("click", onClickCuisineFrance)
buttonValueItaly.addEventListener("click", onClickCuisineItaly)
buttonValueIndian.addEventListener("click", onClickCuisineIndian)
buttonValueChina.addEventListener("click", onClickCuisineChina)
buttonValueJapan.addEventListener("click", onClickCuisineJapan)
buttonValueGreece.addEventListener("click", onClickCuisineGreece)
buttonValueJamaica.addEventListener("click", onClickCuisineJamaica)
