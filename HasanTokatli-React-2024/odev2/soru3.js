const fiyat = 20
const adet = 2
const tutar = fiyat * adet
const KDV = 0.18;

console.log("Fiyat:", fiyat);
console.log("Adet:", adet);
console.log("Tutar:", tutar + " TL");

if (tutar >= 50) {
    console.log("Kargo ücretsiz");
}else{
    console.log("Kargo tutarı: 5 TL");
    console.log("Kargo dahil toplam tutar: " + (tutar + 5) + " TL" );
    console.log((50-tutar) + " TL daha harcayın kargo bedava olsun");
}
