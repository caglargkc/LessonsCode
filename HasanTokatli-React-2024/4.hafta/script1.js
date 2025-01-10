/*import {veriCek} from "./fonksiyonlar.js"

const kokElaman = document.querySelector("#root")
const baslikElaman = document.createElement("h1")


const isler = new Promise((resolve, reject) => {
    const veri = veriCek()
    resolve(veri)
})

isler.then(veri => {
    baslikElaman.textContent = veri.questions[0].question
    kokElaman.append(baslikElaman)
}) */

/*veriCek().then(veri => {
baslikElaman.textContent = veri.questions[0].question
kokElaman.append(baslikElaman) 
})*/
import { baslat, soruGoster } from "./fonksiyonlar.js";

baslat();
soruGoster(1);
