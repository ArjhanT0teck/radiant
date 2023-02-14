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

// drag gui code
function dragElement(e) {
  var n = 0,
      t = 0,
      o = 0,
      u = 0;
  function l(e) {
      (e = e || window.event).preventDefault(), (o = e.clientX), (u = e.clientY), (document.onmouseup = m), (document.onmousemove = d);
  }
  function d(l) {
      (l = l || window.event).preventDefault(), (n = o - l.clientX), (t = u - l.clientY), (o = l.clientX), (u = l.clientY), (e.style.top = e.offsetTop - t + "px"), (e.style.left = e.offsetLeft - n + "px");
  }
  function m() {
      (document.onmouseup = null), (document.onmousemove = null);
  }
  document.getElementById(e.id + "header") ? (document.getElementById(e.id + "header").onmousedown = l) : (e.onmousedown = l);
}

// gui html and css
var UI = document.createElement("div");
UI.innerHTML = `<div id="GUI" class="GUI" style="min-height: 185px; transform: translateX(0px) translateY(-32px); opacity: 0.85; font-family: sans-serif; width: 124px; height: 137px; background: rgb(30, 30, 30); position: absolute; border-radius: 5px; display: grid; place-items: center; color: white; font-size: larger; top: 104px; left: 577px; position:absolute; z-index: 99999;">
    <div class="image">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAnFBMVEVHcEx1BROwDCIRAAHTJED9DS/gByTQBR/oBSPoJkV2BxS+Bh7WCSX5CiyRDB32CCqfCh6bDiLnCSe4Bhy8Fi5aCBL0CSrLBiDcCCT7BSf5KkvrCCfkJEPaByPtDCvbIj/wCCjGBh/GFC2jBRnRIDvtJkbRByL1KEnjJUPiCynNCiTeCyj7KkzeI0DEHzn3KUrOFC//LE//DTH/BijMKnu4AAAAL3RSTlMAIEAFc/61fcHKE1iW+iP0LyjNT0gM8HOm/ffYsJ7diehmXjds0ovsu715rfqWTrD71ekAAAC6SURBVCjPtdJHDoMwFARQSijBFNM7JNR0yfb97xbFFJkiscos5y2+5DHHHQfeZbhTa7qBsaFrq1oMA0xzuYps76V4jiPMtS1LmIn0NEfQ8TJSN/QVBAXbF24NKJxfb16xpjp48HmsDoBQ35gRvSPlfBgQMgNCrSc4GKu1mxKyAIQyuwJQJmQDKPkAg+wBOinkX3DbgkzBL5MlWIo/vqKZMRBHPDOI0E7AzDFM2PQ/WA04jF56bqcd/5kvWeszmsSHzD8AAAAASUVORK5CYII=" class="center">
    <h1 class="title"><center>Radiant</center>
    </h1>
<style>
/* latin-ext */
@font-face {
  font-family: 'Libre Baskerville';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/librebaskerville/v14/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNXaxMICA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Libre Baskerville';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/librebaskerville/v14/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxM.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJbecmNE.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

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
    <button onclick="fetch('https://raw.githubusercontent.com/ArjhanT0teck/radiant/main/src/hecks/skip.js').then(r => r.text()).then(r => eval(r))"
    class="button">Skip Lesson</button>
    
    <button onclick="fetch('https://raw.githubusercontent.com/ArjhanT0teck/radiant/main/src/hecks/minfarm.js').then(r => r.text()).then(r => eval(r))" 
    class="button">Min Farmer</button>
    
    <button onclick="fetch('https://raw.githubusercontent.com/ArjhanT0teck/radiant/main/src/hecks/timer.js').then(r => r.text()).then(r => eval(r))" 
    class="button">Timer</button>
    <br>
    <br>
    <button onclick="fetch('https://raw.githubusercontent.com/ArjhanT0teck/radiant/main/src/misc/misc.js').then(r => r.text()).then(r => eval(r))" 
    class="button">Misc</button>
    <br>
    <br>
    <br>
    <br>
</div>`

// specifies element to drag
dragElement(UI.firstElementChild);
document.body.appendChild(UI);

// hide gui toggle
function hideGUI() {
  var x = document.getElementById("GUI");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyH' || event.metaKey) {
    hideGUI()
  }
});

// app 21 chunk override consts
const originalScript = "https://cdn.i-ready.com/instruction/student-dashboard/release-13.4.x/2/static/js/app-21.chunk.js";
const modifedScript = "https://raw.githubusercontent.com/ArjhanT0teck/radiant/main/src/appchunk/app-21-min.js";
const scriptLocationOnLoad = document.scripts[12].src;

// override app-21.chunk.js to add custom hooks
if (scriptLocationOnLoad == originalScript) { // checks if the script has already been loaded, if it has page gets reloaded
    try { nullifyModal("Error!", "Please run Nullify before opening lessons.", goToDashboard) } // unused as of right now
    catch (error) { alert('Please run Nullify before opening lessons. Reloading...'), location.reload() }
} else {
    // override the script
    fetch(modifedScript).then(r => r.text()).then(r => eval(r))
}
} else { // reloads i-ready if a lesson is detected
  alert('Please run Nullify before opening lessons. Reloading...'), location.reload()
}
} else { // prevents nullify from opening if it's already open
  console.log('Nullify is already open.')
}