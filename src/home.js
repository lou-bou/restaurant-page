import restaurantImage from "./images/restaurant.png";

export function createHome() {
    const content = document.querySelector("#content");

    const home = document.createElement("div");
    home.setAttribute("id", "home");

    content.appendChild(home);

    const image = document.createElement("img");
    image.src = restaurantImage;

    const textDiv = document.createElement("div");

    home.appendChild(image);
    home.appendChild(textDiv);

    const headline = document.createElement("h1");
    headline.textContent = "Pretty Cool Restaurant";
    const subtext = document.createElement("p");
    subtext.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id tellus justo. Praesent dictum nisi quis pharetra auctor. Curabitur cursus enim a ipsum tempus, sed dignissim urna pharetra.";

    textDiv.appendChild(headline);
    textDiv.appendChild(subtext);
}