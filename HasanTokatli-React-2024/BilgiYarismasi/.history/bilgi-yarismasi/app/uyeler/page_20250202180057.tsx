import Uye from "./Uye";

function Uyeler() {
  return (
    <div>
      <h2>Üyeler</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <Uye />

        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
          <img
            src="https://i.pravatar.cc/150?img=2"
            alt="Jane Smith"
            className="w-24 h-24 rounded-full"
          />
          <p className="mt-2 text-lg font-semibold">Jane Smith</p>
          <p className="text-gray-500">jane.smith@example.com</p>
        </div>

        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="Michael Brown"
            className="w-24 h-24 rounded-full"
          />
          <p className="mt-2 text-lg font-semibold">Michael Brown</p>
          <p className="text-gray-500">michael.brown@example.com</p>
        </div>

        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
          <img
            src="https://i.pravatar.cc/150?img=4"
            alt="Emily Johnson"
            className="w-24 h-24 rounded-full"
          />
          <p className="mt-2 text-lg font-semibold">Emily Johnson</p>
          <p className="text-gray-500">emily.johnson@example.com</p>
        </div>

        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
          <img
            src="https://i.pravatar.cc/150?img=5"
            alt="David Wilson"
            className="w-24 h-24 rounded-full"
          />
          <p className="mt-2 text-lg font-semibold">David Wilson</p>
          <p className="text-gray-500">david.wilson@example.com</p>
        </div>

        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
          <img
            src="https://i.pravatar.cc/150?img=6"
            alt="Sarah Miller"
            className="w-24 h-24 rounded-full"
          />
          <p className="mt-2 text-lg font-semibold">Sarah Miller</p>
          <p className="text-gray-500">sarah.miller@example.com</p>
        </div>
      </div>

    </div>
  );
}

export default Uyeler;
