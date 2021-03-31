var buttonValue = document.querySelector("#mexicoBtn")
var buttonValueAmerican = document.querySelector("#americanBtn")
// France
// Italy
// Indian
// China
// Japan
// Greece
var onClickCuisineMexico = function (event) {
    event.preventDefault();

    var mexicanButtonValue = buttonValue.value;

    if (mexicanButtonValue) {
        getCuisinaCountry(mexicanButtonValue);
    }

};

var onClickCuisineAmerica = function (event) {
    event.preventDefault();
    var americanButtonValue = buttonValueAmerican.value;

    if (americanButtonValue) {
        getCuisinaCountry(americanButtonValue);
    }

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
        let newArr = [];
        for (let i = 0; i < 3; i++) {
            newArr.push(data.meals[i]);


            const recipeName = data.meals[i].strMeal
            const recipeNamePlacement = document.getElementById("list")
            const createListElements = document.createElement("li")
            createListElements.innerHTML = recipeName
            createListElements.setAttribute("class", "recipe")
            createListElements.setAttribute("data-id", data.meals[i].idMeal)
            createListElements.setAttribute("onclick", "test(this)")
            recipeNamePlacement.appendChild(createListElements);

        }
    }
}

function test(secondpage) {
    console.log(secondpage)
    const cuisineNumber = secondpage.getAttribute("data-id")
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

};

// function getDessert (cuisine) {

//     fetch("https://api.edamam.com/search?q=Desserts&app_id=96a1ce69&app_key=bdba3210ad31eeb9ca5d5c1cc397acb7&from=1&to=3&cuisineType=mexican" + cuisine)
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error("NETWORK RESPONSE NOT OK");
//             }
//         })
//         .then(function (data) {
//             console.log(data);
//             displayCuisineRecipes(data);
//         })
//         .catch((error) => {
//             console.error("FETCH ERROR:", error);
//         });

//     const titleDessertPlacement = document.getElementById("desserttitle")
//     const createTitleDessert = document.
// }

buttonValue.addEventListener("click", onClickCuisineMexico)
buttonValueAmerican.addEventListener("click", onClickCuisineAmerica)

