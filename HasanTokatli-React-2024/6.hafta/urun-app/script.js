// state değişkenlerimi oluşuturuyorum
let siralama = "artan" // a->z
let kategori = "" // kategoriye göre ürün listeleme

// bir apiye bağlanarak veri çekme işlemi
async function veriCek() {
  const yanit = await fetch("https://fakestoreapi.com/products"); // apiye bağlanma işlemi
  const veri = await yanit.json(); // json formatında veri almak için

  let urunler = veri; // tüm ürünler

  if (kategori) {
    // eğer kategori varsa
    urunler = veri.filter((urun) => urun.category === kategori);
  }

  if(siralama === "artan") { // başlığa göre türkçe alfabetik sıralama
    urunler = urunler.sort((a, b) => a.title.localeCompare(b.title));
  } else if(siralama === "azalan") { // başlığa göre türkçe alfabetik sıralama
    urunler = urunler.sort((a, b) => b.title.localeCompare(a.title));
  }

  return urunler;
}

function UIGoster() {
  const urunlisteElemani = document.createElement("div");
  urunlisteElemani.classList.add("urun-listesi");

  const kokEleman = document.querySelector("#root");

  // kokEleman.appendChild(yeniDiv) // 1. yöntem
  kokEleman.insertAdjacentElement("beforeend", urunlisteElemani); // 2. yöntem

  // ürünlerin listelenmesi
  urunleriListele();

  filtreGoster(); // filtre gösterme fonksiyonu
  siralamaGoster(); // sıralama gösterme fonksiyonu
}

UIGoster(); // sayfa yüklendiğinde çalışacak fonksiyon

async function urunleriListele() {
  // veri çekme işlemi
  const urunler = await veriCek();

  console.log("Ürün sayısı:", urunler.length);

  const urunlisteElemani = document.querySelector(".urun-listesi");
  urunlisteElemani.innerHTML = ""; // ürün listesini temizliyoruz

  // veri çekildikten sonra yapılacak işlemler
  urunler.forEach((urun) => {
    // ürünlerin listelenmesi
    urunEkle(urun);
  });
}

function urunEkle(urun) {
  const urunDivElemani = document.createElement("div");
  urunDivElemani.classList.add(
    "urun",
    "p-3",
    "border",
    "border-2",
    "rounded-3",
    "position-relative"
  ); // ürün divine class ekleme

  const urunlisteElemani = document.querySelector(".urun-listesi");
  urunlisteElemani.append(urunDivElemani); // ürün divini urun liste divine ekler

  /*
    // ürün resmi
    const urunResmiElemani = document.createElement("img")
    urunResmiElemani.src = urun.image
    urunDivElemani.append(urunResmiElemani)

    // ürün başlığı
    const urunBaslikElemani = document.createElement("h2")
    urunBaslikElemani.textContent = urun.title
    urunDivElemani.append(urunBaslikElemani)
    */

  // ürün şablonu oluşturma
  const urunHTML = `
        <img src="${urun.image}" alt="${urun.title}" />
        <h2 class="h5">${urun.title}</h2>
        <p>${urun.price} TL</p>
        <button class="btn btn-outline-dark">Sepete Ekle</button>
        <span class="badge text-bg-secondary position-absolute top-0 end-0 mt-2 me-2">${urun.category}</span>
    `;

  urunDivElemani.innerHTML = urunHTML;
}

async function filtreGoster() {
  const fitreDivELemani = document.createElement("div");
  fitreDivELemani.classList.add("filtre", "mb-3");

  const urunlisteElemani = document.querySelector(".urun-listesi");
  urunlisteElemani.insertAdjacentElement("beforebegin", fitreDivELemani);

  // tümünü göster butonu
    const kategoriElemani = document.createElement("button");
    kategoriElemani.classList.add("btn", "btn-outline-dark", "me-2");
    kategoriElemani.textContent = "Tümünü Göster";

    fitreDivELemani.append(kategoriElemani);

    kategoriElemani.addEventListener("click", () => {
      kategori = "";
      urunleriListele(); // kategoriye göre ürünleri listeleme
    });


  // kategorileri al
  const kategoriler = await kategorileriAl();
  kategoriler.forEach((kateogiAdi) => {
    const kategoriElemani = document.createElement("button");
    kategoriElemani.classList.add("btn", "btn-outline-dark", "me-2");
    kategoriElemani.textContent = kateogiAdi;

    fitreDivELemani.append(kategoriElemani);

    kategoriElemani.addEventListener("click", () => {
      kategori = kateogiAdi;
      urunleriListele(); // kategoriye göre ürünleri listeleme
    });
  });
}

// sıralama butonlarının oluşturulması
function siralamaGoster() {
  const siralamaDivElemani = document.createElement("div");
  siralamaDivElemani.classList.add("siralama", "mb-3");

  const urunlisteElemani = document.querySelector(".urun-listesi");
  urunlisteElemani.insertAdjacentElement("beforebegin", siralamaDivElemani);

  // sıralama butonları
  const siralamaArtanElemani = document.createElement("button");
  siralamaArtanElemani.classList.add("btn", "btn-outline-dark", "me-2");
  siralamaArtanElemani.textContent = "A->Z";

  siralamaDivElemani.append(siralamaArtanElemani);

  siralamaArtanElemani.addEventListener("click", () => {
    siralama = "artan";
    urunleriListele(); // kategoriye göre ürünleri listeleme
  });

  const siralamaAzalanElemani = document.createElement("button");
  siralamaAzalanElemani.classList.add("btn", "btn-outline-dark", "me-2");
  siralamaAzalanElemani.textContent = "Z->A";

  siralamaDivElemani.append(siralamaAzalanElemani);

  siralamaAzalanElemani.addEventListener("click", () => {
    siralama = "azalan";
    urunleriListele(); // kategoriye göre ürünleri listeleme
  });
}

async function kategorileriAl() {
  const urunler = await veriCek();
  const kategoriler = urunler.map((urun) => urun.category);

  return [...new Set(kategoriler)]; // Aynı olan kategorileri filtrelemek için Set kullanılıyor
}
