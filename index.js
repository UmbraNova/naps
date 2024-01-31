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

document.addEventListener("keydown", (e) => {
    if (e.key === "/") {
        searchInput.focus()
        setTimeout(() => {
            searchInput.value = ""
        }, 10)
    }
})

const mainConainer = document.getElementById("test")

function renderResult(userInput) {
    let result = ""
    for (let elem of Object.values(data)) {
        if (isInputInData(userInput, elem.tags)) {
            result += 
            // `
            // <h4>${elem.title}</h4>
            // ${elem.instruction}
            // <br>
            // <hr>
            // <p>${elem["last update"]}</p>
            // `
            `
            <div class="d-flex text-body-secondary pt-3">
            <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
            <p class="pb-3 mb-0 small lh-sm border-bottom">
              <strong class="d-block text-gray-dark">${elem.title}</strong>
              ${elem.instruction}
            </p>
            </div>
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

function renderInstruction(data) {
    for (let line of data) {
        line
    }
}

