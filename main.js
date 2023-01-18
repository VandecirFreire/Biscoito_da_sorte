const textH1 = document.querySelector('h1')
const luckButton = document.querySelector('#btn_luck')
const luckFrase = document.querySelector('p')
const mainContainer = document.querySelector('main')
const elementImg = document.createElement('img')
const buttonReset = document.createElement('button')

elementImg.src = './assets/sorte.svg'
buttonReset.classList.add('btn_reset')
buttonReset.innerHTML = 'Abrir outro biscoito'

const showLuck = () => {
  textH1.innerHTML = 'Aqui está a sua sorte de hoje:'
  luckFrase.innerHTML = RandonPhrase()
  luckFrase.classList.add('luck_frase')
  luckButton.classList.add('hide')
  createElements()
  elementImg.classList.remove('hide')
  buttonReset.classList.remove('hide')
}

const createElements = () => {
  mainContainer.appendChild(elementImg)
  mainContainer.appendChild(buttonReset)
}

const resetLuck = () => {
  buttonReset.classList.add('hide')
  luckButton.classList.remove('hide')
  elementImg.classList.add('hide')
  luckFrase.classList.remove('luck_frase')
  luckFrase.innerHTML = 'Abra o biscoito e descubra!' 
  textH1.innerHTML = 'Qual é a sua sorte de hoje?'
}

luckButton.addEventListener('click', showLuck)

buttonReset.addEventListener('click', resetLuck)


const RandonPhrase = () => {
  const phrases = ['Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.','A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Não há que ser forte. Há que ser flexível.',
  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
  'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
  'A juventude não é uma época da vida, é um estado de espírito.',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
  'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
  'Siga os bons e aprenda com eles.',
  'Não importa o tamanho da montanha, ela não pode tapar o sol.',
  'O bom-senso vale mais do que muito conhecimento.',
  'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
  'São os nossos amigos que nos ensinam as mais valiosas lições.']

  const totalPhrases = phrases.length
  const RandonPhrases = Math.floor(Math.random() * totalPhrases)
  
  return phrases[RandonPhrases]
}