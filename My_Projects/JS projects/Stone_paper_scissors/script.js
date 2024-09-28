let user = 0;
let computer = 0;
const choice = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let btn = document.querySelector("#btn");
let user_scr = document.querySelector("#my");
let comp_scr = document.querySelector("#comp2");
let pop = document.querySelector("#pop");
let uh = document.querySelector("#uh");
let win = document.querySelector("#win");
let comp_choose = document.querySelector("#comp_choose");
let count_for_user = 0;
let count_for_comp = 0;
user_scr.innerText = count_for_user;
comp_scr.innerText = count_for_comp;

const comp_choice = () => {
  const option = ["rock", "paper", "scissors"];
  let rand = Math.floor(Math.random() * 3);
  //random and floor are part of math class
  //random functin generates any number between 0 to 1 not eq to 0 /1.
  //but here we made 0-2 array to point any string . so we need value of 0-2. thats why we will mutiply random with 3. because random generates all number in form of 0.13.. so if we multiply it with itll give the value between 0-2 but not exact 3 and 0.
  // thats why we used floor. that helps to omit the decimal numbers and takes the lesser whole number . we also can use ceil but it an give whole number 3
  return option[rand];
};
draw = () => {
  //   console.log("game was drawn");
  msg.innerText = "Draw 😶";
};
showwinner = (userwin) => {
  if (userwin === true) {
    // console.log("you win ");
    msg.innerText = "You Win 🤩";
    user_scr.innerText = ++count_for_user;
  } else {
    // console.log("you lose ");
    msg.innerText = "You Lose 😣";
    comp_scr.innerText = ++count_for_comp;
  }
  if (count_for_comp === 5) {
    msg.classList.remove("openmsg");
    msg.classList.add("show_win");
    msg.innerText = "You lost the game 🥲";
    uh.play();
    btn.style.background = "yellow";
    btn.style.scale = "2";
  } else if (count_for_user === 5) {
    msg.classList.remove("openmsg");
    msg.classList.add("show_win");
    msg.innerText = "You won the game 😎";
    win.play();
    btn.style.background = "yellow";
    btn.style.scale = "2";
  }
};
play = (user) => {
  msg.classList.remove("openmsg");
  const comp = comp_choice();
  //   console.log("comp ", comp);
  if (comp === "rock") {
    comp_choose.innerHTML = 'Computer- <img src="/My_Projects/JS projects/Stone_paper_scissors/files/rock.png" alt="Rock" />';
  } else if (comp === "paper") {
    comp_choose.innerHTML = 'Computer- <img src="/My_Projects/JS projects/Stone_paper_scissors/files/paper.png" alt="Rock" />';
  } else {
    comp_choose.innerHTML = 'Computer- <img src="/My_Projects/JS projects/Stone_paper_scissors/files/scissors.png" alt="Rock" />';
  }
  msg.classList.add("openmsg");

  if (user === comp) {
    draw();
  } else {
    let userwin = true;
    if (user === "rock") {
      userwin = comp === "paper" ? false : true;
    } else if (user === "paper") {
      userwin = comp === "scissors" ? false : true;
    } else if (user === "scissors") {
      userwin = comp === "rock" ? false : true;
    }
    showwinner(userwin);
  }
};
const disablebtn = () => {
  for (let i of choice) {
    i.disabled = true;
  }
};
const enablebtn = () => {
  for (let i of choice) {
    i.disabled = false;
  }
  count_for_comp = 0;
  count_for_user = 0;
  user_scr.innerText = count_for_user;
  comp_scr.innerText = count_for_comp;
  msg.classList.remove("show_win");
  msg.innerText = "";
  msg.classList.add("openmsg");
};
choice.forEach((c) => {
  c.addEventListener("click", () => {
    pop.play();
    if (count_for_comp === 5 || count_for_user === 5) {
      //   console.log("hi");
      disablebtn();
    } else {
      user = c.querySelector("img").getAttribute("id");
      // console.log("user ", user);
      play(user);
    }
  });
});
btn.addEventListener("click", () => {
  pop.play();
  comp_choose.innerHTML = "Computer-";
  btn.style.background = "#4ed2f3";
  btn.style.scale = "1";

  enablebtn();
});
