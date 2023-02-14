// only works if modified app 21 chunk is injected into console

if (window['html5Iframe'] === undefined || window['html5Iframe'] === null || window['p1'] === undefined || window['p1'] === null) { // checks if lesson is open
    alert('Please open a lesson.')
} else { // prompts user what score they want
  alert('Make sure you farm minutes before skipping! Teachers can see how much time you spend in a lesson.')  
  var score = html5Iframe.src.split("?csid=")[1].split("&type")[0].includes("10_") && document.getElementsByTagName("iframe")[0].id != "closereading_lesson" ?prompt("What score do you want?"): alert("This doesn't work for close reading.") 
      
  if (score === undefined || score === null) { // cancels skipper if nothing is entered
    alert("Cannot be nothing.")
} else { // skips lesson with inputted score
    p1(score)
  }
}
