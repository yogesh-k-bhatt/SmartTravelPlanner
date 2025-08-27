export default function DestinationCard({ name, description, image }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <img src={image} alt={name} className="rounded-lg mb-2" />
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}