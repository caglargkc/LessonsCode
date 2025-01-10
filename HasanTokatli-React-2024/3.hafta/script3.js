async function veriCek() {
    const yanit = await fetch('okul.json');
    const veri = await yanit.json();
    bilgiGoster(veri);
}
function bilgiGoster(veri){
    const eleman = document.querySelector("#bilgi")
    const toplam = veri.ogrenciler.length;
    const toplamElaman = document.querySelector("#toplam")
    toplamElaman.textContent = `Toplam öğrenci sayısı: ${toplam}`

    
    veri.ogrenciler.forEach(ogrenci => {
        const anaElaman = document.querySelector("#bilgi")
        const liElaman = document.createElement("li")

        liElaman.textContent = ogrenci.ad
        anaElaman.append(liElaman)
        
    });
}
veriCek()
