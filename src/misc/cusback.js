// prompts user with image address, replaces img src with inputted image address
var CustomImage = prompt('Paste your custom image address here: (Recommended dimensions are '+innerWidth+' x '+innerHeight+')')
    localStorage.setItem('background',CustomImage)

if (CustomImage === undefined || CustomImage === null) { // reloads i-ready if prompt is canceled
  location.reload()
}
