class cheats {
    static name = function() {
        // prompts user with what name they want
        var nameprompt = prompt('What name do you want?', '<div class="css-1ii68kw e15psnz1">Insert name here:</div>')

        // replaces name
        setInterval(function() {
            try {
                document.getElementById('firstname').innerHTML = nameprompt
            } catch (e) {}
        }, 1);
    }
    static dig = function() {
        window.open('https://digsite.garoikana.repl.co/', '_blank');
    }
    static coins = function() {
        let e=prompt('How many coins do you want?')
        localStorage.setItem('coins',parseInt(e))
    }
}
let p = prompt("Enter cheat code here:");
if (typeof cheats[p] !== "undefined") {
    cheats[p]()
} else alert("Cheat doesn't exist")
