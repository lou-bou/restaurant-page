import restaurantImage from "./images/restaurant.png";

export function createHome() {
    const content = document.querySelector("#content");

    const image = document.createElement("img");
    image.src = restaurantImage;
    const headline = document.createElement("h1");
    headline.textContent = "Pretty Cool Restaurant";
    const subtext = document.createElement("p");
    subtext.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id tellus justo. Praesent dictum nisi quis pharetra auctor. Curabitur cursus enim a ipsum tempus, sed dignissim urna pharetra.";

    content.appendChild(image);
    content.appendChild(headline);
    content.appendChild(subtext);
}