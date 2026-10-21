
let disciplinas = JSON.parse(localStorage.getItem("disciplinas")) || [];

const formularioDisciplina = document.getElementById("form-disciplina");
const campoDisciplina = document.getElementById("nome-disciplina");
const listaDisciplinas = document.getElementById("lista-disciplinas");
const totalDisciplinas = document.getElementById("totalDisciplinas");

function atualizarDisciplinas() {
    listaDisciplinas.innerHTML = "";

    disciplinas.forEach(function(nome) {
        const item = document.createElement("li");
        item.textContent = nome;
        listaDisciplinas.appendChild(item);
    });

    totalDisciplinas.textContent = disciplinas.length;

    localStorage.setItem("disciplinas", JSON.stringify(disciplinas));
}

formularioDisciplina.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nome = campoDisciplina.value.trim();

    if (nome === "") {
        return;
    }

    disciplinas.push(nome);

    atualizarDisciplinas();

    campoDisciplina.value = "";
});

atualizarDisciplinas();

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

const formularioTarefa = document.getElementById("form-tarefa");
const campoTarefa = document.getElementById("nome-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");
const totalTarefas = document.getElementById("totalTarefas");

function atualizarTarefas() {
    listaTarefas.innerHTML = "";

    tarefas.forEach(function(tarefa, indice) {
        const item = document.createElement("li");
        const caixa = document.createElement("input");
        const texto = document.createElement("span");

        caixa.type = "checkbox";
        caixa.checked = tarefa.concluida;

        texto.textContent = tarefa.nome;

        if (tarefa.concluida) {
            texto.style.textDecoration = "line-through";
        }

        caixa.addEventListener("change", function() {
            tarefas[indice].concluida = caixa.checked;
            atualizarTarefas();
        });

        item.appendChild(caixa);
        item.appendChild(texto);
        listaTarefas.appendChild(item);
    });

    const concluidas = tarefas.filter(function(tarefa) {
        return tarefa.concluida;
    }).length;

    totalTarefas.textContent = concluidas;
    
const progresso = document.getElementById("progresso");

if (progresso) {
    const porcentagem = tarefas.length === 0
        ? 0
        : Math.round((concluidas / tarefas.length) * 100);

    progresso.textContent = porcentagem + "%";
}

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

if (formularioTarefa) {
    formularioTarefa.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const nome = campoTarefa.value.trim();

        if (nome === "") {
            return;
        }

        tarefas.push({
            nome: nome,
            concluida: false
        });

        atualizarTarefas();
        campoTarefa.value = "";
    });

    atualizarTarefas();
}

let tempoRestante = 25 * 60;

let segundosEstudados = Number(localStorage.getItem("segundosEstudados")) || 0;

const visorHoras = document.getElementById("horasEstudo");

function atualizarHoras() {
    visorHoras.textContent = (segundosEstudados / 3600).toFixed(1);
}

let intervaloPomodoro = null;
let pomodoroPausado = true;

const visorPomodoro = document.getElementById("tempo");
const botaoPomodoro = document.getElementById("iniciar");
const botaoReiniciarPomodoro = document.getElementById("reiniciar");

function atualizarVisorPomodoro() {
    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;

    visorPomodoro.textContent =
        String(minutos).padStart(2, "0") + ":" +
        String(segundos).padStart(2, "0");
}

function iniciarPomodoro() {
    if (!pomodoroPausado) {
        clearInterval(intervaloPomodoro);
        pomodoroPausado = true;
        botaoPomodoro.textContent = "Continuar";
        return;
    }

    pomodoroPausado = false;
    botaoPomodoro.textContent = "Pausar";

    intervaloPomodoro = setInterval(function() {
        
if (tempoRestante > 0) {
    tempoRestante--;
    segundosEstudados++;

    localStorage.setItem("segundosEstudados", segundosEstudados);

    atualizarVisorPomodoro();
    atualizarHoras();

        } else {
            clearInterval(intervaloPomodoro);
            pomodoroPausado = true;
            botaoPomodoro.textContent = "Iniciar";
            alert("Parabéns! Você concluiu seu tempo de estudo!");
        }
    }, 1000);
}

function reiniciarPomodoro() {
    clearInterval(intervaloPomodoro);
    tempoRestante = 25 * 60;
    pomodoroPausado = true;
    botaoPomodoro.textContent = "Iniciar";
    atualizarVisorPomodoro();
}

if (visorPomodoro && botaoPomodoro) {
    atualizarVisorPomodoro();
    botaoPomodoro.addEventListener("click", iniciarPomodoro);
}

if (botaoReiniciarPomodoro) {
    botaoReiniciarPomodoro.addEventListener("click", reiniciarPomodoro);
}
function atualizarHoras() {
    if (visorHoras) {
        visorHoras.textContent = (segundosEstudados / 3600).toFixed(1);
    }
}

atualizarHoras();
