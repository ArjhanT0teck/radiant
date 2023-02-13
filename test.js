function skip() {
// only works if modified app 21 chunk is injected into console
// checks if lesson is open
    if (window['html5Iframe'] === undefined || window['html5Iframe'] === null || window['p1'] === undefined || window['p1'] === null) {
        alert('Please open a lesson.')
    } else { // prompts user what score they want
      alert('Make sure you farm minutes before skipping! Teachers can see how much time you spend in a lesson.')  
      var skip = prompt('What score do you want?')
      
      // cancels skipper if nothing is entered
      if (skip === undefined || skip === null) {
        console.log('Skipper canceled.')
    } else { // skips lesson with inputted score
        p1(skip)
      }
    }
}
