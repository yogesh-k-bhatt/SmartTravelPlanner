import { useState } from "react";

export default function ItineraryForm({ onAdd }) {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-lg font-bold mb-2">Plan Your Trip</h2>
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="number"
        placeholder="Days"
        value={days}
        onChange={(e) => setDays(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <button
        onClick={() => {
          onAdd({ destination, days });
          setDestination("");
          setDays("");
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Trip
      </button>
    </div>
  );
}