<h1 align="center">Radiant</h1>
<h3 align="center">cool i-ready hack</h3>
<h2 align="center"><a href="https://discord.gg/F9DkrhpF7P">Radiant Discord</a></h2>

<p align="center">
<img src="https://res.cloudinary.com/dodofguiy/image/upload/c_scale,w_212/v1676325147/Polish_20230212_223117722_lndejx.png">
  
  

</p>
You're under no obligation to choose a license. However, without a license, the default copyright laws apply, meaning that you retain all rights to your source code and no one may reproduce, distribute, or create derivative works from your work. If you're creating an open source project, we strongly encourage you to include an open source license. The Open Source Guide provides additional guidance on choosing the correct license for your project.
<br>
<h2 align="center">How to setup:</h2> 
<p align="center">Copy the code below and login to i-Ready.<br> <br>
Do Ctrl + Shift + D, make a new bookmark and in the URL section paste the code there. Click the bookmark anytime to run the code.
</p>
<img src="https://user-images.githubusercontent.com/124912029/222979665-464b3089-86ca-4237-9c67-f891e4f02a6c.png">

```js
javascript:function skip(){if("undefined"!=typeof html5Iframe){if("one"===document.getElementById("type").value)try{lessonBridge.start(),hacks.skipper1()}catch(e){alert("This skipper is down, please use the other one while we fix it.")}else try{hacks.skipper2()}catch(o){alert("This skipper is down, please use the other one while we fix it.")}}else alert("Open lesson.")}function min(e){if(minuteFarming)hacks.pause(),minuteFarming=!1,clearInterval(afk),e.innerHTML="Farm mins",document.getElementById("mintime").innerHTML="",fetch(minL).then(e=>e.text()).then(e=>alert(`You gained ${t} minutes.`));else try{hacks.resume(),minL=html5Iframe.src.includes("math")?"https://login.i-ready.com/student/myprogress/tot/math":"https://login.i-ready.com/student/myprogress/tot/ela",goto("/student/dashboard/home"),minuteFarming=!0,fetch(minL).then(e=>e.text()).then(e=>time=Math.floor(e)),window.t=0,afk=setInterval(function(){document.getElementById("btn-footer-MY_PROGRESS").click(),document.getElementById("btn-footer-TO_DO").click(),t++,document.getElementById("mintime").innerHTML=t+" Mins"},6e4),alert('The minute farming proccess has now begun. Do not close this page. Do not turn off your computer. After you press "ok," every minute that passes will be added to your account. When you want to stop the timer and add the farmed minutes to your account, press the button labeled "Stop farming minutes". Press "ok" to begin.'),e.innerHTML="End farming"}catch(o){console.log(o),alert("Go into the lesson first!")}}function theme(){let e=document.getElementById("theme").value;if("one"===e){let o=prompt("What color i-Ready do you want?"),n=document.createElement("style");n.innerHTML=` .e1h5566o1{ background:${o}; } .eedqomz3{ background:${o}; } .embu0a00{ background:${o}; } .eedqomz1{ background:${o}; } .e1wq6qfu1{ background:${o}; } .e16nsggm1{ background:${o}; } #lesson-splash-close-button{ background:transparent; } #root{ background:${o}; } `,document.body.appendChild(n)}if("two"===e){let r=prompt("What background do you want??");localStorage.setItem("background",r)}if("three"===e){let i=prompt("What name do you want??");localStorage.setItem("name",i)}}function dragElement(e){var o=0,n=0,r=0,i=0;function a(e){e.target===e.currentTarget&&"title"!==e.currentTarget.id&&((e=e||window.event).preventDefault(),r=e.clientX,i=e.clientY,document.onmouseup=l,document.onmousemove=s)}function s(a){(a=a||window.event).preventDefault(),o=r-a.clientX,n=i-a.clientY,r=a.clientX,i=a.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-o+"px"}function l(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=a:e.onmousedown=a}window.hacks={},fetch("https://alloriginsisdown.hgocrazy.repl.co/app-24").then(e=>e.text()).then(e=>e.replaceAll("'start':function(){}",'\'start\':function(){window.hacks.skipper1=function(){_0x87a2f9.completeLessonComponent(html5Iframe.src.split("?csid=")[1].split("&type")[0],{score:Math.floor(Math.random() * (100 - 85) ) + 85})}}')).then(r=>eval(r)).then(e=>console.log("Done loading")),fetch("https://alloriginsisdown.hgocrazy.repl.co/app-21").then(e=>e.text()).then(e=>e.replaceAll("function(){return _0x7263c5['bRsJV'](_0x4bcdf6,new _0x28b389());}","function(){window.hacks.skipper2=function(score=Math.floor(Math.random() * (100 - 85) ) + 85){return _0x4bcdf6(new _0xd1fe6d(score));};window.hacks.pause=function(){var _0x2c5b64=_0x4c71c4;return _0x7263c5[_0x2c5b64(0x421)](_0x7263c5[_0x2c5b64(0x189)],_0x7263c5[_0x2c5b64(0x189)])?_0x7263c5[_0x2c5b64(0x853)](_0x4bcdf6,new _0xbae0a6()):_0x31148a&&_0x5674b7[_0x2c5b64(0x47b)]?_0x472f7b:{'default':_0x452a09};};window.hacks.resume=function(){var _0x8ad768=_0x4c71c4;return _0x7263c5[_0x8ad768(0x729)](_0x4bcdf6,new _0x325044());}}")).then(r=>eval(r)).then(e=>console.log("Done loading"));var afk,minL,time,minuteFarming,UI=document.createElement("div");function error(e){}UI.innerHTML=` <div id="raider" style="width:145px; left: 1px; top: 1px; background-color: rgba(0,0,0,0.8); color: white; outline: grey solid 1px; border-radius:5px; position:absolute; z-index: 99999;"> <center style="font-size: 32px;" id="title">RAIDƎR</center> <br> <button id="skipper" style="border-bottom: 1px solid white; border-top: 1px solid transparent; border-left: 1px solid transparent; border-right: 1px solid transparent; color:white; background-color: transparent;background-repeat: no-repeat;cursor: pointer;overflow: hidden;outline: none;" onclick="skip()">Skip</button> <select style="color:white; background-color: transparent;background-repeat: no-repeat;border-bottom: 1px solid white; border-top: 1px solid transparent; border-left: 1px solid transparent; border-right: 1px solid transparent; color:white;cursor: pointer;overflow: hidden;outline: none;" name="skip type" id="type"Type> <option style=" color:white; background-color: transparent;background-repeat: no-repeat;border-bottom: 1px solid white; border-top: 1px solid transparent; border-left: 1px solid transparent; border-right: 1px solid transparent; color:white;cursor: pointer;overflow: hidden;outline: none;" value="one">App-24</option> <option value="two">App-21</option> </select> <br> <br> <button id="farmer" style="color:white; background-color: transparent;background-repeat: no-repeat;border-bottom: 1px solid white; border-top: 1px solid transparent; border-left: 1px solid transparent; border-right: 1px solid transparent; color:white;cursor: pointer;overflow: hidden;outline: none;" onclick="min(this)">Farm Mi\x99n\x99s</button> <span id="mintime"></span> <br> <br> <button id="themer" style="color:white; background-color: transparent;background-repeat: no-repeat;border-bottom: 1px solid white; border-top: 1px solid transparent; border-left: 1px solid transparent; border-right: 1px solid transparent; color:white;cursor: pointer;overflow: hidden;outline: none;" onclick="theme()">Change</button> <select style="color:white; background-color: transparent;background-repeat: no-repeat;border-bottom: 1px solid white; border-top: 1px solid transparent; border-left: 1px solid transparent; border-right: 1px solid transparent; color:white;cursor: pointer;overflow: hidden;outline: none;" name="theme type" id="theme"Type> <option value="one">Color</option> <option value="two">Theme</option> <option value="three">Name</option> </select> <span>Error logging:<input id="error" type="checkbox" checked="checked"></span> <br> <br> </div>`,dragElement(UI.firstElementChild),document.body.appendChild(UI),setInterval(function(){try{document.getElementById("background-image").src!==localStorage.background&&void 0!==localStorage.background&&(document.getElementById("background-image").src=localStorage.background),document.getElementsByClassName("css-1ii68kw e15psnz1")[0].innerHTML!==localStorage.name&&void 0!==localStorage.name&&(document.getElementsByClassName("css-1ii68kw e15psnz1")[0].innerHTML=localStorage.name)}catch(e){}},1),window.onkeydown=function(e){"1"===e.key&&document.getElementById("skipper").click(),"2"===e.key&&document.getElementById("farmer").click(),"3"===e.key&&document.getElementById("themer").click(),"h"===e.key&&("none"===document.getElementById("raider").style.display?document.getElementById("raider").style.display="block":document.getElementById("raider").style.display="none")};
```
<p>When the menu is loaded you can press H too hide the menu and press 1 To skip 2 To farm 3 To theme.</p>
<h2>features!</h2><br>
<h3>Lesson skipper</h3>
+ You'll have the option to use 2 different variants of the lesson skipper!<br>
<h3>Minute farmer</h3>
+ An actual good minute farmer<br>
<h3>Themer</h3>
+3 ways to customize, dark mode, light mode, and everything in between. a name changer and a "themer" aka background changer<br>
<h3>Error logger</h3>
+ All this will do is detect an error in the hack and automatically send it to us. (This will be on by default but can be disabled)<br>
<h3>Key codes</h3>
+ You will be able to access all buttons using the keyboard so you **DO NOT** have to show the menu and get caught.<br>

<h2 align="center">Premium</h2>
<p align="center">Coming soon... Join our Discord for more information.</p>
