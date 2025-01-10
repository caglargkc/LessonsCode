const fiyat = 20
const adet = 2
const tutar = fiyat * adet
console.log("Fiyat:", fiyat);
console.log("Adet:", adet);
console.log("Tutar:", tutar + " TL");
if (tutar >= 50) {
    console.log("Kargo ücretsiz");
}else{
    console.log((50-tutar) + " TL daha harcayın kargo bedava olsun");
}