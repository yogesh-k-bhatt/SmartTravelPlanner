import { useState } from "react";
import ItineraryForm from "../components/ItineraryForm";
import TripList from "../components/TripList";

export default function PlanTrip() {
  const [trips, setTrips] = useState([]);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <ItineraryForm onAdd={(trip) => setTrips([...trips, trip])} />
      <TripList trips={trips} />
    </div>
  );
}