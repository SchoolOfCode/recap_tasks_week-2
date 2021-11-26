# Recap Week 2

Use the files in each task's corresponding folder to complete the following activities.

Remember to commit often using meaningful commit messages!

## Task 1

👉 Write a function called `makeLegend`, which takes in a `name` (string) as its only argument. The function should return a new string which includes the name plus the words `'is now a legend.'`. For example, if the name given was `'Chris'`, the function would return the string `'Chris is now a legend.'`.

👉 Using an array method and the `makeLegend` function, create a new array which includes `'is now a legend'` for each item. Save this new array to the variable `legendaryCelebs`.

👉 Use an array method to produce a new array of all of the celebrity names which start with a vowel and store in a new variable called `vowelCelebs`.

## Task 2

[Click for hints if you get stuck](#hints)

👉 In the task-2 `index.html`, there is a `p` tag that contains a counter. Using `setInterval`, have the counter increment once every second when the page is loaded.

👉 Stop the above interval from incrementing after 12 seconds have passed using the [clearInterval](https://www.w3schools.com/jsref/met_win_clearinterval.asp) function

## Task 3

[Click for hints if you get stuck](#hints)

👉 Using `fetch`, get a random cat image URL using the following API: https://api.thecatapi.com/v1/images/search

👉 Once you have retrieved your image URL, display the image on the page using the `img` element provided. A different picture should be displayed every time you reload the page.

👉 Create a button element. Add an event listener to the button so that, when you click the button, a new image is displayed.

## Bonus: Task 4

👉 On your HTML page, you will see an input field and an 'Add To List' button. Declare a new variable, `importantThings`, as an empty array. Using JavaScript, configure the website so that when you write something in the input field and click the `Add To List` button, a new item is added to the `importantThings` array.

👉 As well as adding the item to the in-memory array, now display each added item in an `li` element within the ordered list.

👉 Add a new label and input field element to your `index.html` file. This input field represents the priority value of your important thing, and should take in a number. Refactor your code so that, when you click your `Add To List` button, you add an object to your array, rather than a string value. For example: `let importantThings = [{text: 'telephone mother', priority: 1}]`.

👉 Add a new button to your site called `Order List`. When the button is clicked, reorder your list by priority.

## Bonus Bonus

🎉 For the `makeLegend` function from Task 1, **refactor** it to check that you were handed a string - if you weren't, then return `'A legend requires a string'`

## Bonus Bonus Bonus

🎉 Style your pages with CSS!

## Hints

### Task 2

Think about using document.querySelector to access the p tag. How would you track the seconds?

### Task 3

Remember fetch returns you a promise. You always await a promise. To use await, you must be in an async function.

You can set the [src attribute](https://www.w3schools.com/jsref/met_win_clearinterval.asp) of the `img` just like you would set the innerText of a `p` element

You already have a function which grabs new images and updates the image shown on the page. Link this to the button through addEventListener
