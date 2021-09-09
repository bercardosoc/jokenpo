const escolhaDela = document.querySelector("#yumeko")
const escolhaTua = document.querySelector("#voce")
const resultadoTela = document.querySelector("#resultado")
const escolhas = document.querySelectorAll("button")

let yumeko = ""
let voce = ""
let resultado = ""

escolhas.forEach(escolha => escolha.addEventListener("click", (e) => {
    voce = e.target.id 
    escolhaTua.innerHTML = " " + voce
    yumekoGambling()
    gambler()
    display()
}))

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
        let mary = document.createElement("img")
        mary.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnyaa.shikimori.one%2Fsystem%2Fuser_images%2Foriginal%2F644950%2F993165.jpg&f=1&nofb=1"
        document.querySelector("#last").appendChild(mary)
    }
    if (yumeko === "pedra" && voce === "papel") {
        resultado = "Você. Que tal apostar as unhas contra a Itsuki Sumeragi?" 
        let iti = document.createElement("img")
        iti.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2e%2F07%2F2a%2F2e072acc0157c122dce090c594b69e26.jpg&f=1&nofb=1"
        document.querySelector("#last").appendChild(iti)
    }
    if (yumeko === "pedra" && voce === "tesoura") {
        resultado = "Você perdeu...Já pegou seu novo crachá?"
        let cracha = document.createElement("img")
        cracha.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkakeguruimerch.com%2Fwp-content%2Fuploads%2F2021%2F01%2FAnime-Kakegurui-Compulsive-Gambler-Necklace-Jabami-Yumeko-ID-Card-Acrylic-Pendant-Necklaces-Cosplay-Jewelry-5-600x600.jpg&f=1&nofb=1"
        document.querySelector("#last").appendChild(cracha)
    }
    if (yumeko === "papel" && voce === "tesoura") {
        resultado = "Você. Que tal apostar as unhas contra a Itsuki Sumeragi?" 
        let iti = document.createElement("img")
        iti.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2e%2F07%2F2a%2F2e072acc0157c122dce090c594b69e26.jpg&f=1&nofb=1"
        document.querySelector("#last").appendChild(iti)
    }
    if (yumeko === "papel" && voce === "pedra") {
        resultado = "Você perdeu...Já pegou seu novo crachá?"
        let cracha = document.createElement("img")
        cracha.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkakeguruimerch.com%2Fwp-content%2Fuploads%2F2021%2F01%2FAnime-Kakegurui-Compulsive-Gambler-Necklace-Jabami-Yumeko-ID-Card-Acrylic-Pendant-Necklaces-Cosplay-Jewelry-5-600x600.jpg&f=1&nofb=1"
        document.querySelector("#last").appendChild(cracha)
    }
    if (yumeko === "tesoura" && voce === "pedra") {
        resultado = "Você. Que tal apostar as unhas contra a Itsuki Sumeragi?" 
        let iti = document.createElement("img")
        iti.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2e%2F07%2F2a%2F2e072acc0157c122dce090c594b69e26.jpg&f=1&nofb=1"
        document.querySelector("#last").appendChild(iti)
    }
    if (yumeko === "tesoura" && voce === "papel") {
        resultado = "Você perdeu...Já pegou seu novo crachá?"
        let cracha = document.createElement("img")
        cracha.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkakeguruimerch.com%2Fwp-content%2Fuploads%2F2021%2F01%2FAnime-Kakegurui-Compulsive-Gambler-Necklace-Jabami-Yumeko-ID-Card-Acrylic-Pendant-Necklaces-Cosplay-Jewelry-5-600x600.jpg&f=1&nofb=1"
        document.querySelector("#last").appendChild(cracha)
    }
    resultadoTela.innerHTML = " " + resultado
}
const display = () => {
    let final = document.querySelector("#bottom")
    final.style.display = "block"
}