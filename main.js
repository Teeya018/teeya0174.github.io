var SpeechRecognition=window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
// we are creating the object of speech recognition 
function  start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
    }
recognition.onresult= function run (event) {
    console.log(event)  ;
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    //the run function is storing the results that recognized by the machine.
  speak() ;
}
    function speak(){
        var synth=window.speechSynthesis ;
        speak_data=document.getElementById("textbox").value;
        var utter_This= new SpeechSynthesisUtterance(speak_data);
        synth.speak(utter_This);
        Webcam.attach(camera);4
        //we are taking the data form the text input and the converted datat is stored in utter this variable
    }
    Webcam.set({
        width:360,
height:250,
image_format:'png',
png_quality:90
    });
    camera=document.getElementById("camera");