const kelimeler = ["Elma", "Armut", "Çilek", "Muz", "Kiraz"];

kelimeler.sort((a, b) => {
  const sonuc = a.localeCompare(b); // `a` ve `b` karşılaştırılır
  console.log(`Karşılaştırma: ${a} vs ${b} => ${sonuc}`);
  return sonuc;
});

console.log("Sıralanmış Dizi:", kelimeler);