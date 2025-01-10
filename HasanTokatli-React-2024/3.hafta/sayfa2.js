fetch("okul.json") // "okul.json" dosyasını çağırır
    .then((yanit) => yanit.json()) // Yanıtı JSON formatına dönüştürür
    .then((veri) => console.log(veri.ogrenciler[2].ad)); // JSON'dan gelen verideki 3. öğrencinin adını konsola yazdırır
    
function veriGoster(veri){
    const eleman = document.querySelector("#bilgi")
    eleman. textContent = veri. ogrenciler[2].ad}