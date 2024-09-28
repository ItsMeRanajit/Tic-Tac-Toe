let link = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let url = document.getElementById("url");
let btn = document.getElementById("btn");
let value;
url.oninput = function getvalue() {
  value = "";
  value = url.value;
};
btn.addEventListener("click", async () => {
  let link2 = `${link}${value}`;
  let resp = await fetch(link2);
  console.log(resp.url);
  document.getElementById("qr").innerHTML = "<img id='img'/>";
  let img = document.getElementById("img");
  img.src = resp.url;
});
