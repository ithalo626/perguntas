const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o principal benefício da educação ambiental?",
        alternativas: [           
            {
                texto: "Conscientização sobre a sustentabilidade.",
                afirmacao: "Você acredita que a conscientização sobre a sustentabilidade é o principal benefício da educação ambiental."
            },
            {
                texto: "Aumento da produção industrial.",
                afirmacao: "Você considera que o aumento da produção industrial não é um benefício da educação ambiental."
            }
        ]
    },
    {
        enunciado: "Como podemos economizar energia em casa?",
        alternativas: [           
            {
                texto: "Usar lâmpadas LED.",
                afirmacao: "Você acredita que usar lâmpadas LED é uma forma eficaz de economizar energia em casa."
            },
            {
                texto: "Manter aparelhos eletrônicos sempre ligados.",
                afirmacao: "Você considera que manter aparelhos eletrônicos sempre ligados não ajuda a economizar energia."
            }
        ]
    },
    {
        enunciado: "O que é uma consequência do uso excessivo de plásticos?",
        alternativas: [           
            {
                texto: "Poluição dos oceanos.",
                afirmacao: "Você reconhece que a poluição dos oceanos é uma consequência do uso excessivo de plásticos."
            },
            {
                texto: "Aumento da biodiversidade.",
                afirmacao: "Você entende que o aumento da biodiversidade não é uma consequência do uso excessivo de plásticos."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Suas ações mudam o mundo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
