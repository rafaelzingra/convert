const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const form = document.querySelector('form')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

const USD = 5.55
const EUR = 5.94
const GBP = 7.02

amount.addEventListener("input", () => {
    // console.log(amount.value)
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex,"")
})

form.onsubmit = (event) => {
    event.preventDefault()
    // console.log(currency.value)
    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, 'US$' )
            break
        case "EUR":
            convertCurrency(amount.value, EUR, 'Є')
            break
        case "GBP":
            convertCurrency(amount.value, GBP, '£' )
            break
    }
}

function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol}1 = ${formatToBRL(price)}`

        // let total = formatToCurrency(amount * price)
        // result.textContent = `${total} Reais`

        let total = formatToBRL(amount * price).replace('R$','')
        result.textContent = `${total} Reais`

        footer.classList.add('show-result')
    }catch (error){
        footer.classList.remove('show-result')
        console.log(error)
        alert("Não foi possível converter. Tente novamente mais tarde")
    }
}

function formatToBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}

// function formatToCurrency(value) {
//     return String(Number(value).toFixed(2)).replace(".",",")
// }