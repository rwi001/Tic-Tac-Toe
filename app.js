let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#rst-btn");
let newgmbtn = document.querySelector("#new-btn");
let msgcont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//player X, player O
let turn = true;
let count = 0;

// checking pattern .....
const winPattern =
[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
    [3, 4, 5],
    [6, 7, 8],
    
];

// for resetting the game state
const rstGame = () =>
{
    turn = true;
    count = 0;
    enableBoxes();
    msgcont.classList.add("hide");
};

// for checking each boxes......
boxes.forEach((box) =>{
    box.addEventListener("click", () =>
    {
        if (turn) 
        {
            box.innerText = "O";
            turn = false;
           
        } 
            
        else 
        {
            box.innerText = "X";
            turn = true;
            
        }
    box.disabled = true;   
    count++;

    let isWinner = checkWinner();
    let(count == 9 && !isWinner)
    {
        gameDraw();
    }

    });
                
});
// for game draw....
const gameDraw = () =>
{
    msgcont.innerText = "It's a draw!";
    msgcont.classList.remove("hide");
    disableBoxes();
}

//for disabling buttons after winner...
 const disableBoxes = ()=>
 {
    for(let box of boxes)
    {
        box.disabled = true;
    }
 };

 //for enabling buttons after winner...
 const enableBoxes = ()=>
    {
       for(let box of boxes)
       {
           box.disabled = false;
           box.innerText ="";
       }
    };

// for showing winner.....
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner ! is ${winner}`;
    msgcont.classList.remove("hide");
    disableBoxes();
};

// for checking winner.....
const checkWinner = () => {
    for (let pattern of winPattern)
    {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "" && val2!= "" && val3 != "")
        {
            if (val1 === val2 && val2 === val3)
            {
                showWinner(val1);
                return true;
            }
        }
    }
};

newgmbtn.addEventListener("click",rstGame);
rstbtn.addEventListener("click",rstGame);
