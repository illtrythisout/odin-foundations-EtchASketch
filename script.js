// Create the boxes
    // Create a variable labeled nGridLines
    // Make a reference to the sketchContainer div in the html
    // Create a for loop that creates (nGridLines) squared amount of divs inside the sketchContainer

let nGridLines = 16;

const sketchContainer = document.querySelector("#sketchContainer");
for (i = 0; i < (nGridLines * nGridLines); i++) {

    const pixel = document.createElement("div");
    pixel.style["flex-basis"] = (100 / nGridLines) + "%";
    pixel.style["height"] = (100 / nGridLines) + "%";
    pixel.classList.add("pixel")
    sketchContainer.appendChild(pixel);

    let pixelOpacity = 0.1;
    pixel.addEventListener("mouseover", () => {
        pixelOpacity = pixelOpacity + 0.1;
        let pixelColor = "rgb(" + 128 + ", " + 0 + ", " + 0 + ", " + pixelOpacity + ")";
        pixel.style["backgroundColor"] = pixelColor;
    });
}