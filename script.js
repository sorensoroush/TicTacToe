const cells = document.getElementsByClassName('cell')
const displayX = document.getElementById('X-display')
const displayO = document.getElementById('O-display')
const displayText = document.getElementById('text-display')
const resetButton = document.getElementById('reset')

let currentTurn = 'X'
let turnCount = 1

// These are winning combination of cell indices
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const playTurn = () => {
    // Win check
    if (turnCount >= 5) {
        // For every possible winning pattern...
        for (combo of winningCombos) {
            // ...check if all three cells' text both match and aren't blank
            if (cells[combo[0]].textContent === cells[combo[1]].textContent &&
                cells[combo[1]].textContent === cells[combo[2]].textContent &&
                cells[combo[2]].textContent === cells[combo[0]].textContent &&
                cells[combo[0]].textContent &&
                cells[combo[1]].textContent &&
                cells[combo[2]].textContent) {
                    displayText.textContent = "We have a winner!"
                    for (cell of cells) {
                        cell.removeEventListener('click', cellClick)
                    }
                    return
                }

        }
    }

    // Tie check
    if (turnCount === 9) {
        displayText.textContent = "It's a tie!"
        displayX.style.visibility = 'hidden'
        return
    }

    // Swap turn and display
    if (currentTurn === 'X') {
        displayX.style.visibility = 'hidden'
        displayO.style.visibility = 'visible'
        currentTurn = 'O'
    } else if (currentTurn === 'O') {
        displayX.style.visibility = 'visible'
        displayO.style.visibility = 'hidden'
        currentTurn = 'X'
    }
    turnCount++
}

const cellClick = e => {
    // Add span text to clicked cell and remove its event handler
    e.target.innerHTML = `<span class=${currentTurn}>${currentTurn}</span>`
    e.target.removeEventListener('click', cellClick)
    playTurn()
}

const resetBoard = () => {
    displayText.textContent = 'Current Turn'
    turnCount = 1
    currentTurn = 'X'
    displayX.style.visibility = 'visible'
    displayO.style.visibility = 'hidden'
    for (cell of cells) {
        cell.textContent = ''
        cell.addEventListener('click', cellClick)
    }
}

const gameStart = () => {
    resetBoard()
}

gameStart()

resetButton.addEventListener('click', gameStart)