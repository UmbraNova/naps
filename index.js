import { data } from "./data.js"



const searchBtn = document.getElementById("search-btn")

searchBtn.addEventListener("click", function() {
    renderResult(document.getElementById("search-input").value.toLowerCase())
})

const searchInput = document.getElementById("search-input")
searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        renderResult(document.getElementById("search-input").value.toLowerCase())
    }
})

const mainConainer = document.getElementById("test")

function renderResult(userInput) {
    let result = ""
    for (let elem of Object.values(data)) {
        if (isInputInData(userInput, elem.tags)) {
            result += 
            `
            <h4>${elem.title}</h4>
            ${elem.instruction}
            <br>
            <hr>
            <p>${elem["last update"]}</p>
            `
        }
    }

    mainConainer.innerHTML = result
}

function isInputInData(input, tags) {
    for (let tag of tags) {
        if (input === tag) {
            return true
        }
    }
}

