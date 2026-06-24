async function translateText() {

    let text = document.getElementById("inputText").value;

    let source = document.getElementById("sourceLanguage").value;

    let target = document.getElementById("targetLanguage").value;


    if (text.trim() === "") {
        alert("Please enter text");
        return;
    }


    let url =
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${source}&tl=${target}&dt=t&q=${encodeURIComponent(text)}`;


    try {

        let response = await fetch(url);

        let data = await response.json();


        let translatedText = data[0]
            .map(item => item[0])
            .join("");


        document.getElementById("outputText").value = translatedText;


    }

    catch(error) {

        console.log(error);

        alert("Translation failed");

    }

}



function copyText(){

    let text =
    document.getElementById("outputText").value;


    navigator.clipboard.writeText(text);


    alert("Copied!");

}