const nullcheck = document.getElementById('GUI')
if (nullcheck === undefined || nullcheck === null) { // checks if nullify is already open

    // sets min farmer to disable on startup
    togglemin = 1;

    // sets timer to disable on startup
    toggletime = 1;

    // sets reload to disable on startup
    reload = 1;

    // checks if a lesson is open
    if (window['html5Iframe'] === undefined || window['html5Iframe'] === null) {

        // drag gui code, dont't bother trying to decipher it lmao
        function dragElement(e) {
            var n = 0,
                t = 0,
                o = 0,
                u = 0;

            function l(e) {
                (e = e || window.event).preventDefault(), o = e.clientX, u = e.clientY, document.onmouseup = m, document.onmousemove = d
            }

            function d(l) {
                (l = l || window.event).preventDefault(), n = o - l.clientX, t = u - l.clientY, o = l.clientX, u = l.clientY, e.style.top = e.offsetTop - t + "px", e.style.left = e.offsetLeft - n + "px"
            }

            function m() {
                document.onmouseup = null, document.onmousemove = null
            }
            document.getElementById(e.id + "header") ? document.getElementById(e.id + "header").onmousedown = l : e.onmousedown = l
        }

        // gui html and css
        var UI = document.createElement("div");
        UI.innerHTML = `<div id="GUI" class="GUI" style="min-height: 180px; transform: translateX(0px) translateY(-32px); opacity: 0.85; font-family: sans-serif; width: 124px; height: 137px; background: rgb(30, 30, 30); position: absolute; border-radius: 5px; display: grid; place-items: center; color: white; font-size: larger; top: 104px; left: 577px; position:absolute; z-index: 99999;">
    <div class="image">
    <img src="https://media.discordapp.net/attachments/1051299403270475776/1074458354887438356/68747470733a2f2f63646e2e676c697463682e6d652f33666662323530642d313765642d343035392d393666362d6236333130356339373636342f6c6f676f2e706e67.png" style="width:24px; height:24px;" class="center">
    <h1 class="title"><center>JMenu</center>
    </h1>
<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Poppins&display=swap");

.title {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    padding: 5px;
}
.button {
  font-family: "Poppins", sans-serif;
  border: none;
  color: white;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  width: 100%;
  text-align: center;
  background-color: rgb(30,30,30);
}
.button:hover {
  background-color: rgb(50,50,50);
}
.button:active {
  opacity: 0;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
    <button onclick="skip()" class="button">Skip Lesson</button>
    
    <button onclick="minfarm()" class="button">Min Farmer</button>
    
    <button onclick="timer()" 
    class="button">Timer</button>
    <br>
    <br>
    <button onclick="misc()" 
    class="button">Misc</button>
    <br>
    <br>
    <br>
    <br>
</div>`

        // specifies element to drag
        dragElement(UI.firstElementChild);
        document.body.appendChild(UI);

        // hides gui
        function hideGui() {
            var x = document.getElementById("GUI");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }

        document.addEventListener('keydown', function(event) {
            if (event.code == 'KeyH' || event.metaKey) {
                hideGui()
            }
        });

        // app 21 chunk override
        const originalScript = "https://cdn.i-ready.com/instruction/student-dashboard/release-13.4.x/2/static/js/app-21.chunk.js";
        const modifedScript = "https://raw.githubusercontent.com/notplu/Nullify/main/Data/appchunk/app-21.chunk.js";
        const scriptLocationOnLoad = document.scripts[12].src;

        // override app-21.chunk.js to add custom hooks
        if (scriptLocationOnLoad == originalScript) { // checks if the script has already been loaded, if it has page gets reloaded
            try {
                nullifyModal("Error!", "Please run Nullify before opening lessons.", goToDashboard)
            } // unused as of right now
            catch (error) {
                alert('Please run Nullify before opening lessons. Reloading...'), location.reload()
            }
        } else {
            //override the script
            fetch(modifedScript).then(r => r.text()).then(r => eval(r))
        }
    } else { // reloads i-ready if a lesson is detected
        alert('Please run Nullify before opening lessons. Reloading...'), location.reload()
    }
} else { // prevents nullify from opening if it's already open
    console.log('Nullify is already open.')
}



// Hacks, putting here so its faster

// checks if diag is open
function diag() {
    alert("Doesn't work all the time. please still answer questions normally.")
    if (window['diagnosticIFrame'] === undefined || window['diagnosticIFrame'] === null) {
        alert('Please open your Diagnostic or Growth Check.')
    } else {
        if (diag === 1) {
            diag = 0;
            var duration = 1000;

            // hijacks XMLHttpRequest.send() to modify requests
            XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.send = function(body) {
                // modifies inputted request
                let newBody = JSON.parse(body);
                if (newBody.correct == false) newBody.correct = true;
                if (newBody.durationSeconds != undefined) newBody.durationSeconds = duration;

                // sends modified request
                this.realSend(JSON.stringify(newBody));
            }

            alert("Enabled. All answers inputted in the Diagnostic will be correct. Click again to disable. Once you disable any previous answers should remain correct.");
            alert("Diagnostic Hack is very experimental. It will likely not work so proceed at your own risk.");
            alert("Don't finish your Diagnostic too quickly or it will be marked as rushed.");
        } else {
            diag = 1;
            // disables hack
            XMLHttpRequest.prototype.send = XMLHttpRequest.prototype.realSend;
            XMLHttpRequest.prototype.realSend = undefined;
            alert("Disabled.")
        }
    }
}

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

function minfarm() {
    // requires modified app 21 chunk

    // checks if lesson is open
    if (window['html5Iframe'] === undefined || window['html5Iframe'] === null || window['p1'] === undefined || window['p1'] === null) {
        alert('Please open a lesson.')
    } else {
        if (togglemin === 1 || reload === 1) { // sets min farmer to enable
            togglemin = 0;
            reload = 0;
            setInterval(function() {
                html5Iframe.contentWindow.dispatchEvent(new KeyboardEvent('keydown', {
                    'key': 'a'
                }));
            }, 1000); // ;)
            alert('Enabled. Click again to disable. You will only gain minutes while inside a lesson.')
            alert("Going onto a new tab will prevent Min Farmer from working. Putting a new tab on a seperate window should solve this.")
        } else { // disables min farmer if clicked again
            location.reload()
        }

    }
}

function timer() {
    // requires modified app 21 chunk to work

    // checks if a lesson is open
    if (window['html5Iframe'] === undefined || window['html5Iframe'] === null || window['p1'] === undefined || window['p1'] === null) {
        alert('Please open a lesson.')
    } else {
        if (toggletime === 1 || reload === 1) { // sets timer to enable
            toggletime = 0;
            reload = 0;
            alert('Make sure Min Farmer is enabled before running the timer.')
            var time = prompt("How many minutes would you like to farm? You will automatically exit your current lesson once all your minutes have been farmed.")

            if (time === undefined || time === null) { // cancels timer if prompt is canceled
                alert('Timer Canceled.')
            } else {
                alert('Click Timer again anytime to disable.')
                var milli = time * 60000; // multiplies inputted mins by 60000 to convert to milliseconds
                var timer = setInterval(function() {
                    exit(), console.log('Timer ended.')
                }, milli); // exits lesson once inputted mins have passed
                setInterval(function() {
                    clearInterval(timer);
                }, milli + 1000); // stops timer interval once finished
            }
        } else { // disables timer if clicked again
            location.reload()
        }

    }
}
