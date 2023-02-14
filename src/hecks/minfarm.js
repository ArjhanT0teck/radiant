// requires modified app 21 chunk

if (window['html5Iframe'] === undefined || window['html5Iframe'] === null || window['p1'] === undefined || window['p1'] === null) { // checks if lesson is open
    alert('Please open a lesson.')
} else { if (togglemin === 1 || reload === 1) { // sets min farmer and reload to enable
    togglemin = 0;
    reload = 0;
    setInterval(function () { try{html5Iframe.contentWindow.dispatchEvent(new KeyboardEvent('keydown', {'key': 'a'}));}catch(e){} }, 1000); // ;)
    alert('Enabled. Click again to disable. You will only gain minutes while inside a lesson.')
    alert("Going onto a new tab will prevent Min Farmer from working. Putting a new tab on a seperate window should solve this.")
} else { // reloads page if clicked again
    location.reload()
}
}