var reset = "";
var words = "";
 function sentenceSwitch(word){
 words += word +' ';  
 document.getElementById('sentence').innerHTML = words;
 
 }
 function resetSentence(clear){
 words += reset+' '; 
 location.reload()
 document.getElementById('sentence').innerHTML = reset;
 
 }