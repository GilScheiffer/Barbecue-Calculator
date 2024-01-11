// variaveis
let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")
let botao = document.getElementById("botao")
let resultado = document.getElementById("result")
let limpar = document.getElementById("limpar")
// função para iniciar o calculo
function calcular() {
  let adultos = inputAdultos.value
  let criancas = inputCriancas.value
  let duracao = inputDuracao.value

  let qntcarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas
  let qntcerveja = cervejaPP(duracao) * adultos
  let qntbebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas

  resultado.innerHTML = `<p>${qntcarne/1000}Kg de Carne</p><br>`
  resultado.innerHTML += `<p>${Math.ceil(qntcerveja/390)} Latas de Cerveja</p><br>`
  resultado.innerHTML += `<p>${Math.ceil(qntbebidas/1000)}L de Bebidas</p>`
}
// função para calcular a quantidade de carne
function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}
// função para calcular a quantidade de cerveja
function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}
// função para calcular a quantidade de bebidas
function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}
// Função para limpar a div result e limpar os inputs
function limpaDiv(){
  resultado.innerHTML = ''
  inputAdultos.value = ''
  inputCriancas.value = ''
  inputDuracao.value = ''
}

// Eventos
botao.addEventListener('click',calcular)
limpar.addEventListener('click',limpaDiv)

// COMO FOI FEITO O CALCULO:
//            |
//            |
//            |
//            V
// Carne = 400g por pessoa <=> + de 6 horas = 650g
// cerveja = 1200 ml por Pessoa <=> + 6 horas = 2000ml
// refirgerante/agua = 1000ml por pessoa <=> + 6 horas = 1500ml
// crianças valem = 0,5