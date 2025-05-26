function displayPoem(response) {
    let plainText = response.data.answer;
    new Typewriter("#poem", {
        strings: plainText,
        autoStart: true,
        delay: 1,
        cursor: ""
    });





}

function generatePoem(event) {
event.preventDefault();

let userInput = document.querySelector("#user-prompt");
let apiKey = "o7ae8422tbf7a3d6181c62ca5104de1d";
let prompt = `User instructions: Generate a poem about ${userInput.value}`;
let context= "You are a romantic poem expert and love to write short poems. You will always generate poems with this exact format and structure: Only generate a 4 line poem. Return it in valid HTML. Do not use <html>, <head> or <body> tags. Use exactly this structure <h1> title </h1> (same size as <p>)   <p>First line of the poem</p>   <p>Second line of the poem</p>....   <p>Fourth line of the poem</p>. Then sign the poem with SheCodes AI at the bottom of the poem with the <strong> element and always style it with the Puce colour. Do not change the layout, structure, or tag order.  Make sure to follow the user instructions."
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class = "generating"> ⏳ Generating a poem about ${userInput.value} </div>`

axios.get(apiUrl).then(displayPoem);

}

let poemFormElement= document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
