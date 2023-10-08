var btnTranslate = document.querySelector("#btn-text");
var txtInput = document.querySelector("#text");
var outputText = document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json"
	

function getTranslationURL(text)
{
    return serverURL + "?" + "text=" + text
}

function errorHandler(error)
{
    console.log("error occured",error)
}


function clickhandler() {
    // console.log("clicked");
    // console.log("inputo",txtInput.value);
    // outputText.innerText = "translated : " + txtInput.value;
    var inputText=txtInput.value;

    fetch (getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=>{
        var translatedText =json.contents.translated;
        outputText.innerText=translatedText;

    })
    .catch(errorHandler)

};
btnTranslate.addEventListener("click", clickhandler)