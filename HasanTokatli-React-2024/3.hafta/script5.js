async function variCek() {
  const yanit = await fetch("https://restcountries.com/v3.1/alpha/tr");
  const veri = await yanit.json();

  veriGoster(veri);
}

function veriGoster(veri) {
    const kokelaman = document.querySelector('#root');
    const paragraf1 = document.createElement('p');
    const paragraf2 = document.createElement('p');
    const gorsel1 = document.createElement('img');
    const ulkeObje = veri[0];
    paragraf1.textContent = `Başkent: ${ulkeObje.capital}`;
    paragraf2.textContent = `Para Birimi: ${ulkeObje.currencies.TRY.name}`;
    gorsel1.src = veri[0].flags.png;

    kokelaman.append(paragraf1, paragraf2, gorsel1);
}
variCek();
