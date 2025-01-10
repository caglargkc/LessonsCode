console.log("\n---- script2.2 -----\n\n");
// const urun1 = { ad: "Samsung Galaxy Note 10", fiyat: 25000, stok: 24, onkamera: true }
// const urun2 = { ad: "Beko Buzdolabı B1240", fiyat: 20000, stok: 60, wifi: false }

const urunler = [
  { ad: "Samsung Galaxy Note 10", fiyat: 25000, stok: 24, onkamera: true },
  { ad: "Beko Buzdolabı B1240", fiyat: 20000, stok: 60, wifi: false },
];

console.log(urunler);

console.log(
  urunler[0].ad,
  urunler[0].fiyat,
  urunler[0].stok,
  urunler[0].onkamera
);

console.log(urunler[1].ad, urunler[1].fiyat, urunler[1].stok, urunler[1].wifi);

urunler[0].stok--;
console.log(
  urunler[0].ad,
  urunler[0].fiyat,
  urunler[0].stok,
  urunler[0].onkamera
);

/*console.log(urun1.ad, urun1.fiyat, urun1.stok, urun1.onkamera)

urun1.stok-- // stok = stok - 1

console.log(urun1.ad, urun1.fiyat, urun1.stok, urun1.onkamera)

console.log(urun2.ad, urun2.fiyat, urun2.stok, urun2.wifi)*/
