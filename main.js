const btn = document.querySelectorAll('.btn-pilihan')
// const rock = document.getElementById('Rock')
// const paper = document.getElementById('Paper')
// const scissors = document.getElementById('Scissors')
const restart = document.getElementById('Restart')

function getComputerChoice() {
    let randomNumber = Math.random()

    if (randomNumber < 0.33) {
        return '✊'
    } else if (randomNumber < 0.66) {
        return '✋'
    } else {
        return '✌️'
    }
}

let humanScore = 0
let computerScore = 0
const game = document.querySelector('#game')

function playRound(humanChoice, computerChoice) {
    let human = humanChoice
    let computer = computerChoice

    if (human === computer) {
        game.textContent = `Draw! both chose ${human}` 
    } else if (
        (human === '✊' && computer === '✌️') || 
        (human === '✋' && computer === '✊') || 
        (human === '✌️' && computer === '✋')
    ) {
        game.textContent = `You Win! 
        You chooose ${human}, Computer choose ${computer}
        ${human} beats ${computer}`
        
        humanScore++
    } else {
        game.textContent = `You lost! 
        You choose ${human}, Computer choose ${computer}
        ${computer} beats ${human}`
        
        computerScore++
    }
}

const human = document.querySelector('#human')
human.textContent = `You: ${humanScore}`

const computer = document.querySelector('#computer')
computer.textContent = `Computer: ${computerScore}`

btn.forEach(e => {
    e.addEventListener('click', () => { 

        if (humanScore === 10 || computerScore === 10) return

        console.log(e.id)
        let gameHumanChoice = e.id
        let gameComputerChoice = getComputerChoice()
        playRound(gameHumanChoice, gameComputerChoice) 
          
        console.log('human score', humanScore)
        console.log('computer score', computerScore)
        console.log('DISABLE', btn.disabled)
        
        human.textContent = `Player: ${humanScore}`
        computer.textContent = `Computer: ${computerScore}`

        if (humanScore === 10 || computerScore === 10) {

            btn.forEach(button => button.disabled = true)

            restart.classList.remove('hidden')
            
            if (humanScore === 10 && computerScore === 10) {
                game.textContent = 'Final result is a Draw!'
            } else if (humanScore === 10) {
                game.textContent = 'Congratulations!!! You win🎉'
            } else {
                game.textContent = 'Yeah!!! You lost the computer wins. Try again'
            }
        }
    })
});

restart.addEventListener('click', () => {
    humanScore = 0 
    computerScore = 0 

    human.textContent = `Player: ${humanScore}`
    computer.textContent = `Computer: ${computerScore}`

    game.textContent = ''

    btn.forEach(button => button.disabled = false)

    restart.classList.add('hidden')
})