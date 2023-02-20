// store height and width
let gridHeightAndWidth = ''

// css grid container
const container = document.querySelector(".container")

// create child divs and assign class
function createDivs(num) {
    // square height and width in for loop
    for (let i = 0; i <= (Math.pow(gridHeightAndWidth, 2) -1); i++) {
        const div = document.createElement('div'); //rename?
        div.classList.add('grid-item');
        container.appendChild(div);

        // change color of grid item when cursor hovers over it
        div.addEventListener('mouseenter', () => {
            div.classList.add('grid-hover-change');
        })
    }
}

// get height and width from user and assign to style
document.getElementById("height-and-width").onclick = () => getHeight();

function getHeight() {
    gridHeightAndWidth = prompt("Enter grid height", 16);
    document.documentElement.style.setProperty('--height-and-width', gridHeightAndWidth);
    createDivs();
}
