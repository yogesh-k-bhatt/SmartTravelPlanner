export default function TripList({ trips }) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">My Saved Trips</h2>
      {trips.length === 0 && <p>No trips yet.</p>}
      {trips.map((t, i) => (
        <div key={i} className="p-2 bg-gray-100 rounded mb-2">
          {t.destination} - {t.days} days
        </div>
      ))}
    </div>
  );
}