
var words = "";
 function sentenceSwitch(word){
 words += word +' ';  
 document.getElementById('sentence').innerHTML = words;
 
 }
 function resetSentence(){
   words = ""
    document.getElementById("sentence").innerHTML = "";
    }