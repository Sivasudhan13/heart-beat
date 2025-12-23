export default function Message({ en, ta }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center mt-6">
      <p className="text-lg mb-3">{en}</p>
      <p className="text-lg text-red-600">{ta}</p>
    </div>
  );
}
