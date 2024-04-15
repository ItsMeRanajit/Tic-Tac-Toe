//    _0_|_1_|_2_
//    _3_|_4_|_5_
//     6 | 7 | 8
// logic - there are few indeces for each box.
//for horizontal win 012 / 345 / 6,7,8 Has to match
//for vertical win 036/147/258 has to match
//for corner win 048/246 has to match
//that will be the logic of our winning and the prgm
//we will use 2d array here
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector(".msg");
let audio = document.querySelector("#put");
let play = document.querySelector("#win");
let eq = document.querySelector("#draw");
let on = document.querySelector(".game");
let temp;

let turn = true;
let turn0 = turn; //to track whos turn is this if it is O's then val is ture else false
let count = 0;

//2d array
// let arr = [
//   ["1", "2"],
//   ["3", "4"],
//   ["5", "6"],
// ];
//this is our 2d array where each nested array is a row
//console.log(arr)
//console.log(arr[0][0]) -- accessing each element of the 2d array
const win_ptrn = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// console.log(boxes);
if (turn == true) {
  msg.innerText = "⭕'s Turn";
  msg.classList.add("openmsg");
} else {
  msg.innerText = "✖️'s Turn";
  msg.classList.add("openmsg");
}
boxes.forEach((b) => {
  b.addEventListener("click", () => {
    audio.play();
    msg.classList.remove("openmsg");
    // console.log("box is clicked");
    if (turn0 === true) {
      //player o
      b.innerText = "⭕";
      turn0 = false;
    } else {
      b.innerText = "✖️"; //player x
      turn0 = true;
    }
    b.disabled = true; //this disabled the operations on the box
    count++;
    b.classList.remove("box2");
    // b.classList.add("box3");
    //these are two methods if removing the hover property after clicked once
    checkwinner();
    draw();
  });
});
const checkwinner = () => {
  for (let i of win_ptrn) {
    // console.log(i[0], i[1], i[2]);
    // console.log(boxes[i[0]], boxes[i[1]], boxes[i[2]]);
    let pos1 = boxes[i[0]].innerText;
    let pos2 = boxes[i[1]].innerText;
    let pos3 = boxes[i[2]].innerText;
    if (pos1 && pos2 && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3 && pos1 == pos3) {
        // console.log("winner", pos3);
        count = 0;
        disablebtn();
        winner(pos3);
        cross(i[0], i[1]);
        break;
      }
    }
  }
};
const winner = (win) => {
  msg.innerText = `The winner is ${win}`;
  msg.classList.add("openmsg");
  play.play();
  reset.innerText = "New Game";
};
const draw = () => {
  if (count === 9) {
    msg.innerText = "This is a draw";
    eq.play();
    msg.classList.add("openmsg");
    reset.innerText = "New Game";
    reset.style.background = "yellow";
    reset.style.scale = "1.5";
  }
};
const disablebtn = () => {
  for (let i of boxes) {
    i.disabled = true;
    i.classList.remove("box2");
    reset.style.background = "yellow";
    reset.style.scale = "1.5";
  }
};
const enablebtn = () => {
  for (let i of boxes) {
    i.disabled = false;
    i.classList.add("box2");
    i.innerText = "";
    msg.classList.remove("openmsg");
    // on.classList.remove("cross");
  }
  if (turn == true) {
    turn = false;
    msg.innerText = "✖️'s Turn";
    msg.classList.add("openmsg");
  } else {
    turn = true;
    msg.innerText = "⭕'s Turn";
    msg.classList.add("openmsg");
  }
  turn0 = turn;
  reset.innerText = "Reset Game";
  count = 0;
  temp.classList.remove("cross");
  reset.style.background = "#ef896f";
  reset.style.scale = "1";
};
reset.addEventListener("click", () => {
  audio.play();
  turn0 = true;
  enablebtn();
});
const cross = (a, b) => {
  if (a === 0 && b === 1) {
    temp = on.querySelector(":nth-child(10)");
    temp.classList.add("cross");
  } else if (a === 3 && b === 4) {
    temp = on.querySelector(":nth-child(11)");
    temp.classList.add("cross");
  } else if (a === 6 && b === 7) {
    temp = on.querySelector(":nth-child(12)");
    temp.classList.add("cross");
  } else if (a === 0 && b === 4) {
    temp = on.querySelector(":nth-child(13)");
    temp.classList.add("cross");
  } else if (a === 1 && b === 4) {
    temp = on.querySelector(":nth-child(14)");
    temp.classList.add("cross");
  } else if (a === 2 && b === 5) {
    temp = on.querySelector(":nth-child(15)");
    temp.classList.add("cross");
  } else if (a === 2 && b === 4) {
    temp = on.querySelector(":nth-child(16)");
    temp.classList.add("cross");
  } else if (a === 0 && b === 3) {
    temp = on.querySelector(":nth-child(17)");
    temp.classList.add("cross");
  }
};
