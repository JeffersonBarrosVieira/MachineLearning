let resultado = document.getElementById('resultado')
let btn = document.getElementById('btn')

let train = true
let geracao = 0

var rn = new RedeNeural(2, 3, 1)

let dataset = {
    inputs: [
        [1, 1], // late / é grande
        [1, 0],
        [0, 1],
        [0, 0],
        [0.5,0.5]
    ],
    outputs: [
        [1], // Cachorro
        [1], // Cachorro
        [0], // Não é um cachorro
        [0], // Não é um cachorro
        [0.8]
    ]
}

async function trainRN() {
    while (train) {
        let index = Math.floor(Math.random() * 5)
        for(let i=0; i<5; i++){
            rn.train(dataset.inputs[index], dataset.outputs[index])
        }
        // console.log(rn.error * 100)
        geracao += 1

        await desenharGrafico(geracao, rn.error * 600)

        if (rn.predict([1, 1])[0] > 0.9 &&
            rn.predict([1, 0])[0] > 0.9 &&
            rn.predict([0, 1])[0] < 0.1 && 
            rn.predict([0, 0])[0] < 0.1 &&
            rn.predict([0.5, 0.5])[0] < 0.82 && rn.predict([0.5, 0.5])[0] > 0.78) {
            train = false
            console.log(`Terminou, geração: ${geracao}`)

            console.table(rn.predict([1, 1]))
            console.table(rn.predict([1, 0]))
            console.table(rn.predict([0, 1]))
            console.table(rn.predict([0, 0]))
            console.table(rn.predict([0.5, 0.5]))
        }

        if (geracao > 100000) {
            train = false
            console.log(`Terminou ruim, geração: ${geracao}`)

            console.table(rn.predict([0, 0]))
            console.table(rn.predict([0, 1]))
            console.table(rn.predict([1, 0]))
            console.table(rn.predict([1, 1]))
            console.table(rn.predict([0.5, 0.5]))

            break
        }
    }
}

function testeRN(arr) {
    if (rn.predict(arr) > 0.8) {
        console.log("É um Cachorro")
        resultado.innerHTML = "É um Cachorro"
    } else if (rn.predict(arr) < 0.2) {
        console.log("Não é um Cachorro")
        resultado.innerHTML = "Não é um Cachorro"
    } else {
        console.log("Não identificado")
        resultado.innerHTML = "Não Identificado"
    }
}

btn.addEventListener('click', trainRN)