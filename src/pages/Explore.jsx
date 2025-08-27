import DestinationCard from "../components/DestinationCard";
import destinations from "../data/dummyData";

export default function Explore() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {destinations.map((d, i) => (
        <DestinationCard key={i} {...d} />
      ))}
    </div>
  );
}