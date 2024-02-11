
const perguntas = [
    {
      pergunta: "Qual é o maior planeta do sistema solar?",
      respostas: ["Júpiter",
                  "Marte",
                  "Vênus"
                 ],
      correta: 0
    },
    {
      pergunta: "Quem escreveu 'Dom Quixote'?",
      respostas: ["Miguel de Cervantes",
                  "William Shakespeare",
                  "Gustave Flaubert"
                 ],
      correta: 0
    },
    {
      pergunta: "Qual é o metal mais abundante na crosta terrestre?",
      respostas: ["Ferro",
                  "Alumínio",
                  "Ouro"
                 ],
      correta: 1
    },
    {
      pergunta: "Qual é o país mais populoso do mundo?",
      respostas: ["China",
                  "Índia",
                  "Estados Unidos"
                 ],
      correta: 0
    },
    {
      pergunta: "Qual é o maior oceano do mundo?",
      respostas: ["Pacífico",
                  "Atlântico",
                  "Índico"
                 ],
      correta: 0
    },
    {
      pergunta: "Quem pintou a 'Mona Lisa'?",
      respostas: ["Leonardo da Vinci",
                  "Pablo Picasso",
                  "Vincent van Gogh"
                 ],
      correta: 0
    },
    {
      pergunta: "Qual é a capital do Canadá?",
      respostas: ["Ottawa",
                  "Toronto",
                  "Montreal"
                 ],
      correta: 0
    },
    {
      pergunta: "Em que ano começou a Primeira Guerra Mundial?",
      respostas: ["1914",
                  "1918",
                  "1939"
                 ],
      correta: 0
    },
    {
      pergunta: "Quem foi o primeiro homem a pisar na lua?",
      respostas: ["Neil Armstrong",
                  "Buzz Aldrin",
                  "Yuri Gagarin"
                 ],
      correta: 0
    },
    {
      pergunta: "Qual é a capital da Austrália?",
      respostas: ["Camberra",
                  "Sydney",
                  "Melbourne"
                 ],
      correta: 0
    }
  ];
  
  
  const quiz = document.querySelector('#quiz')
  const template= document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#Acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas){
  
  //clonar as perguntas
    const quizItem = template.content.cloneNode(true)
    //aplica o conteúdo das perguntas no modelo html
    quizItem.querySelector('h3').textContent= item.pergunta
     
  //loop ou laço de repetição
  
     for(const resposta of item.respostas){
       const dt = quizItem.querySelector('dl dt').cloneNode(true)
       dt.querySelector('span').textContent = resposta
       dt.querySelector('input').setAttribute('name', "pergunta-" + perguntas.indexOf(item))
       dt.querySelector('input').value = item.respostas.indexOf(resposta)
       dt.querySelector('input').onchange = (event) => { const estaCorreta = event.target.value == item.correta
       corretas.delete(item)
          if(estaCorreta) { 
            corretas.add(item)
  
          }
  
         mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
             }
  
              
  
      quizItem.querySelector('dl').appendChild(dt)
     }
     quizItem.querySelector('dl dt').remove()
  
  
  
  
  
  
  
  
  
    quiz.appendChild(quizItem)
  }
  
    
  
    