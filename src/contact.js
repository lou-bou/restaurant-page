export function createContact() {
    const content = document.querySelector("#content");

    const contact = document.createElement("div");
    contact.setAttribute("id", "contact");

    content.appendChild(contact);

    // address
    const address = document.createElement("div");
    contact.appendChild(address);

    const addressHeadline = document.createElement("h1");
    addressHeadline.textContent = "Our Pretty Cool Location";
    const addressDesc = document.createElement("p");
    addressDesc.textContent = "42 Imaginary Avenue, Nowhere City, Pretty Cool Country";

    address.appendChild(addressHeadline);
    address.appendChild(addressDesc);

    // Phone
    const phone = document.createElement("div");
    contact.appendChild(phone);

    const phoneHeadline = document.createElement("h1");
    phoneHeadline.textContent = "Phone (pretty cool)";
    const phoneDesc = document.createElement("p");
    phoneDesc.textContent = "(555) 123-4567";

    phone.appendChild(phoneHeadline);
    phone.appendChild(phoneDesc);

    // Email
    const email = document.createElement("div");
    contact.appendChild(email);

    const emailHeadline = document.createElement("h1");
    emailHeadline.textContent = "Email (pretty cool too)"; // im starting to regret the pretty cool thing
    const emailDesc = document.createElement("p");
    emailDesc.textContent = "hello@prettycoolrestaurant.com";

    email.appendChild(emailHeadline);
    email.appendChild(emailDesc);
}