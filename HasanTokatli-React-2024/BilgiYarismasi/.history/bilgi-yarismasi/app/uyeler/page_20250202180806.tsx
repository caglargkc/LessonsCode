import Uye from "./uye";


function Uyeler() {
  return (
    <div>
      <h2>Üyeler</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">

        <Uye  gorsel="https://i.pravatar.cc/150?img=1" adsoyad="John Doe" eposta="john.doe@example.com" />
        <Uye />
        <Uye />
        <Uye />
        <Uye />
        <Uye />

      </div>

    </div>
  );
}

export default Uyeler;
