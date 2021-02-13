// const selecDia = document.querySelector('.dia');
// const selecMes = document.querySelector('.mes');
// const selecAno = document.querySelector('.ano');
const date = document.querySelector('.date');
const selecSeg = document.querySelector('.seg');
const selecMin = document.querySelector('.min');
const selecHora = document.querySelector('.hr');
const tempoCono = document.querySelector('.tempo');
const bCono = document.querySelector('.bCono');
const txt = document.querySelector('.txt');
const hoje = new Date();

date.value = hoje.toISOString().substr(0, 10);//to iso formata / sub número de string entre 0-10 //qlq coisa testa console
selecSeg.value = hoje.getSeconds();
selecMin.value = hoje.getMinutes() + 10;
selecHora.value = hoje.getHours();


let intervalo;

bCono.onclick = function initCono () {
    let nome = txt.value;
    // let ano = Number(selecAno.value);
    // let mes = Number(selecMes.value) - 1;
    // let dia = Number(selecDia.value);
    let data = date.valueAsNumber;
    let hora = Number(selecHora.value) * 3600000;
    let min = Number(selecMin.value) * 60000;
    let sec = Number(selecSeg.value) * 1000;
    let fuso = 10800000; //fuso horário br -3
    let finalTempo = data + hora + min + sec + fuso;
    let agora = Date.now();
    let tempoRestante = finalTempo - agora;
    if (tempoRestante < 0) {
        alert('Insira dados corretamente');
    }
    if (nome != '') {
        // tempoCono.innerHTML = `${nome} Iniciando`;
    } else {
        alert('insira nome do bagui');
    }

    function cono () {
        tempoRestante -= 1000;
        let semana = parseInt(tempoRestante / 604800000);
        let restoSemana = tempoRestante % 604800000;
        let cronoDia = parseInt(restoSemana / 86400000);
        let restoCronoDia = restoSemana % 86400000;
        let cronoHora = parseInt(restoCronoDia / 3600000);
        let restoCronoHora = restoCronoDia % 3600000;
        let cronoMin = parseInt(restoCronoHora / 60000);
        let restCronoMin = restoCronoHora % 60000;
        let cronoSec = parseInt(restCronoMin / 1000);
        let timer = `Falta ${semana} semanas, ${cronoDia} dias, ${cronoHora} horas, ${cronoMin} minutos e ${cronoSec} segundos`;
        tempoCono.innerHTML = `O evento ${nome} termina em ${timer}`;

        if (tempoRestante <= 0) {
            clearInterval(intervalo);
        }
    }

    clearInterval(intervalo);
    intervalo = setInterval(cono, 1000);
};