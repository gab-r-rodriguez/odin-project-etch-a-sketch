// css grid container
const container = document.querySelector(".container")

// create child divs and assign class
function createDivs (num) {
    for (let i = 0; i <= num; i++) {
        const div = document.createElement('div'); //rename?
        div.classList.add('grid-item');
        container.appendChild(div);

        // change color over div when cursor hovers
        div.addEventListener('mouseenter', () => {
            div.classList.add('grid-hover-change');})
    }
}

// add popup button asking input for number of grid rows/columns