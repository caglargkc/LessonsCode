//elementlerin tanımlanması
let aktifSoru = 1;
let adSoyad = "";
let sure = 0;
const maksimumToplamSure = 5;
let intervalId;

const kokEleman = document.querySelector("#root"); // section etiketi
const zamanElemani = document.createElement("div"); // zaman
zamanElemani.id = "zaman";
zamanElemani.textContent = 0;
document.querySelector("body").append(zamanElemani);

const baslikElemani = document.createElement("h1"); // soru
const secenek1Elemani = document.createElement("p"); // seçenek 1
const secenek2Elemani = document.createElement("p"); // seçenek 2
const secenek3Elemani = document.createElement("p"); // seçenek 3
const secenek4Elemani = document.createElement("p"); // seçenek 4
const ileriElemani = document.createElement("button"); // ileri butonu
ileriElemani.textContent = "İleri";
ileriElemani.addEventListener("click", () => {
  aktifSoru = aktifSoru + 1;
  soruGoster(aktifSoru);
});

function baslat() {
  const adEleman = document.createElement("input");
  adEleman.placeholder = "Ad soyad giriniz";

  const baslatButon = document.createElement("button");
  baslatButon.textContent = "Başlat";

  baslatButon.addEventListener("click", () => {
    adSoyad = adEleman.value;

    adEleman.remove();
    baslatButon.remove();

    baslat2();
  });

  kokEleman.append(adEleman, baslatButon);
}

function baslat2() {
  // init()
  kokEleman.append(
    baslikElemani,
    secenek1Elemani,
    secenek2Elemani,
    secenek3Elemani,
    secenek4Elemani,
    ileriElemani
  );
  süreBaslat();
}

async function veriCek() {
  const yanit = await fetch("sorular.json");
  const veri = await yanit.json();

  console.log(veri);

  return veri;
}

function süreBaslat() {
  intervalId = setInterval(() => {
    sure = sure + 1;
    zamanElemani.textContent = sure;
    console.log(intervalId);
    if (sure === maksimumToplamSure) {
      oyunuBitir();
    }
  }, 1000);
}

// 1. YÖNTEM
async function soruGoster(soruNo = 1) {
  baslikElemani.textContent = "Sorular yükleniyor..";
  const veri = await veriCek(); // veriCek fonksiyonunun promise türünde(async) bir fonksiyon olması gerekir

  if (veri.questions[soruNo - 1] === undefined) {
    // gelen sorunoya ait soru var mı diye kontrol et!
    baslikElemani.textContent = "Soru bulunamadı..";
    secenek1Elemani.textContent = "";
    secenek2Elemani.textContent = "";
    secenek3Elemani.textContent = "";
    secenek4Elemani.textContent = "";
    return; // devamındaki fonksiyon kodları çalışmaz
  }

  baslikElemani.textContent = veri.questions[soruNo - 1].question; //1. soru
  secenek1Elemani.textContent = "A) " + veri.questions[soruNo - 1].options[0]; //1. sorunun 1. seçeneği/şıkkı
  secenek2Elemani.textContent = "B) " + veri.questions[soruNo - 1].options[1]; //1. sorunun 2. seçeneği/şıkkı
  secenek3Elemani.textContent = "C) " + veri.questions[soruNo - 1].options[2]; //1. sorunun 3. seçeneği/şıkkı
  secenek4Elemani.textContent = "D) " + veri.questions[soruNo - 1].options[3]; //1. sorunun 1. seçeneği/şıkkı
}

function oyunuBitir() {
  baslikElemani.textContent = "Süreniz doldu!";
  secenek1Elemani.textContent = "";
  secenek2Elemani.textContent = "";
  secenek3Elemani.textContent = "";
  secenek4Elemani.textContent = "";
  clearInterval(intervalId);
  ileriElemani.remove();
}

//harici dosyalardan kullanılabilecek değişkenleri export ettik
export { veriCek, baslat, soruGoster }; // dışarıdaki dosyalar, burada belirtilen fonksiyon veya değişkenleri import eddebilir
