async function veriCek() {
    const yanit = await fetch("https://fakestoreapi.com/products");
    const veri = await yanit.json();

    veriGoster(veri);
       
}

function veriGoster(veri){
    const kokelaman = document.querySelector("#root");

    veri.forEach(urun => {
        const div1 = document.createElement("div");
        const paragraf1 = document.createElement("p");
        const görsel1 = document.createElement("img");

        paragraf1.textContent = urun.title;
        görsel1.src = urun.image;
        
        div1.append(görsel1, paragraf1);
        kokelaman.append(div1);



    });
}
veriCek();