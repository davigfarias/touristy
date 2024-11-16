const touristName = prompt('Olá! Qual seu nome? Eu tenho algumas perguntas a lhe fazer!')
alert('Ah! ' + touristName + ' muito prazer em te conhecer!')
const confirmation = confirm('Vamos as perguntas?')
let places = ['Tóquio', 'Belo Horizonte', 'Brasilia', 'Amapá', 'Rio de Janeiro', 'São Paulo', 'Curitiba']
let citiesVisited = []

if (confirmation) {
    let questions = true
    while (questions === true) {
        const randomIndex = Math.floor(Math.random() * places.length)
        const randomCity = places[randomIndex]
        questions = confirm('Você já visitou: ' + randomCity + '?')
        if (questions) {
            citiesVisited.push(randomCity)
            places.splice(randomIndex, 1)
        }

        if(places[randomIndex] === undefined) {
            alert('Nossa! Então você visitou todas as cidades que eu mencionei! Uau!')
            break
        }
    }
    alert('Nossa! Então, ' + touristName + ', você visitou ' + citiesVisited)
} else {
    alert('Ah, então você deve estar sem tempo. Foi mal...')
}
