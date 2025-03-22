
import Uye from "./uye";

const uyeler = [
  {
    id: 1,
    gorsel: "https://i.pravatar.cc/150?img=1",
    adsoyad: "John Doe",
    eposta: "john.doe@example.com",
  },
  {
    id: 2,
    gorsel: "https://i.pravatar.cc/150?img=2",
    adsoyad: "Jane Smith",
    eposta: "jane.smith@example.com",
  },
  {
    id: 3,
    gorsel: "https://i.pravatar.cc/150?img=3",
    adsoyad: "David Lee",
    eposta: "david.lee@example.com",
  },
  {
    id: 4,
    gorsel: "https://i.pravatar.cc/150?img=4",
    adsoyad: "Sarah Jones",
    eposta: "sarah.jones@example.com",
  },
  {
    id: 5,
    gorsel: "https://i.pravatar.cc/150?img=5",
    adsoyad: "Michael Brown",
    eposta: "michael.brown@example.com",
  },
  {
    id: 6,
    gorsel: "https://i.pravatar.cc/150?img=6",
    adsoyad: "Emily Davis",
    eposta: "emily.davis@example.com",
  },
];

function Uyeler() {
  
    
  return (
    <div>
      <h2>Üyeler</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {
            uyeler.map( (deger, indeks) => <Uye id={deger.id} key={deger.id} gorsel={deger.gorsel} adsoyad={deger.adsoyad} eposta={deger.eposta} />)
        }
      </div>
    </div>
  );
}

export default Uyeler;
