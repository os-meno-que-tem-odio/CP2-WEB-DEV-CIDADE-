// Quiz de 10 perguntas em JavaScript usando prompt/confirm/alert
function startQuiz(){
  const perguntas = [
    { q: "1. Quem foi a primeira pessoa a viajar no Espaço?\na) Yuri Gagarin\nb) A cadela Laika\nc) Neil Armstrong\nd) Marcos Pontes\ne) Buzz Aldrin", a: "A" },
    { q: "2. Qual a montanha mais alta do mundo?\na) Mauna Kea\nb) Dhaulagiri\nc) Monte Chimborazo\nd) Monte Everest\ne) Pico da Neblina",a: "D"},
    { q: "3. Onde se localiza Machu Picchu?\na) Colômbia\nb) Peru\nc) China\nd) Bolívia\ne) Índia",a: "B"},
    { q: "4. Que país tem o formato de uma bota?\na) Butão\nb) Brasil\nc) Portugal\nd) Itália\ne) México",a: "D"},
    { q: "5.O que o código abaixo vai imprimir?\nprint(2 + 3 * 4)\nA) 20\nB) 14\nC) 24\nD) 9\nE) 10",a:"B"},
    { q: "Quantos continentes existem na Terra? (número)\nA)6\nB)7\nC)5\nD)8\nE)10", a: "A" },
    { q: "Em que continente fica o Egito?\nA)EUROPA\nB)AFRICA\nC)OCEANIA\nD)AMEREICA\nE)AMAZONIA", a: "B" },
    { q: "Quem escreveu 'Dom Quixote'?\nA)Miguel de cervantes\nB)Moises\nC)Leonardo da vinci\nD)Machado de assis\nE)William Shakespeare ", a: "A" },
    { q: "Qual é o maior mamífero do planeta?\nA)Baleia\nB)Elefante\nC)tigre\nD)Cachorro\nE)sua mae 😂", a: "E" },
    { q: "Em que país ficam as pirâmides de Gizé?\nA)Mexico\nB)Brasil\nC)Canada\nD)Escocia\nE)Egito", a: "E" }
  ];
  let score = 0;
  alert("Bem-vindo ao Quiz! Responda 10 perguntas. Dica: não acentue e pode usar maiúsculas/minúsculas.");
  for (let i=0;i<perguntas.length;i++){
    let resp = prompt(`(${i+1}/10) ${perguntas[i].q}`);
    if(resp===null){ if(confirm("Deseja sair do quiz?")){ alert("Quiz encerrado."); return; } resp=""; }
    resp = resp.trim().toUpperCase();
    if(resp === perguntas[i].a){ score++; alert("✔️ Correto!"); }
    else{ alert(`INCORRETO. Resposta certa: ${perguntas[i].a}`); }
  }
  alert(`Você acertou ${score} de 10.`);
}
