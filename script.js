
const dataAtual = new Date();

const dataMaxima = new Date(dataAtual);

dataMaxima.setDate(dataMaxima.getDate() + 20);


const dataAtualFormatada = dataAtual.toISOString().split('T')[0];
const dataMaximaFormatada = dataMaxima.toISOString().split('T')[0];

// Define os valores dos atributos min e max
document.getElementById("data").setAttribute("min", dataAtualFormatada);
document.getElementById("data").setAttribute("max", dataMaximaFormatada);


// Função para criar as opções de horário
function criarOpcoesDeHorario() {
  const horarioSelect = document.getElementById("horario");
  const intervaloEmMinutos = 30;
  const horaInicial = 6;
  const horaFinal = 22;

  for (let hora = horaInicial; hora <= horaFinal; hora++) {
      for (let minuto = 0; minuto < 60; minuto += intervaloEmMinutos) {
          const horaFormatada = String(hora).padStart(2, '0');
          const minutoFormatado = String(minuto).padStart(2, '0');
          const horario = `${horaFormatada}:${minutoFormatado}`;
          const option = document.createElement("option");
          option.value = horario;
          option.text = horario;
          horarioSelect.appendChild(option);
      }
  }
}

// Chama a função para criar as opções de horário
criarOpcoesDeHorario();


var comprimentoMaximo = 35;

const resenhaUser= document.getElementsByClassName("resenhaUser");
const avaliacoes = [];

for (var i = 0; i < resenhaUser.length; i++) {
if (resenhaUser[i].textContent.length> comprimentoMaximo) {
  // Limitar o texto ao comprimento máximo
    var avaliacaoCompleta = document.  createElement('p');
    avaliacaoCompleta.textContent = resenhaUser[i].textContent;
    avaliacoes.push(avaliacaoCompleta);

    resenhaUser[i].textContent = resenhaUser[i].textContent.substring(0, comprimentoMaximo) + '...';
    avaliacaoCompleta.style.color='white';
    avaliacaoCompleta.style.fontSize='14px';
    avaliacaoCompleta.style.fontWeight='500';


}}


const card = document.getElementsByClassName("card");

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("mouseover", function() {
    if (avaliacoes[i]) {
      resenhaUser[i].textContent = ''; // Limpar o texto truncado
      resenhaUser[i].appendChild(avaliacoes[i]);
}})

card[i].addEventListener("mouseout", function() {

  resenhaUser[i].textContent = resenhaUser[i].textContent.substring(0, comprimentoMaximo) + '...';
})
}