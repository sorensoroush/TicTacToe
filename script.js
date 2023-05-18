const cells = document.getElementsByClassName('cell')
const displayX = document.getElementById('X-display')
const displayO = document.getElementById('O-display')
console.log(cells)

let currentTurn = 'X'
let turnCount = 1
const winningCombos = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

const winGame = () => {
}

const playTurn = () => {
    // Win check
    // Tie check
    if (currentTurn === 'X') {
        displayX.style.visibility = 'hidden'
        displayO.style.visibility = 'visible'
        currentTurn = 'O'
    } else if (currentTurn === 'O') {
        displayX.style.visibility = 'visible'
        displayO.style.visibility = 'hidden'
        currentTurn = 'X'
    }
    console.log(turnCount)
    turnCount++
}

const cellClick = e => {
    e.target.innerHTML = `<span class=${currentTurn}>${currentTurn}</span>`
    e.target.removeEventListener('click', cellClick)
    playTurn()
}

const resetBoard = () => {
    for (cell of cells) {
        cell.textContent = ''
        cell.addEventListener('click', cellClick)
    }
}

const gameStart = () => {
    resetBoard()
}

gameStart()