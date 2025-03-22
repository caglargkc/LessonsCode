export default function Uye({ gorsel="https://i.pravatar.cc/150?img=0", adsoyad="Belirtilmemiş", eposta="Belirtilmemiş" }) {


    return (
      <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
        <img
          src={gorsel}
          alt={adsoyad}
          className="w-24 h-24 rounded-full"
        />
        <p className="mt-2 text-lg font-semibold">{adsoyad}</p>
        <p className="text-gray-500">{eposta}</p>
      </div>
    );
  }
  