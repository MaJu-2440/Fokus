const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const btns = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const startPauseBtn = document.getElementById("start-pause");
const iniciarPausarBtn = document.querySelector("#start-pause span");
const timerNaTela = document.getElementById("timer");

const musica = new Audio('sons/luna-rise-part-one.mp3');
const beepAudio = new Audio('sons/beep.mp3');
const playAudio = new Audio('sons/play.wav');
const pauseAudio = new Audio('sons/pause.mp3');

let tempoDecorridoEmSegundos = 1500;
let intervaloId;

musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});


focoBtn.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500;
    alterarContexto('foco');
    focoBtn.classList.add('active');
})
curtoBtn.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300;
    alterarContexto('descanso-curto');
    curtoBtn.classList.add('active');
})
longoBtn.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900;
    alterarContexto('descanso-longo');
    longoBtn.classList.add('active');
})

function alterarContexto(contexto) {
    mostrarTempo();
    btns.forEach((contexto) => {
        contexto.classList.remove('active');
    });

    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `imagens/${contexto}.png`);
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
                `;
            break;
        
        case 'descanso-curto':
            titulo.innerHTML = `
                Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta.</strong>
            `;
            break;

        case 'descanso-longo':
            titulo.innerHTML = `
                Hora de voltar à superfície,<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `;
            break;

        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        zerar();
        beepAudio.play();
        return;
    }
    tempoDecorridoEmSegundos--;
    mostrarTempo();
}

startPauseBtn.addEventListener("click", iniciarPausar);

function iniciarPausar() {
    if (intervaloId) {
        zerar();
        pauseAudio.play();
        return;
    }
    playAudio.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    iniciarPausarBtn.textContent = "Pausar";
    iniciarPausarBtn.previousElementSibling.src = "imagens/pause.png";
}

function zerar() {
    iniciarPausarBtn.textContent = "Começar";
    iniciarPausarBtn.previousElementSibling.src = "imagens/play_arrow.png";
    clearInterval(intervaloId);
    intervaloId = null;
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleString('pt-BR', { minute: '2-digit', second: '2-digit' });
    timerNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();