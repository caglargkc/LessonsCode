const fiyat = 20
const adet = 2
const tutar = fiyat * adet
const KDV = 0.18;
const KDVliTutar = tutar + (tutar * KDV) 
console.log("Fiyat:", fiyat);
console.log("Adet:", adet);
console.log("Adet:", adet);
console.log("Tutar:", tutar + " TL");
console.log("KDV:", KDV);
console.log("KDV Dahil Tutar:", KDVliTutar + " TL")

if (tutar >= 50) {
    console.log("Kargo ücretsiz");
}else{
    console.log("Kargo tutarı: 5 TL");
    console.log("Kargo ve KDV dahil toplam tutar: " + (KDVliTutar + 5) + " TL" );
    console.log(50-tutar + " TL daha harcayın kargo bedava olsun");
}

if(tutar> 100){
    console.log("10TL Puan kazandınız");
}else if(tutar> 150) {
    console.log("15TL Puan kazandınız");
}else if(tutar> 200) {
    console.log("20TL Puan kazandınız");
}else if(tutar< 100) {
    console.log("Puan kazanamadınız");
}