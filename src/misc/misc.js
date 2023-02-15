// checks if cool menu is already open
const misccheck = document.getElementById('cool')
if (misccheck === undefined || misccheck === null) { // opens cool menu if it doesn't already exist

// drag code
function dragElement(e){var n=0,t=0,o=0,u=0;function l(e){(e=e||window.event).preventDefault(),o=e.clientX,u=e.clientY,document.onmouseup=m,document.onmousemove=d}function d(l){(l=l||window.event).preventDefault(),n=o-l.clientX,t=u-l.clientY,o=l.clientX,u=l.clientY,e.style.top=e.offsetTop-t+"px",e.style.left=e.offsetLeft-n+"px"}function m(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=l:e.onmousedown=l}

// cool menu html and css
var coolmenu = document.createElement("div");
coolmenu.innerHTML = `<div id="cool" class="cool" style="transform: translateX(0px) translateY(-32px); opacity: 0.85; font-family: sans-serif; width: 124px; height: 250px; background: rgb(30, 30, 30); position: absolute; border-radius: 5px; display: grid; place-items: center; color: white; font-size: larger; top: 104px; left: 577px; position:absolute; z-index: 99999;">
    <h1 class="title"><center>Misc</center>
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
</style>
    <button onclick="fetch('https://raw.githubusercontent.com/ArjhanT0teck/radiant/main/src/misc/cusback.js').then(r => r.text()).then(r => eval(r))" 
    class="button">Custom Background</button>

    <button onclick="fetch('https://raw.githubusercontent.com/ArjhanT0teck/radiant/main/src/misc/cheatcodes.js').then(r => r.text()).then(r => eval(r))" 
    class="button">Cheat Codes</button>
    
    <button onclick="fetch('https://raw.githubusercontent.com/ArjhanT0teck/radiant/main/src/misc/clearlocal.js').then(r => r.text()).then(r => eval(r))" 
    class="button">Clear localStorage</button>
    <br>
    <br>
    <button onclick="document.getElementById('cool').remove();" 
    class="button">Close</button>
</div>`

// specifies element to drag
dragElement(coolmenu.firstElementChild);
document.body.appendChild(coolmenu);
} else { // prevents cool menu from opening if its already open
  console.log('Misc Menu is already open.')
}
