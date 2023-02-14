// prompts user to insert cheat code
var cheatprompt = prompt('Insert cheat code:')

if (cheatprompt === 'dig') {
    window.open('https://digsite.garoikana.repl.co/', '_blank');
} 

if (cheatprompt === 'name') {
    customName()
}

function customName() {
// prompts user with what name they want
var nameprompt = prompt('What name do you want?', '<div class="css-1ii68kw e15psnz1">Insert name here:</div>')

// replaces name
setInterval(function () { try{document.getElementById('firstname').innerHTML = nameprompt }catch(e){} }, 1);
}