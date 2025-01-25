document.getElementById("prompt").addEventListener("click", () => {
    var userInput = prompt("Do you like this car?")
    console.log(userInput)
})

document.getElementById("alert").addEventListener("click", () => {
    alert("Do you like this car?")
})

document.getElementById("confirm").addEventListener("click", () => {
    var answer = confirm("Would you like to proceed?")
    console.log(answer)
})