//checks if diagnostic hack is enabled
if (!!XMLHttpRequest.prototype.realSend) {
  // disables hack
  XMLHttpRequest.prototype.send = XMLHttpRequest.prototype.realSend;
  XMLHttpRequest.prototype.realSend = undefined;
  alert("Hack was disabled.")
  buttonId.innerText = "Enable hack";
} else {
  // checks if diagnostic is open
  if (typeof diagnosticIFrame == "undefined") {
    alert("Diagnostic not detected. Open the diagnostic first to use the hack.")
  } else if (!XMLHttpRequest.prototype.realSend) {
    var duration = 1000;

    // hijacks XMLHttpRequest.send() to modify requests
    XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function(body) {
      // modifies inputted request
      newBody = JSON.parse(body);
      if (newBody.correct == false) newBody.correct = true;
      if (newBody.durationSeconds != undefined) newBody.durationSeconds = duration;

      // sends actual request
      this.realSend(JSON.stringify(newBody));
    }
    alert("Hack was enabled. All answers inputted in diagnostic will be correct. Please do not answer questions too fast or your test will be marked as rushed.");
    buttonId.innerText = "Disable hack";
  }
}
