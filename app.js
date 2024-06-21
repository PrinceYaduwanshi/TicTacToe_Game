let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX=true;
let count=0; //player O turn

const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText="X";
            turnX=false;
        }else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        count++;
        let isWinner= checkwinner();
        
        if(count ===9 && !isWinner){
        gameDraw();
        }
    });
})

const checkwinner=()=>{
    for(let pattern of winpattern){
        // box array me uss index pr check kr rhe hn
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
                return true;
            }
        }
    }
};



const gameDraw=()=>{
    msg.innerText=`Game Draw`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}

const showWinner = (winner)=>{
    msg.innerText=`Congratulations , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    document.body.style.overflow="hidden";
    disabledboxes();
}

const disabledboxes =()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const resetgame = ()=>{
    turnX=true;
    count=0;
    msgcontainer.classList.add("hide");
    enableboxes();

}

const enableboxes =()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

newGbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);