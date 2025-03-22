let filtreleme = {
  status: "tumu",
  category: "tumu",
};

let siralama = [
  {
    // başlığa göre sıralama
    ozellik: "title",
    tur: "artan", // varsayılana göre artan sıralama
  },
  {
    ozellik: "publishedAt",
    tur: "azalan", // varsayılana göre en son eklenen en üstte
  },
];

let yazilar = [];

async function veriCek() {
  const yanit = await fetch("https://jsonplaceholder.org/posts");
  const veri = await yanit.json();

  yazilar = veri;
}

async function basla() {
  await veriCek();
  //console.log(yazilar);

  const kategoriler = kategorileriBul();
  // console.log(kategoriler);

  const durumlar = durumBul();
  //console.log(durumlar);

  filtreleme.category = "ipsum";
  yazilariFiltrele();
  console.log(yazilar);

  yazilariSirala("title", "azalan");
}

function yazilariSirala(özellik, tur) {
  yazilar.sort((a, b) => {
    if (tur === "artan") {
      return a[özellik].localeCompare(b[özellik]);
    } else if (tur === "azalan") {
      return b[özellik].localeCompare(a[özellik]);
    }
  });
}

function yazilariFiltrele() {
  // yazının yayınlanma durumuna göre filtreleme yap
  if (filtreleme.status !== "tumu") {
    yazilar = yazilar.filter((yazi) => yazi.status === filtreleme.status);
  }

  // yazının kategorisine göre filtreleme yap
  if (filtreleme.category !== "tumu") {
    yazilar = yazilar.filter((yazi) => yazi.category === filtreleme.category);
  }
}

function kategorileriBul() {
  const kategoriler = yazilar.map((yazi) => yazi.category);
  return [...new Set(kategoriler)];
}

function durumBul() {
  const durumlar = yazilar.map((yazi) => yazi.status);
  return [...new Set(durumlar)];
}

basla();
