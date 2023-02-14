// requires modified app 21 chunk to work

// checks if a lesson is open
if (window['html5Iframe'] === undefined || window['html5Iframe'] === null || window['p1'] === undefined || window['p1'] === null) {
alert('Please open a lesson.')
} else { if (toggletime === 1 || reload === 1) { // sets timer and reload to enable
toggletime = 0;
reload = 0;
alert('Make sure Min Farmer is enabled before running the timer.')
var time = prompt("How many minutes would you like to farm? You will automatically exit your current lesson once all your minutes have been farmed.")

if (time === undefined || time === null) { // cancels timer if prompt is canceled
  alert('Timer Canceled.')
} else {
alert('Click Timer again anytime to disable.')
var milli = time * 60000; // multiplies inputted mins by 60000 to convert to milliseconds
var timer = setInterval(function () { exit(), console.log('Timer ended.') }, milli); // exits lesson once inputted mins have passed
setInterval(function () { clearInterval(timer); }, milli + 1000); // stops timer interval once finished
}
} else { // reloads page is clicked again
  location.reload()
}
}