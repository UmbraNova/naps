import { data } from "./data.js"


const searchBtn = document.getElementById("search-btn")
const addBtn = document.getElementById("add-btn")
const addWindow = document.getElementById("add-window")

addBtn.addEventListener("click", function() {

})

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
            const color = Math.floor(Math.random()*16777215).toString(16)
            result += 
            `
            <div class="d-flex text-body-secondary pt-3">
            <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#${color}"></rect><text x="50%" y="50%" fill="#${color}" dy=".3em">32x32</text></svg>
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

