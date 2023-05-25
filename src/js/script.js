const horas = document.getElementById("hrs");
const minutos = document.getElementById("min");
const segundos = document.getElementById("sec");

setInterval(() => {
    // Obtém a hora atual
    var dataAtual = new Date();

    // Extrai as horas, minutos e segundos da hora atual
    var hr = dataAtual.getHours();
    var min = dataAtual.getMinutes();
    var seg = dataAtual.getSeconds();

    // Formatação para sempre exibir dois dígitos mesmo que os valores sejam menores que 10
    if (hr < 10) {
        hr = '0' + hr;
    }

    if (min < 10) {
        min = '0' + min;
    }

    if (seg < 10) {
        seg = '0' + seg;
    }

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
});