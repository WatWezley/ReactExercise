import React from "react";
import '../styles/tiktaktoe.css';


let header = document.querySelector(".header")

let firstContainer = document.getElementsByClassName("table");

let firstGrid = document.getElementById("enter1");

let secondGrid = document.getElementById("enter2");

let thridGrid = document.getElementById("enter3");

let fourthGrid = document.getElementById("enter4");

let fifthGrid = document.getElementById("enter5");

let sixthGrid = document.getElementById("enter6");

let seventhGrid = document.getElementById("enter7");

let eightGrid = document.getElementById("enter8");

let ninthGrid = document.getElementById("enter9");

let replay = document.querySelector("#playAgain");

let end = document.querySelector("#exit");

function Tictactoe(){


let count = 0;

function callPlayer(){
    if(count%2 == 0){
        header.innerHTML = "player1, it is your turn"}
    if(count%2 ==1){
        header.innerHTML = "player2, it is your turn"}
        }



function display(){
    firstGrid.addEventListener("input",checkWinnings);
    secondGrid.addEventListener("input",checkWinnings);
    thridGrid.addEventListener("input",checkWinnings);
    fourthGrid.addEventListener("input",checkWinnings);
    fifthGrid.addEventListener("input",checkWinnings);
    sixthGrid.addEventListener("input",checkWinnings);
    seventhGrid.addEventListener("input",checkWinnings);
    eightGrid.addEventListener("input",checkWinnings);
    ninthGrid.addEventListener("input",checkWinnings);
}

function startGame(){
    firstContainer.disabled = false;

}

function stopGame(){
    firstContainer.disabled = true;
}

function checkWinnings(){
    if (firstGrid.value === "X" && secondGrid.value === " X" && thridGrid.value === "X"){
        header.innerHTML= "Congratulations, you are the winner";
        stopGame();
    }
    else if (firstGrid.value == "O" && secondGrid.value == "O" && thridGrid.value == "O"){
        header.innerHTML= "Congratulations, you are the winner";
        stopGame();}

    if (firstGrid.value== "X" && fifthGrid.value== "X" && ninthGrid.value == "X"){
        header.innerHTML= "Congratulations, you are the winner";
        stopGame();
    }
    else if (firstGrid.value== "O" && fifthGrid.value== "O" && ninthGrid.value == "O"){
        header.innerHTML= "Congratulations, you are the winner";
        stopGame();
    }


    if (firstGrid.value == "X" && fourthGrid.value == "X" && seventhGrid.value == "X"){
        header.innerHTML= "Congratulations, you are the winner";
        stopGame;
    }
    else if (firstGrid.value == "O" && fourthGrid.value == "O" && seventhGrid.value == "O"){
        header.innerHTML= "Congratulations, you are the winner";
        stopGame;
    }

    if (secondGrid.value == "X" && fifthGrid.value =="X" && eightGrid.value == "X"){
        header.innerHTML= "Congratulations, you are the winner";
        stopGame();
    }
    else if (secondGrid.value == "O" && fifthGrid.value =="O" && eightGrid.value == "O"){
        header.innerHTML= "Congratulations, you are the winner";
        stopGame();
    }

    if (thridGrid.value == "X" && sixthGrid.value == "X" && ninthGrid.value == "X"){ 
        header.innerHTML= "Congratulations, you are the winner";
        stopGame();
    }
    else if (thridGrid.value == "O" && sixthGrid.value == "O" && ninthGrid.value == "O"){ 
        header.innerHTML= "Congratulations, you are the winner";
        stopGame();
    }

    if (fourthGrid.value == "X" && fifthGrid.value =="X"&& sixthGrid.value == "X"){
        header.innerHTML= "Congratulations, you are the winner";
        stopGame();
    }
    else if (fourthGrid.value == "O" && fifthGrid.value =="O" && sixthGrid.value == "O"){
        header.innerHTML= "Congratulations, you are the winner";
        stopGame();
    }

    if (thridGrid.value == "X" && fifthGrid.value == "X" && seventhGrid.value == "X"){
        header.innerHTML= "Congratulations, you are the winner";
        stopGame();
    }
    else if (thridGrid.value == "O" && fifthGrid.value == "O" && seventhGrid.value == "O"){
        header.innerHTML= "Congratulations, you are the winner";
        stopGame();
    }

    if (seventhGrid.value == "X" && eightGrid.value == "X" && ninthGrid.value == "X"){
        header.innerHTML= "Congratulations, you are the winner";
        stopGame();
    }
    else if (seventhGrid.value == "O" && eightGrid.value == "O" && ninthGrid.value == "O"){
        header.innerHTML= "Congratulations, you are the winner";
        stopGame();
    }
    count++;
    }



function play(){
    startGame();
    callPlayer();
    display();
    }
   

replay.addEventListener("click",play);

return(
    <React.Fragment>
        <div class= "container">
        <center><h1 class="header">Click play to start game</h1></center>
    <center><div class="table">
        <div class="grid1">
            <input type="text" id="enter1" value="" />
        </div>
        <div class="grid2">
            <input type="text" id="enter2" value="" />
        </div>
        <div class="grid3">
            <input type="text" id="enter3" value = "" />
        </div>
        <div class="grid4">
            <input type="text" id="enter4" value ="" />
        </div>
        <div class="grid5">
            <input type="text" id="enter5" value = "" />
        </div>
        <div class="grid6">
            <input type="text" id="enter6" value="" />
        </div>
        <div class="grid7">
            <input type="text" id="enter7" value="" />
        </div>
        <div class="grid8">
            <input type="text" id="enter8" value="" />
        </div>
        <div class="grid9">
            <input type="text" id="enter9" value="" />
        </div>

    </div></center>
    <div class = "playexit">
        <input type="button" value="Play Again" id="playAgain" />
        <input type="button" value="Exit" id="exit" />
    </div>
</div>
    </React.Fragment>
)
}

export default Tictactoe;
