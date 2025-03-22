"use strict";

import { useState } from "react";
import Uye from "./uye";

const uyeler = [
  {
    id: 1,
    gorsel: "https://i.pravatar.cc/150?img=1",
    adsoyad: "John Doe",
    eposta: "john.doe@example.com",
    begeni: 15,
  },
  {
    id: 2,
    gorsel: "https://i.pravatar.cc/150?img=2",
    adsoyad: "Jane Smith",
    eposta: "jane.smith@example.com",
    begeni: 8,
  },
  {
    id: 3,
    gorsel: "https://i.pravatar.cc/150?img=3",
    adsoyad: "David Lee",
    eposta: "david.lee@example.com",
    begeni: 12,
  },
  {
    id: 4,
    gorsel: "https://i.pravatar.cc/150?img=4",
    adsoyad: "Sarah Jones",
    eposta: "sarah.jones@example.com",
    begeni: 19,
  },
  {
    id: 5,
    gorsel: "https://i.pravatar.cc/150?img=5",
    adsoyad: "Michael Brown",
    eposta: "michael.brown@example.com",
    begeni: 3,
  },
  {
    id: 6,
    gorsel: "https://i.pravatar.cc/150?img=6",
    adsoyad: "Emily Davis",
    eposta: "emily.davis@example.com",
    begeni: 7,
  },
];

function Uyeler() {
  const [toplamBegeni, setToplamBegeni] = useState(0);
  
  return (
    <div>
      <h2>Üyeler</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {
            uyeler.map( (deger, indeks) => <Uye begeni={deger.begeni} id={deger.id} key={deger.id} gorsel={deger.gorsel} adsoyad={deger.adsoyad} eposta={deger.eposta} />)
        }
      </div>
    </div>
  );
}

export default Uyeler;
