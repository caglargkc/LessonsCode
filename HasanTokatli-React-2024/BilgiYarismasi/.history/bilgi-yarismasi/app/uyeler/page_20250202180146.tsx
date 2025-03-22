import Uye from "./uye";


function Uyeler() {
  return (
    <div>
      <h2>Üyeler</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <Uye />
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
