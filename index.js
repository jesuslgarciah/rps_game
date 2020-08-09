const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")

rock.addEventListener("click", () => {
    main("rock")
})

paper.addEventListener("click", () => {
    main("paper")
})

scissor.addEventListener("click", () => {
    main("scissor")
})

function main(option){
    console.log(`You: ${option}`)
    let computerHand = randomHand()
    console.log(`Computer: ${computerHand}`)
    if (option === "rock"){
        switch (computerHand){
            case "rock":
                printMessageWinner("No one wins")
                break
            case "paper":
                printMessageWinner("Computer wins")
                break
            case "scissor":
                printMessageWinner("You win")
                break
        }
    }else if (option === "paper"){
        switch (computerHand){
            case "rock":
                printMessageWinner("You win")
                break
            case "paper":
                printMessageWinner("No one wins")
                break
            case "scissor":
                printMessageWinner("Computer wins")
                break
        }
    }else if(option === "scissor"){
        switch (computerHand){
            case "rock":
                printMessageWinner("Computer wins")
                break
            case "paper":
                printMessageWinner("You win")
                break
            case "scissor":
                printMessageWinner("No one wins")
                break
        }
    }
}

function printMessageWinner(message){
    const winner = document.getElementById('winner')
    winner.innerHTML = `<label>¡${message}!</label>`
}

function randomHand(){
    const image_computer = document.getElementById('computer')
    const rock = `<img id="rock" src="https://img.icons8.com/color/48/000000/hand-rock.png"/>`
    const paper = `<img id="paper" src="https://img.icons8.com/color/48/000000/hand.png"/>`
    const scissor = `<img id="scissor" src="https://img.icons8.com/color/48/000000/hand-scissors.png"/>`
    let random = Math.ceil((Math.random()) * 3)
    switch(random){
        case 1:
            image_computer.innerHTML = (rock)
            return "rock"
        case 2:
            image_computer.innerHTML = (paper)
            return "paper"
        case 3:
            image_computer.innerHTML = (scissor)
            return "scissor"
    }
}