/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputEl = document.getElementById("input-el");
const button = document.getElementById("btn");
let lenghtEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

button.addEventListener("click", function(){
    lenghtEl.textContent = ""
    volumeEl.textContent = ""
    massEl.textContent = ""

    // Length conversion
    newLength = ` ${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(2)} feet | ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(2)} meters`
    lenghtEl.textContent = newLength
    makeCopyable(lenghtEl) 

    //Volume conversion 
    newVolume = ` ${inputEl.value} liters = ${(inputEl.value * 0.264 ).toFixed(2)}  gallons | ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(2)} liters `
    volumeEl.textContent = newVolume
    makeCopyable(volumeEl) 

    //Mass conversion
    newMass = ` ${inputEl.value} kilos =  ${(inputEl.value * 2.204 ).toFixed(2)}  pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(2)}  kilos `
    massEl.textContent = newMass
    makeCopyable(massEl) 

    inputEl.value = ""
})


function makeCopyable(element){
    element.style.cursor = "pointer"
    element.addEventListener("click", async() => {
        try {
            await navigator.clipboard.writeText(element.textContent)
            alert(`Copied: "${element.textContent}" to your clipboard`)
        } catch (error) {
            console.error("failed to copy:", error)
            alert("Failed to copy text")
        }
    })
}
 

