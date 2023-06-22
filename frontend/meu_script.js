const numero_moedas = 108;
const tempo_inicial = 30;
let pontos = 0;
let tempo = 0;
let timer = null; 
let nome = prompt("Qual o seu nome?");             
  

  function criarElemento(nome, pontos) {
    let container = document.getElementById("container");
    let linha = document.createElement("p");
    let nick = document.createElement("h2");
    let points = document.createElement("h2");
  
    nick.innerText = nome;
    points.innerText = pontos;
  
    container.appendChild(linha);
    linha.appendChild(nick);
    linha.appendChild(points);
  }

function iniciaJogo(){
  pontos = 0;
  tempo = tempo_inicial;
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

fetch("http://localhost:5050/score")
.then(response => {
  if (!response.ok) {
    throw new Error("Erro na requisição");
  }
  return response.json();
})
.then(data => {
  const jogadores = data;
  console.log(data);
  jogadores.forEach(jogador => {
  criarElemento(jogador.name, jogador.pontos);
  });
})
.catch(error => {
  console.error(error);
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


function salvamento(nome , pontos){
  let pontuacao = {
    nome: nome,
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
}