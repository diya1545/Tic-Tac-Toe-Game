let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newgamebtn = document.querySelector(".new");
let msgwin = document.querySelector(".msg");
let winner = document.querySelector(".win");

let turnO = true  //playerX, playerO
let count = 0;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const disableBoxes = () => {
    for(let box of boxes ){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes ){
        box.disabled = false;
        box.innerText = "";
        count++;
    }
};

const showWinner = (winplayer) => {
    winner.innerText = `Congratulations, Winner is ${winplayer}`;
    msgwin.classList.remove("hide");
};

const checkWinner = () => {
    for (let p of winPattern) {
        // console.log(p[0], p[1], p[2]);
        // console.log(
        let pos1 = boxes[p[0]].innerText;
        let pos2 = boxes[p[1]].innerText;
        let pos3 = boxes[p[2]].innerText;

        //when to check winning condition
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner", pos1) ;
                showWinner(pos1);
                disableBoxes();
            }
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("box is clicked");
        if(turnO){  //playerO
            box.innerText = "O";
            turnO = false;
        }
        else{  //playerX
            box.innerText = "X";
            turnO = true;
        }
        // disable the box bcz it is changing on continous clicking
        box.disabled = true;
        count++;

        // check for winner or draw
        if (!checkWinner()) {
            checkDraw();
        }

        // to check the winner
        checkWinner();
    });
    
});

const checkDraw = () => {
    if(count == 9){
        winner.innerText = "Match is Draw";
        msgwin.classList.remove("hide");
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgwin.classList.add("hide");
}

newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);