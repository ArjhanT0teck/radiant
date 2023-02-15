if (window['html5Iframe'] === undefined || window['html5Iframe'] === null || window['p1'] === undefined || window['p1'] === null) { // checks if lesson is open
    alert('Please open a lesson.')
} else { // prompts user what score they want
  alert('Make sure you farm minutes before skipping! Teachers can see how much time you spend in a lesson.')  
  let csid= html5Iframe.src.split("?csid=")[1]
  var score = csid.includes("10_") && document.getElementsByTagName("iframe")[0].id != "closereading_lesson" ? null : prompt("Quiz detected. What score would you like (out of 100)?", 100);
  if (score === undefined || score === null && csid.includes("10_")===false) { // cancels skipper if nothing is entered
    alert("Cannot be nothing.")
} else { // skips lesson with inputted score
    p1(score)
  }
}
