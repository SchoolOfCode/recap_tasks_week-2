// 👉 On your HTML page, you will see an input field and an 'Add To List' button. Declare a new variable, `importantThings`, as an empty array. Using JavaScript, configure the website so that when you write something in the input field and click the `Add To List` button, a new item is added to the `importantThings` array.
// Select the text input field
const inputField = document.querySelector("#important-thing");
// Select the priority input
const priorityField = document.querySelector("#priority");
// Select the add to list button
const addButton = document.querySelector("#add-to-list");
// Select the order list button
const orderButton = document.querySelector("#order-list");

// Create the array
const importantThings = [];

// When there is a click on the add to list button
addButton.addEventListener("click", addItemToList);

function addItemToList() {
  // Get the content of the fields and put into an object
  const newItem = {
    text: inputField.value,
    // turn the priority value into a number
    priority: Number(priorityField.value)
  };
  // Add it to the array
  importantThings.push(newItem);
  // Check it worked
  console.log(importantThings);
  // Redraw the list on the dom
  redrawList();
}

// 👉 As well as adding the item to the in-memory array, now display each added item in an `li` element within the ordered list.

// Select the ordered list
const ol = document.querySelector("ol");

function redrawList() {
  // Clear the list
  ol.innerHTML = "";
  // For each item in the array, add a list item to the DOM
  importantThings.forEach(addItemToDOM);
}

function addItemToDOM(item) {
  //      create a li
  const li = document.createElement("li");
  //      set the text to be the array item
  li.innerText = `${item.text} - priority ${item.priority}`;
  //      add it to the list
  ol.appendChild(li);
}

// 👉 Add a new label and input field element to your `index.html` file. This input field represents the priority value of your important thing, and should take in a number. Refactor your code so that, when you click your `Add To List` button, you add an object to your array, rather than a string value. For example: `let importantThings = [{text: 'telephone mother', priority: 1}]`.
// Worked into the existing code

// 👉 Add a new button to your site called `Order List`. When the button is clicked, reorder your list by priority.
// When a click happens on the order button, sort the array by priority
orderButton.addEventListener("click", function () {
  // sort the array by priority order
  importantThings.sort(function sortByPriority(a, b) {
    // return a negative number if a is bigger than b
    // return a positive number if b is bigger than a
    // return 0 if they are the same
    return b.priority - a.priority;
  });
  // redraw the list
  redrawList();
});
