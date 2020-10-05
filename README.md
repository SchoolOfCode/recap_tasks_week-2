# Individual Monday Recap Tasks

## Topics to cover:

- advanced functions (callbacks, fat arrows, composition)
- array methods (map, filter, some, every)
- DOM with advanced functions and array methods
- setTimeout/setInterval
- fetch and the DOM

### Task 1

**Task 1.1** - Using the `isFirstLetter` function, the `bootcampers` array and the `.filter()` method, declare a variable `namesBeginningWithA` as an array of all of the bootcampers names which start with `'a'`.

**Task 1.2** - Write a function called `makeLegend`, which takes in a `name` (string) as its only argument. The function should return a new string which includes the name plus the words `'is now a legend.'`. For example, if the name given was 'Ben', the function would return the string `'Ben is now a legend.'`.

**Task 1.3** - Using the `.map()` method and the `makeLegend` function, create a new array which includes `'[name] is now a legend'` for each item. Save assign this new array to the variable `legendaryBootcampers`.

**Task 1.4** - If you have used the `makeLegend` function as the callback function in the map method above, refactor your code so that the `makeLegend` function is instead called inside an anonymous callback function. If you have already used an anonymous callback function, instead use the `makeLegend` function as the callback function.

### Task 2

**Task 2.1** - In the task-2 `index.html` there is a `p` tag that contains a counter. Using `setInterval`, have the counter increment once every second when the page is loaded.

**Task 2.2** - Save the above interval in a variable named `'intervalID'`

**Task 2.3** - Using `setTimeout` and `clearInterval`, stop the counter from incrementing after 12 seconds have passed.

### Task 3

**Task 3.1** - Create an image element on the task-3 `index.html`. Using `fetch`, get a random cat image URL using the following API: https://api.thecatapi.com/v1/images/search

**Task 3.2** - Once you have retrieved your image URL, display the image on the page. A different picture should be displayed every time you reload the page.

**Task 3.3** - Create a button element. Add an event listener to the button so that, when you click the button, a new image is displayed.

### Task 4

**Task 4.1** - On your HTML page you will see an input field and an 'Add To List' button. Declare a new variable, `importantThings`, as an empty array. Using JavaScript, configure the website so that when you write something in the input field and click the `Add To List` button, a new item is added to the `importantThings` array. After adding an item to the `importantThings` array, use the `.map()` method to generate an array of list items. Then create an ordered list and display it on the page. Remember to break down the task and make a plan!

**Task 4.2** - Add a new label and input field element to your `index.html` file. This input field represents the priority value of your important thing, and should be inputted as a number. Refactor your code so that, when you click your `Add To List` button, you add an object to your array, rather than a string value. For example: `let importantThings = [{text: 'telephone mother', priority: 1}]`.

**Task 4.3** - Add a new button to your site called `Order List`. Add an event listener to the button so that when it is clicked your list is re-ordered by priority, where items with the lowest number (priority: 1) are displayed first.
