// 👉 In the task-2 `index.html`, there is a `p` tag that contains a counter. Using `setInterval`, have the counter increment once every second when the page is loaded.

// Select the p tag
const p = document.querySelector("p");
// Start a counter at 0
let counter = 0;
// Every second
const intervalID = setInterval(function () {
  //      add 1 to the counter
  counter++;
  //      update the p tag
  p.innerText = counter;
}, 1000);

// 👉 Stop the above interval from incrementing after 12 seconds have passed using the [clearInterval](https://www.w3schools.com/jsref/met_win_clearinterval.asp) function

// Wait 12 seconds
setTimeout(function () {
  // stop the interval
  //      get the interval id
  //      use clearInterval to stop it
  clearInterval(intervalID);
}, 12000);
