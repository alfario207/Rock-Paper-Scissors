function getComputerChoice() {
    let randomNumber = Math.random()

    if (randomNumber < 0.33) {
        return 'batu'
    } else if (randomNumber < 0.66) {
        return 'kertas'
    } else {
        return 'gunting'
    }
}

function getHumanChoice() {
    let userInput = prompt('Masukkan Pilihanmu : ')
    return userInput
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    let human = humanChoice.toLowerCase()
    let computer = computerChoice

    if (human === computer) {
        alert(`Seri! Keduanya memilih ${human}`)
    } else if (
        (human === 'batu' && computer === 'gunting') || 
        (human === 'kertas' && computer === 'batu') || 
        (human === 'gunting' && computer === 'kertas')
    ) {
        alert(`
            Kamu Menang!
            kamu memilih ${human}, komputer memilih ${computer}
            ${human} mengalahkan ${computer}
        `)
        humanScore++
    } else {
        alert(`
            Kamu Kalah!
            kamu memilih ${human}, komputer memilih ${computer}
            ${computer} mengalahkan ${human}    
        `)
        computerScore++
    }
}

function playGame() {
    const round = 10

    for (let i = 0; i < round; i++) {
        let gameHumanChoice = getHumanChoice()
        let gameComputerChoice = getComputerChoice()
        playRound(gameHumanChoice, gameComputerChoice)
    }

    alert(`
        SKOR AKHIR
        kamu : ${humanScore}
        komputer : ${computerScore}
    `)
}

alert('GAME DIMULAI')

playGame()

if (humanScore > computerScore) {
    alert('Selamat!!! kamu menang🎉')
} else if (computerScore > humanScore) {
    alert('Yahh!!! kamu kalah. Coba lagi🤖')
} else {
    alert('Hasil akhir Seri!!!')
}

alert('GAME BERAKHIR')