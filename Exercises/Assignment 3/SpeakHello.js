// Wrap the entire contents of SpeakHello.js inside of an IIFE
// Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context

(function(window){
    var speakWord = "Hello";
    var helloSpeaker={
      speak(name){
        console.log(speakWord+" "+name);
      }
    }
    window.helloSpeaker=helloSpeaker
})(window);
