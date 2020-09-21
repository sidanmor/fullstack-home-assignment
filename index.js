// Useful links:
// https://stackoverflow.com/questions/15908179/draw-image-from-pixel-array-on-canvas-with-putimagedata
// https://www.w3schools.com/tags/canvas_imagedata_data.asp
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createImageData

const drawRand = ({ width, height }) => {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // first, create a new ImageData to contain our pixels
    const imgData = ctx.createImageData(width, height); // width x height
    const data = imgData.data;

    // copy img byte-per-byte into our ImageData
    for (let i = 0, len = width * height * 4; i < len; i++) {
        data[i]=Math.random() * 255;
    }

    // now we can draw our imagedata onto the canvas
    ctx.putImageData(imgData, 0, 0);
}

document.addEventListener("DOMContentLoaded", () => drawRand({ width: 550, height: 524 }));
