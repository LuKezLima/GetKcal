const form = document.getElementById('form')

form.addEventListener('submit', handleSubmit
)


function handleSubmit(event) {

    event.preventDefault() // não ficar dando reload na page

    const gender = Getselectedvalue('gender')
    const age = GetInputNumberValue('age')
    const weight = GetInputNumberValue('weight')
    const height = GetInputNumberValue('height')
    const acttivy_level = Getselectedvalue("activity_level")

    const tmb = Math.round(
        gender === 'female'
            ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
            : (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
    )

    const maintenance = Math.round(tmb * Number(acttivy_level)) // Math.Round Arredonda para o numero inteiro mais perto
    const loseweight = maintenance - 450
    const gainweight = maintenance + 450

    const imc = ((weight / (Math.pow(height, 2) / 100)) * 100).toFixed(1)

    const layout = `
    <h2>Aqui está o resultado:</h2>

        <div class="result-content">
          <ul>
            <li>
              Seu metabolismo basal é de: <strong>${tmb} calorias</strong>.
            </li>
            <li>
              Seu IMC é de: <strong>${imc}</strong>.
            </li>
            <li>
              Para manter o seu peso você precisa consumir em média: <strong>${maintenance} calorias</strong>.
            </li>
            <li>
              Para perder peso você precisa consumir em média: <strong>${loseweight} calorias</strong>.
            </li>
            <li>
              Para ganhar peso você precisa consumir em média: <strong>${gainweight} calorias</strong>.
            </li>

          </ul>
    `

    const result = document.getElementById('result')


    if (weight <= 0 || height <= 0 || age <= 0) {
        alert("Campos vazios ou valores negativos")
    } else {
        result.innerHTML = layout // Atribui ao Html a variavel
    }

}

function Getselectedvalue(ide) {
    const select = document.getElementById(ide)
    return select.options[select.selectedIndex].value
}

function GetInputNumberValue(id) {
    return Number(document.getElementById(id).value) // Converte o valor inserido para NUMBER, Necessario para realizar contas
}

