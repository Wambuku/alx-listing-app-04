import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const nights = (() => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  })();

  const total = nights * price;

  return (
    <div className="sticky top-24 w-full max-w-sm bg-white p-6 shadow-xl rounded-2xl mx-auto mt-4 md:mt-0">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">${price}</span>
        <span className="text-gray-500">/night</span>
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 mb-1">Check-in</label>
        <input
          type="date"
          className="border p-2 rounded-md w-full"
          value={checkIn}
          onChange={e => setCheckIn(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <label className="block text-gray-700 mb-1">Check-out</label>
        <input
          type="date"
          className="border p-2 rounded-md w-full"
          value={checkOut}
          onChange={e => setCheckOut(e.target.value)}
        />
      </div>
      <div className="mt-4 text-lg font-semibold">
        Total payment:{" "}
        <span className="text-green-600">${isNaN(total) ? 0 : total}</span>
      </div>
      <button className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
