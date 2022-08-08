const createBall = document.getElementById('balls-section');
function createBalls() {
  for (let index = 0; index < 6; index += 1) {
    let balls = document.createElement('div');
    balls.addEventListener('click', () => {
      verifyColor(getBalls[index].style.backgroundColor);
    });
    balls.className = 'ball';
    // balls.addEventListener('click', verifyColor(balls.style.backgroundColor));
    createBall.appendChild(balls).lastChild;
  }
}
createBalls();

// criando as cores de cada bola
function randomColor1() {
  return Math.round(Math.random() * 255);
}

function randomColor2() {
  return Math.round(Math.random() * 255);
}

function randomColor3() {
  return Math.round(Math.random() * 255);
}

const getBalls = document.querySelectorAll('div');
function backgroundColorBalls() {
  for (let index = 0; index < 6; index += 1) {
    getBalls[index].style.backgroundColor = `rgb(${randomColor1()},${randomColor2()},${randomColor3()})`;
  }
}
backgroundColorBalls();

// funcao para pegar um numero aleatorio entre 0 e 5, indicando as posicoes das bolas
function getRandomArbitrary() {
  min = Math.ceil(0);
  max = Math.floor(5);
  return Math.floor(Math.random() * (5 - 0) + 0); 
}

// a cor a ser adivinhada recebe uma cor aleatoria das cores já geradas
let colorGuess = getBalls[getRandomArbitrary()].style.backgroundColor;

const getParagrafo = document.getElementById('rgb-color');
getParagrafo.textContent = colorGuess;

function verifyColor(cor) {
  if(cor === getParagrafo.textContent){ 
    document.getElementById('answer').textContent = 'Acertou!';
  } else {
    document.getElementById('answer').textContent = 'Errou! Tente novamente!';
  }
}
/*
for (let index = 0; index < 6; index += 1) {
  getBalls[index].addEventListener('click', () => {
    verifyColor(getBalls[index].style.backgroundColor);
  });
}
*/
