// Banco de dados contendo as informações de cada janela
const data = {
  autores: {
    title: "Autores",
    img: "grupo.png",
    text: `Nosso grupo formado por; Davi Mocelin, Nicolas Zaupa, Daniel Binotto, João Vitor e Miguel Rodrigues, Quatro alunos do ensino medio do colegio sao jose juntos para uma intervencao a favor das pessoas com parkingson.`
  },
  projeto: {
    title: "Projeto",
    img: "projeto.jfif",
    text: `A Pulseira Viva é uma pulseira inteligente criada para monitorar atividades relacionadas ao Parkinson e ajudar no acompanhamento das pessoas afetadas.

Futuro do Projeto:
Planejamos expandir o projeto adicionando conectividade Bluetooth para transmitir os dados coletados para smartphones, permitindo um acompanhamento mais detalhado.

Também queremos desenvolver um aplicativo que apresente gráficos e relatórios sobre a frequência e intensidade dos tremores ao longo de dias, semanas, meses e anos, facilitando o acompanhamento médico.`
  },
  producao: {
    title: "Produção",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    text: `O projeto foi produzido utilizando programação, sensores e a tecnologia Microbit para analisar movimentos e registrar informações importantes.

Desafios enfrentados:
Durante o desenvolvimento, enfrentamos desafios como calibrar a sensibilidade dos sensores para distinguir entre movimentos normais e tremores característicos do Parkinson.

Também trabalhamos em tornar o sistema o mais intuitivo possível, permitindo que qualquer pessoa possa usar o dispositivo sem conhecimentos técnicos avançados.

Além de configurar o tempo dos tremores para que não se conte um tremor como vários.

Etapas de Desenvolvimento

1. Pesquisa Inicial
Estudo aprofundado sobre a doença de Parkinson e seus sintomas motores.

2. Prototipagem
Programação e testes do micro:bit com sensores de movimento.

3. Testes Práticos
Calibração e adjustments para melhorar a precisão da detecção.

4. Documentação
Registro do processo para futura replicação.`
  },
  objetivo: {
    title: "Objetivo",
    img: "https://priscilapisoligeriatra.com.br/wp-content/uploads/2023/04/doenca-de-parkinson-causas-sintomas-tratamentos.webp",
    text: `Auxiliar pessoas com Parkinson a monitorar seus sintomas de forma simples e acessível, contribuindo para um melhor entendimento da doença.

Queremos demonstrar que jovens estudantes podem fazer a diferença na vida das pessoas através da tecnologia e inovação, criando soluções práticas para problemas reais.`
  }
}

// Função para abrir a janela com os dados certos
function openPopup(section){
  document.getElementById('popup').style.display = 'flex';
  document.getElementById('popup-title').innerText = data[section].title;
  document.getElementById('popup-text').innerText = data[section].text;
  document.getElementById('popup-img').src = data[section].img;
}

// Função para fechar a janela
function closePopup(){
  document.getElementById('popup').style.display = 'none';
}