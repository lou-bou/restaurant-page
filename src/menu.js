import pepper_soup from "./images/menu/pepper-soup.png";
import calamari from "./images/menu/calamari.png";
import artichokes from "./images/menu/artichokes.png";
import salmon from "./images/menu/salmon.png";
import short_ribs from "./images/menu/short-ribs.png";
import risotto from "./images/menu/risotto.png";
import mousse from "./images/menu/mousse.png";
import creme_brulee from "./images/menu/creme-brulee.png";
import lemon_tart from "./images/menu/lemon-tart.png";

export function createMenu() {
    // main container
    const content = document.querySelector("#content");

    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    content.appendChild(menu);

    // starters container
    const starters = document.createElement("div");
    menu.appendChild(starters);

    const startersHeadline = document.createElement("h1");
    startersHeadline.textContent = "Starters";
    const startersMeals = document.createElement("div");
    
    starters.appendChild(startersHeadline);
    starters.appendChild(startersMeals);

    // starters meals subcontainers
    const starterMealOne = document.createElement("div");
    const starterMealTwo = document.createElement("div");
    const starterMealThree = document.createElement("div");

    startersMeals.appendChild(starterMealOne);
    startersMeals.appendChild(starterMealTwo);
    startersMeals.appendChild(starterMealThree);

    // first starter meal
    const starterMealOneTitle = document.createElement("h2");
    starterMealOneTitle.textContent = "Pepper Soup";
    const starterMealOneDesc = document.createElement("p");
    starterMealOneDesc.textContent = "Smooth roasted pepper blend with a hint of basil, served warm and fragrant";
    const starterMealOnePrice = document.createElement("p");
    starterMealOnePrice.setAttribute("class", "price");
    starterMealOnePrice.textContent = "$6";
    const starterMealOneImage = document.createElement("img");
    starterMealOneImage.src = pepper_soup;

    starterMealOne.appendChild(starterMealOneTitle);
    starterMealOne.appendChild(starterMealOneDesc);
    starterMealOne.appendChild(starterMealOnePrice);
    starterMealOne.appendChild(starterMealOneImage);

    // second starter meal
    const starterMealTwoTitle = document.createElement("h2");
    starterMealTwoTitle.textContent = "Calamari";
    const starterMealTwoDesc = document.createElement("p");
    starterMealTwoDesc.textContent = "Crisp-fried golden rings served with tangy lemon aioli for a bright finish";
    const starterMealTwoPrice = document.createElement("p");
    starterMealTwoPrice.setAttribute("class", "price");
    starterMealTwoPrice.textContent = "$8";
    const starterMealTwoImage = document.createElement("img");
    starterMealTwoImage.src = calamari;

    starterMealTwo.appendChild(starterMealTwoTitle);
    starterMealTwo.appendChild(starterMealTwoDesc);
    starterMealTwo.appendChild(starterMealTwoPrice);
    starterMealTwo.appendChild(starterMealTwoImage);

    // third starter meal
    const starterMealThreeTitle = document.createElement("h2");
    starterMealThreeTitle.textContent = "Artichokes";
    const starterMealThreeDesc = document.createElement("p");
    starterMealThreeDesc.textContent = "Grilled tender halves, brushed with garlic butter and finished with a touch of sea salt";
    const starterMealThreePrice = document.createElement("p");
    starterMealThreePrice.setAttribute("class", "price");
    starterMealThreePrice.textContent = "$7";
    const starterMealThreeImage = document.createElement("img");
    starterMealThreeImage.src = artichokes;

    starterMealThree.appendChild(starterMealThreeTitle);
    starterMealThree.appendChild(starterMealThreeDesc);
    starterMealThree.appendChild(starterMealThreePrice);
    starterMealThree.appendChild(starterMealThreeImage);

    // mains container
    const mains = document.createElement("div");
    menu.appendChild(mains);

    const mainsHeadline = document.createElement("h1");
    mainsHeadline.textContent = "Mains";
    const mainsMeals = document.createElement("div");
    
    mains.appendChild(mainsHeadline);
    mains.appendChild(mainsMeals);

    // main meals subcontainers
    const mainMealOne = document.createElement("div");
    const mainMealTwo = document.createElement("div");
    const mainMealThree = document.createElement("div");

    mainsMeals.appendChild(mainMealOne);
    mainsMeals.appendChild(mainMealTwo);
    mainsMeals.appendChild(mainMealThree);

    // first main meal
    const mainMealOneTitle = document.createElement("h2");
    mainMealOneTitle.textContent = "Salmon";
    const mainMealOneDesc = document.createElement("p");
    mainMealOneDesc.textContent = "Pan-seared fillet topped with dill cream sauce and seasonal vegetables";
    const mainMealOnePrice = document.createElement("p");
    mainMealOnePrice.setAttribute("class", "price");
    mainMealOnePrice.textContent = "$14";
    const mainMealOneImage = document.createElement("img");
    mainMealOneImage.src = salmon;

    mainMealOne.appendChild(mainMealOneTitle);
    mainMealOne.appendChild(mainMealOneDesc);
    mainMealOne.appendChild(mainMealOnePrice);
    mainMealOne.appendChild(mainMealOneImage);

    // second main meal
    const mainMealTwoTitle = document.createElement("h2");
    mainMealTwoTitle.textContent = "Short Ribs";
    const mainMealTwoDesc = document.createElement("p");
    mainMealTwoDesc.textContent = "Slow-braised beef served over creamy mashed potatoes with rich gravy";
    const mainMealTwoPrice = document.createElement("p");
    mainMealTwoPrice.setAttribute("class", "price");
    mainMealTwoPrice.textContent = "$16";
    const mainMealTwoImage = document.createElement("img");
    mainMealTwoImage.src = short_ribs;

    mainMealTwo.appendChild(mainMealTwoTitle);
    mainMealTwo.appendChild(mainMealTwoDesc);
    mainMealTwo.appendChild(mainMealTwoPrice);
    mainMealTwo.appendChild(mainMealTwoImage);

    // third main meal
    const mainMealThreeTitle = document.createElement("h2");
    mainMealThreeTitle.textContent = "Risotto";
    const mainMealThreeDesc = document.createElement("p");
    mainMealThreeDesc.textContent = "Creamy arborio rice cooked with wild mushrooms and parmesan";
    const mainMealThreePrice = document.createElement("p");
    mainMealThreePrice.setAttribute("class", "price");
    mainMealThreePrice.textContent = "$13";
    const mainMealThreeImage = document.createElement("img");
    mainMealThreeImage.src = risotto;

    mainMealThree.appendChild(mainMealThreeTitle);
    mainMealThree.appendChild(mainMealThreeDesc);
    mainMealThree.appendChild(mainMealThreePrice);
    mainMealThree.appendChild(mainMealThreeImage);

    // desserts container
    const desserts = document.createElement("div");
    menu.appendChild(desserts);

    const dessertsHeadline = document.createElement("h1");
    dessertsHeadline.textContent = "Desserts";
    const dessertsMeals = document.createElement("div");
    
    desserts.appendChild(dessertsHeadline);
    desserts.appendChild(dessertsMeals);

    // dessert meals subcontainers
    const dessertMealOne = document.createElement("div");
    const dessertMealTwo = document.createElement("div");
    const dessertMealThree = document.createElement("div");

    dessertsMeals.appendChild(dessertMealOne);
    dessertsMeals.appendChild(dessertMealTwo);
    dessertsMeals.appendChild(dessertMealThree);

    // first dessert meal
    const dessertMealOneTitle = document.createElement("h2");
    dessertMealOneTitle.textContent = "Mousse";
    const dessertMealOneDesc = document.createElement("p");
    dessertMealOneDesc.textContent = "Silky dark chocolate cream with a touch of espresso for depth";
    const dessertMealOnePrice = document.createElement("p");
    dessertMealOnePrice.setAttribute("class", "price");
    dessertMealOnePrice.textContent = "$5";
    const dessertMealOneImage = document.createElement("img");
    dessertMealOneImage.src = mousse;

    dessertMealOne.appendChild(dessertMealOneTitle);
    dessertMealOne.appendChild(dessertMealOneDesc);
    dessertMealOne.appendChild(dessertMealOnePrice);
    dessertMealOne.appendChild(dessertMealOneImage);

    // second dessert meal
    const dessertMealTwoTitle = document.createElement("h2");
    dessertMealTwoTitle.textContent = "Crème Brûlée";
    const dessertMealTwoDesc = document.createElement("p");
    dessertMealTwoDesc.textContent = "Smooth vanilla custard topped with a crisp caramelized sugar crust";
    const dessertMealTwoPrice = document.createElement("p");
    dessertMealTwoPrice.setAttribute("class", "price");
    dessertMealTwoPrice.textContent = "$6";
    const dessertMealTwoImage = document.createElement("img");
    dessertMealTwoImage.src = creme_brulee;

    dessertMealTwo.appendChild(dessertMealTwoTitle);
    dessertMealTwo.appendChild(dessertMealTwoDesc);
    dessertMealTwo.appendChild(dessertMealTwoPrice);
    dessertMealTwo.appendChild(dessertMealTwoImage);

    // third dessert meal
    const dessertMealThreeTitle = document.createElement("h2");
    dessertMealThreeTitle.textContent = "Lemon Tart";
    const dessertMealThreeDesc = document.createElement("p");
    dessertMealThreeDesc.textContent = "Buttery crust filled with tangy lemon curd, garnished with fresh berries";
    const dessertMealThreePrice = document.createElement("p");
    dessertMealThreePrice.setAttribute("class", "price");
    dessertMealThreePrice.textContent = "$5";
    const dessertMealThreeImage = document.createElement("img");
    dessertMealThreeImage.src = lemon_tart;

    dessertMealThree.appendChild(dessertMealThreeTitle);
    dessertMealThree.appendChild(dessertMealThreeDesc);
    dessertMealThree.appendChild(dessertMealThreePrice);
    dessertMealThree.appendChild(dessertMealThreeImage);
}