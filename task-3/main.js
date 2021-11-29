// 👉 Using `fetch`, get a random cat image URL using the following API: https://api.thecatapi.com/v1/images/search

async function grabImage() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();
  const url = data[0].url;
  // 👉 Once you have retrieved your image URL, display the image on the page using the `img` element provided. A different picture should be displayed every time you reload the page.
  // Get the img tag
  const img = document.querySelector("img");
  // Set the src of the img to be the url from the api
  img.src = url;
}

grabImage();

// 👉 Create a button element. Add an event listener to the button so that, when you click the button, a new image is displayed.
// Create a button
const button = document.createElement("button");
// Set the text to be "Grab New Cat"
button.innerText = "Grab New Cat";
// Add the button to the page
document.body.appendChild(button);
// Listen for the click event
// on a click, grab a new image
button.addEventListener("click", grabImage);
