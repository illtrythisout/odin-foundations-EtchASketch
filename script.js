let nGridLines = 16;
const sketchContainer = document.querySelector("#sketchContainer");
function createGrid() {
    for (let i = 0; i < (nGridLines * nGridLines); i++) {

        const pixel = document.createElement("div");
        pixel.style["flex-basis"] = (100 / nGridLines) + "%";
        pixel.style["height"] = (100 / nGridLines) + "%";
        pixel.classList.add("pixel")
        sketchContainer.appendChild(pixel);

        let pixelOpacity = 0.1;
        pixel.addEventListener("mouseover", () => {
            pixelOpacity = pixelOpacity + 0.1;
            let pixelColor = "rgba(" + 128 + ", " + 0 + ", " + 0 + ", " + pixelOpacity + ")";
            pixel.style["backgroundColor"] = pixelColor;
        })
    }
};
function delGrid() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        sketchContainer.removeChild(pixel)
    })
};

createGrid();

const gridResSlider = document.querySelector("#gridRes");
const gridResDisplay = document.querySelector("#gridResDisplay");
gridResDisplay.textContent = gridResSlider.value;
gridResSlider.oninput = function() {
    gridResDisplay.textContent = gridResSlider.value;
    delGrid();
    nGridLines = gridResSlider.value;
    createGrid();
};


