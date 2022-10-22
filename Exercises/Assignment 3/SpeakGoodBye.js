//Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context


(function(window){
    var speakWord = "Good Bye";
    var byeSpeaker={
      speak(name){
        console.log(speakWord+" "+name);
      }
    }
    window.byeSpeaker=byeSpeaker
  })(window);
  
  
  