export default function Uye({ children=<></>, begeni=0, id=0, gorsel="https://i.pravatar.cc/150?img=0", adsoyad="Belirtilmemiş", eposta="Belirtilmemiş" }) {


    return (
      <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
        {children}
        <img
          src={gorsel}
          alt={adsoyad}
          className="w-24 h-24 rounded-full"
        />
        <p className="mt-2 text-lg font-semibold">#{id} {adsoyad}</p>
        <p className="text-gray-500">{eposta}</p>
        <p className="mt-2 text-sm text-gray-500">Beğeni: {begeni}</p>
      </div>
    );
  }
  