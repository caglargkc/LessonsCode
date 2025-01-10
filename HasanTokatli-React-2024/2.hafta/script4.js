console.log("\n---- script4 -----\n\n");
const eleman1 = document.querySelector("#kutu1");
let adet = 25;
const buton1 = document.querySelector("#button1");
buton1.addEventListener("click", () => {
  adet++;
  console.log(adet);
  sonAdet(adet);
});

const buton2 = document.querySelector("#button2");
buton2.addEventListener("click", () => {
  adet--;
  console.log(adet);
  sonAdet(adet);
});

const sonAdet = (adet) => {
  eleman1.textContent = adet;
};

document.addEventListener("DOMContentLoaded", () => {
  sonAdet(adet);
});
