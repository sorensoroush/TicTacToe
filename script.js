const cells = document.getElementsByClassName('cell')
console.log(cells)

let currentTurn = 'X'
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

const cellClick = e => {
    e.target.innerHTML = `<span class=${currentTurn}>${currentTurn}</span>`
    e.target.removeEventListener('click', cellClick)
}

const playTurn = () => {
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