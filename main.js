

document.getElementById("Search-button").onclick = function () {
    let word = document.getElementById("word.input").value;

    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
        .then(response => response.json())
        .then(data => {
            let definicion = document.getElementById("definition");

            console.log(data);
            Object.keys(data[0].meanings.map((definitions) => {
                definitions.definitions.forEach(definition => {

                    let option = document.createElement("option");
                    option.innerHTML = definition.definition;
                    definicion.appendChild(option);
                    console.log(definition.definition);
                    
                 // document.getElementById("clave").value = definition.definition;

                });

            }));

        });

    /*  fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
           .then(response => response.json())
           .then(data => {
               console.log(data);
               Object.keys(data[0].phonetics.map((phonetics) => {
                   phonetics.phonetics.forEach(audio => {
                       console.log(audio.audio);
                       document.getElementById("audio").setAttribute("src","https:"+audio)
                   });
   
               }));
   
           });*/

}