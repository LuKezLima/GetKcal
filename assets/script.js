const form = document.getElementById('form')

form.addEventListener('submit', handleSubmit
)
function handleSubmit(event) {

    event.preventDefault() // não ficar dando reload na page

    const gender = Getselectedvalue('gender')
    const age = GetInputNumberValue('age')
    const weight = GetInputNumberValue('weight')
    const height = GetInputNumberValue('height')

    console.value(ge)
}

function Getselectedvalue(id) {
    const gender = document.getElementById('gender')
    return gender.opt

}

function GetInputNumberValue(id) {
    return Number(document.getElementById(id).value) // Converte o valor inserido para NUMBER, Necessario para realizar contas
}

