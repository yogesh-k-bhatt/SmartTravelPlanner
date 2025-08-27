export default function Navbar({ setPage }) {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <h1 className="text-xl font-bold text-blue-600">Travel Planner</h1>
      <div className="space-x-4">
        <button onClick={() => setPage('explore')}>Explore</button>
        <button onClick={() => setPage('plan')}>Plan Trip</button>
        <button onClick={() => setPage('trips')}>My Trips</button>
        <button onClick={() => setPage('assistant')}>AI Assistant</button>
      </div>
    </nav>
  );
}