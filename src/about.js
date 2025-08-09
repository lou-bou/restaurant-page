export function createAbout() {
    const content = document.querySelector("#content");
    
    const about = document.createElement("div");
    about.setAttribute("id", "about");

    content.appendChild(about);

    // story
    const story = document.createElement("div");
    about.appendChild(story);

    const storyHeadline = document.createElement("h1");
    storyHeadline.textContent = "Our Pretty Cool Story";
    const storyDesc = document.createElement("p");
    storyDesc.textContent = "Pretty Cool Restaurant started with a pretty cool idea — make food that’s both comforting and exciting. From a single kitchen experiment to a bustling dining room, we’ve kept one thing the same: a love for flavors that make you stop mid-bite and say, “That’s pretty cool.”";

    story.appendChild(storyHeadline);
    story.appendChild(storyDesc);

    // food philosophy
    const philo = document.createElement("div");
    about.appendChild(philo);

    const philoHeadline = document.createElement("h1");
    philoHeadline.textContent = "Some Pretty Cool Philosophy"
    const philoDesc = document.createElement("p");
    philoDesc.textContent = "We believe a meal should be more than just fuel — it should be a pretty cool experience. That’s why every dish, from the rich Pepper Soup to the delicate Crème Brûlée, is crafted with care, precision, and a dash of culinary curiosity.";

    philo.appendChild(philoHeadline);
    philo.appendChild(philoDesc);

    // chef
    const chef = document.createElement("div");
    about.appendChild(chef);

    const chefHeadline = document.createElement("h1");
    chefHeadline.textContent = "Meet Our Pretty Cool Chef";
    const chefDesc = document.createElement("p");
    chefDesc.textContent = "Our pretty cool head chef has a pretty cool talent for turning familiar ingredients into unforgettable plates. Whether it’s perfectly searing the Salmon or slow-braising the Short Ribs until they melt, every step is intentional, every bite balanced.";

    chef.appendChild(chefHeadline);
    chef.appendChild(chefDesc);
}