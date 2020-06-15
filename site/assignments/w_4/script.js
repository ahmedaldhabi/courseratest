(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var nl = 10;
for (var i = 0; i < nl; i++) {
	var name = names[i];
  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    byeSpeaker.speak(name);
  } else {
    helloSpeaker.speak(name);
  }
}
})();
