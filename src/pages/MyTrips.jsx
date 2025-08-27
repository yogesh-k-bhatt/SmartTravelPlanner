import { useState } from "react";
import TripList from "../components/TripList";

export default function MyTrips() {
  const [trips] = useState([{ destination: "Paris", days: 5 }]);

  return (
    <div className="p-6">
      <TripList trips={trips} />
    </div>
  );
}