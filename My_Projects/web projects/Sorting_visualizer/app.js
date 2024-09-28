let n = 20;
let speed_val = 2;
const array = [];
const low = document.querySelector("#low");
const high = document.querySelector("#high");
const speed_lvl = document.querySelector("#speed-level");
const speed_lvl_arr = [1,2,3,4,5];
const speeds = [500,200,100,50,10];
speed_lvl.innerText= speed_lvl_arr[speed_val];
const container = document.querySelector(".container");
const sort = document.querySelector("#sort");
const pause = document.querySelector("#pause");
const selected = document.querySelector("#menu-bars");
const size = document.querySelector("#size");
const showSize = document.querySelector('#showSize');

let play_pause = false;
let check = true;

const restart = () => {
  renew(n);
}

const renew = (n) => {
  check = false;
  sort.disabled = false;
  size.disabled = false;
  if(speed_val != speed_lvl_arr.length - 1) high.disabled = false;
  if(speed_val != 0) low.disabled = false;
  play_pause = false;
  selected.disabled = false;
  pause.innerText = "Pause";
  array.length = n;
  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * 100) + 1;
  }
  showBars();
};


const showBars = () => {
  container.innerHTML = "";
  for (let i in array) {
    const bar = document.createElement("div");
    bar.style.height = array[i] + "%";
    bar.style.width = 1200 / n + "px";
    bar.classList.add("bar");
    container.appendChild(bar);
  }
};

renew(n);

const swap = (bar1, bar2) => {
  let height = bar1.style.height;
  bar1.style.height = bar2.style.height;
  bar2.style.height = height;
  
};

function delay(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

const choseAlgo = async () => {
  sort.disabled = true; // Disable the sort button to prevent multiple clicks
  size.disabled = true;
  high.disabled = true;
  low.disabled = true;
  selected.disabled = true;
  const algorithm = selected.value; // Get the selected algorithm

  switch (algorithm) {
    case 'bubble':
      await bubbleSort(speed_val); // Call bubbleSort and wait for it to complete
      await isSorted();
      break;
    case 'select':
      await selectSort(); // Call Selections and wait for it to complete
      break;
    default:
      console.log('Unknown algorithm selected');
  }

  sort.disabled = false; // Re-enable the sort button after sorting is complete
  size.disabled = false;
  selected.disabled = false;
  if(speed_val != speed_lvl_arr.length - 1) high.disabled = false;
  if(speed_val != 0) low.disabled = false;

};

sort.addEventListener('click',choseAlgo);

selected.addEventListener('change', () => {
  // sort.removeEventListener('click', choseAlgo); // Remove existing click listener
  renew();
  sort.addEventListener('click', choseAlgo); // Add the new click listener
});

pause.addEventListener('click',()=>{
  play_pause = !play_pause;
  if(play_pause) pause.innerText = "Resume";
  else pause.innerText = "Pause";
});


size.addEventListener('input', (evt) =>{
  showSize.innerText = evt.target.value;
  n = evt.target.value;
  renew(n);
})

low.addEventListener("click",() => {
  if(speed_val == 1 ) {
    speed_lvl.innerText ="";
    speed_lvl.innerText = speed_lvl_arr[speed_val-1];
    speed_val--;
    low.disabled = true;
  }
  else{
  high.disabled = false;
  speed_lvl.innerText ="";
  speed_lvl.innerText = speed_lvl_arr[speed_val-1];
  speed_val--;}
})

high.addEventListener("click",() => {
  if(speed_val == speed_lvl_arr.length - 2) {
    speed_lvl.innerText ="";
    speed_lvl.innerText = speed_lvl_arr[speed_val+1];
    speed_val++;
    high.disabled = true;
  }
  else{
  low.disabled = false;
  speed_lvl.innerText ="";
  speed_lvl.innerText = speed_lvl_arr[speed_val+1];
  speed_val++;}
})

