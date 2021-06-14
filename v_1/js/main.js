const net = new brain.NeuralNetwork({
    hiddenLayers: [4, 4]
})

const data = [
    {"input":{"r":0,"g":0,"b":0},"output":[0.1666666666]},
    {"input":{"r":0.5,"g":0.5,"b":0.5},"output":[0.5]},
    {"input":{"r":1,"g":1,"b":1},"output":[0.8333333333]}
]


net.train(data)

const colorE1 = document.getElementById('color')
const guessE1 = document.getElementById('guess')
const whiteButton = document.getElementById('white-button')
const grayButton = document.getElementById('gray-button')
const blackButton = document.getElementById('black-button')
const printButton = document.getElementById('print-button')

let color
setRandomColor()
whiteButton
whiteButton.addEventListener('click', () => {
    chooseColor(0.1666666666)
})

grayButton.addEventListener('click', () => {
    chooseColor(0.5)
})

blackButton.addEventListener('click', () => {
    chooseColor(0.8333333333)
})

function chooseColor(value) {
    data.push({
        input: color,
        output: [value]
    })
    setRandomColor()
}

printButton.addEventListener('click', () => {
    print()
})

function print() {
    console.log(JSON.stringify(data))
}

function setRandomColor() {
    color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
    }

    const guess = net.run(color)[0]
    console.log(guess)

    guessE1.style.color = guess > .66 ? 'rgba(0,0,0,1)' : guess > .33 ? 'rgba(127.5,127.5,127.5,1)' : 'rgba(255,255,255,1)'

    // let teste = 0.7;
    // console.log(teste > .66 ? 'rgba(0,0,0,0)' : teste > .33 ? 'rgba(127.5,127.5,127.5,1)' : 'rgba(255,255,255,1)')

    colorE1.style.backgroundColor = 
        `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255}, 1)`
}