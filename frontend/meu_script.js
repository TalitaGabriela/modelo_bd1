const numero_moedas = 108;
let pontos = 0;
let tempo = 10;
let timer = null;
const name = prompt("Qual seu nome?", "Escreva");

function criarElemento(nome, pontos){
  const container = document.getElementById('melhoresPontuadores');
  nome = document.createElement('p');
  pontos = document.createElement('p');

  nome.textContent = name;
  pontos.textContent = pontos(name);

  container.appendChild(nome);
  container.appendChild(pontos(nome));
}

function iniciaJogo(){
pontos = 0;
tempo = tempo;
let tela = document.getElementById("tela");
tela.innerHTML = "";

for(let i = 0; i < numero_moedas; ++i){
let moeda = document.createElement("img");
moeda.src = "doce.png";
moeda.id = "j" + i;
moeda.onclick = function(){
pegaMoeda(this);
}
tela.appendChild(moeda);
}
timer = setInterval(contaTempo,1000);
}

fetch('http://localhost:5050/score')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição'); 
      }
      return response.json();
    })
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error);
    });

function pegaMoeda(moeda){
moeda
moeda.src = "delicia.png";
++pontos;
let contadorPontos = document.getElementById("pontos");
contadorPontos.innerText = pontos;
}

function contaTempo(){
if(tempo > 0){
--tempo;
let contadorTempo = document.getElementById("tempo");
contadorTempo.innerText = tempo;

return contaTempo = null;
}

if(tempo <= 0){
clearInterval(timer);
alert("você fez"+ " " + pontos + " " + "pontos, parabéns!");
iniciaJogo();
}
}

let pontuacao = {
    name: name,
    pontos: pontos
  }

  fetch('http://localhost:5050/score', {
    method: "POST",
    body: JSON.stringify(pontuacao),
    headers: {"Content-type":"application/json; charset=UTF-8"}
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.log(error))
