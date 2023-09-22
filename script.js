let subject = "javascript";
console.log("Hello "+ subject)

let chooseColour = document.getElementById("chooseColour");
let colourBtn = document.getElementById("colourBtn");

let age = document.getElementById("age")
let testAge = document.getElementById("testAge")
let content = document.getElementById("content")

colourBtn.addEventListener("click", (e) => {
    console.log ("Klick på knapp")

    let chosenColour = chooseColour.value;
    console.log (chosenColour);
    document.body.style.backgroundColor = chosenColour;
})

testAge.addEventListener("click", (e) =>{
    let getAge = age.value
    console.log("age" + getAge)

    let yearsLeft = 18 -getAge
    

    if (getAge<18) {
        console.log("Mindre än 18");
        content.innerText = "Tyvärr, kom tillbaka om "+yearsLeft + "år!";
    } else {
        console.log("Större än 18");
        content.innerText = "Varsegod, ta en öl!";
    }
})