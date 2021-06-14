var canvas = document.getElementById("canvasGrafico");

let altura = 500;
let largura = 1000;

var valor;

canvas.setAttribute("width", largura)
canvas.setAttribute("height", altura)

let ctx = canvas.getContext("2d")

ctx.fillStyle = "black"
ctx.fillRect(0, 0, largura, altura)
ctx.font = "30px Courier"

function desenharEixos() {

    ctx.strokeStyle = "white"
    ctx.lineTo(0,altura/2)
    ctx.lineTo(largura,altura/2)
    ctx.lineTo(50,altura/2)
    ctx.lineTo(50,0)
    ctx.lineTo(50,altura)
    ctx.stroke()
}

desenharEixos()

async function desenharGrafico(x, y) {

    ctx.strokeStyle = "white"
    ctx.lineTo(50 +x,altura/2 - y)
    await new Promise(resolve => setTimeout(resolve, 10));
    ctx.stroke()

    // ctx.strokeStyle = "white"
    // ctx.lineTo(x,altura/2)
    // ctx.stroke()

    // ctx.fillText(valor, x, 30)
}