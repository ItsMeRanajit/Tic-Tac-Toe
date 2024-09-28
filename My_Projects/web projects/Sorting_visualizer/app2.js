const n = 50;
let len = n;
const array = [];
const container = document.querySelector(".container");
const sortedidx = new Set();
let check = true;

const renew = () => {
  check = false;
  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * 100) + 1;
  }
  showBars();
};

const play = () => {
  const copy = [...array];
  const swap = bubbleSort(copy);
  check = true;
  animate(swap);
};

const showBars = (index) => {
  container.innerHTML = "";
  // console.log(array);
  for (let i in array) {
    const bar = document.createElement("div");
    bar.style.height = array[i] + "%";
    bar.classList.add("bar");
    if (i == index) bar.style.backgroundColor = "green";
    container.appendChild(bar);
  }
};

renew();

const animate = (swap) => {
  if (swap.length == 0 || check == false) return;
  const [i, j] = swap.shift();
  [array[i], array[j]] = [array[j], array[i]];
  showBars(j);
  setTimeout(() => {
    animate(swap);
  }, 6);
};
const bubbleSort = (array) => {
  const swap = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swap.push([j, j + 1]);
      }
    }
  }
  console.log(swap);

  return swap;
};
