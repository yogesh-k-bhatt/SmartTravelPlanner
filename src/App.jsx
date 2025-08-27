import { useState } from "react";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import PlanTrip from "./pages/PlanTrip";
import MyTrips from "./pages/MyTrips";
import Assistant from "./pages/Assistant";

export default function App() {
  const [page, setPage] = useState("explore");

  return (
    <div>
      <Navbar setPage={setPage} />
      {page === "explore" && <Explore />}
      {page === "plan" && <PlanTrip />}
      {page === "trips" && <MyTrips />}
      {page === "assistant" && <Assistant />}
    </div>
  );
}