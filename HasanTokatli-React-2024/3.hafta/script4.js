async function veriCek() {
    const yanit = await fetch("http://api.open-notify.org/astros.json");
    const veri = await yanit.json();
    veriGoster(veri);
}
function veriGoster(veri){
    const listeElemani = document.querySelector("#kisiler");
    const adetEleman = document.querySelector("#kisiAdet");

    veri.people.forEach(kisi => {
        const liElemani = document.createElement("li");
        liElemani.textContent = kisi.name;
        listeElemani.append(liElemani);

    });
    adetEleman.textContent = `Toplam ${veri.people.length} kişi var.`;
}

veriCek();
