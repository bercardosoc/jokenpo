const escolhaDela = document.querySelector("#yumeko")
const escolhaTua = document.querySelector("#voce")
const resultadoTela = document.querySelector("#resultado")
const escolhas = document.querySelectorAll("button")

let yumeko = ""
let voce = ""
let resultado = ""

escolhas.forEach(escolha => escolha.addEventListener("click", () => {
    voce = e.target.id 
    escolhaTua.innerHTML = " " + você
}) )

const yumekoGambling = () => {
    const random = Math.floor(Math.random(1) * 3) + 1

    if (random === 1) {
        yumeko = "pedra"
    }
    if (random === 2) {
        yumeko = "papel"
    }
    if (random === 3) {
        yumeko = "tesoura"
    }
    escolhaDela.innerHTML = " " + yumeko
}

const gambler = () => {
    if (yumeko === voce) {
        resultado = "Ninguém...da próxima vez tente contra a Mary Saotome" 
    }
    if (yumeko === "pedra" && voce === "papel") {
        resultado = "Você. O que acha de jogar contra a Itsuki Sumeragi?" 
    }
    if (yumeko === "pedra" && voce === "papel") {
        resultado = "Você perdeu...Já pegou seu novo crachá?"
    }
    if (yumeko === "papel" && voce === "tesoura") {
        resultado = "Você. O que acha de jogar contra a Itsuki Sumeragi?"
    }
    if (yumeko === "papel" && voce === "pedra") {
        resultado = "Você perdeu...Já pegou seu novo crachá?"
    }
    if (yumeko === "tesoura" && voce === "pedra") {
        resultado = "Você. O que acha de jogar contra a Itsuki Sumeragi?"
    }
    if (yumeko === "tesoura" && voce === "papel") {
        resultado = "Você perdeu...Já pegou seu novo crachá?"
    }
    resultadoTela.innerHTML = " " + resultado
}