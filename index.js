const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const finish = document.getElementById("finish")
const restart = document.getElementById("restart")
const image_gamer = document.getElementById('gamer')
const image_computer = document.getElementById('computer')
const winner = document.getElementById('winner')
const countGamer = document.getElementById('count-gamer')
const countComputer = document.getElementById('count-computer')

const rock_image = `<img id="rock" src="https://img.icons8.com/color/48/000000/hand-rock.png"/>`
const paper_image = `<img id="paper" src="https://img.icons8.com/color/48/000000/hand.png"/>`
const scissor_image = `<img id="scissor" src="https://img.icons8.com/color/48/000000/hand-scissors.png"/>`

let counterGamer = makeCounter(0)
let counterComputer = makeCounter(0)

init()

rock.addEventListener("click", () => {
    image_gamer.innerHTML = rock_image
    game("rock")
})

paper.addEventListener("click", () => {
    image_gamer.innerHTML = paper_image
    game("paper")
})

scissor.addEventListener("click", () => {
    image_gamer.innerHTML = scissor_image
    game("scissor")
})

finish.addEventListener("click", () => {
    endGame()
})

restart.addEventListener("click", () => {
    endGame()
})

function init(){
    image_gamer.classList.add('hidden')
    image_computer.classList.add('hidden')
    winner.classList.add('hidden')
    counterGamer.restart()
    counterComputer.restart()
    countGamer.innerHTML = counterGamer.getCount()
    countComputer.innerHTML = counterComputer.getCount()
}

function makeCounter(n){
    let count = n
    return{
        increase: function(){
            return ++count
        },
        getCount: function(){
            return count
        },
        restart: function(){
            count = 0
        }
    }
}

function printMessageWinner(message){
    winner.innerHTML = `<p>¡${message}!</p>`
}

function randomHand(){
    let random = Math.ceil((Math.random()) * 3)
    switch(random){
        case 1:
            image_computer.innerHTML = rock_image
            return "rock"
        case 2:
            image_computer.innerHTML = paper_image
            return "paper"
        case 3:
            image_computer.innerHTML = scissor_image
            return "scissor"
    }
}



function increase(win) {
    if (win == "gamer"){
        countGamer.innerHTML = counterGamer.increase()
    }
    else if (win == "computer"){
        countComputer.innerHTML = counterComputer.increase()
    }
}

function endGame(){
    init()
}

function game(option){
    image_gamer.classList.remove('hidden')
    image_computer.classList.remove('hidden')
    winner.classList.remove('hidden')
    let computerHand = randomHand()
    if (option === "rock"){
        switch (computerHand){
            case "rock":
                printMessageWinner("No one wins")
                break
            case "paper":
                printMessageWinner("Computer wins")
                increase("computer")
                break
            case "scissor":
                printMessageWinner("You win")
                increase("gamer")
                break
        }
    }else if (option === "paper"){
        switch (computerHand){
            case "rock":
                printMessageWinner("You win")
                increase("gamer")
                break
            case "paper":
                printMessageWinner("No one wins")
                break
            case "scissor":
                printMessageWinner("Computer wins")
                increase("computer")
                break
        }
    }else if(option === "scissor"){
        switch (computerHand){
            case "rock":
                printMessageWinner("Computer wins")
                increase("computer")
                break
            case "paper":
                printMessageWinner("You win")
                increase("gamer")
                break
            case "scissor":
                printMessageWinner("No one wins")
                break
        }
    }
}