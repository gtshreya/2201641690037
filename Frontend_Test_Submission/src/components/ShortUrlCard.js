function ShortUrlCard({ url, onClick }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border">
      <p className="font-semibold text-gray-700 truncate">
        Original: {url.original}
      </p>
      <p className="mt-1">
        Short:{" "}
        <button
          onClick={onClick}
          className="text-blue-600 font-medium underline hover:text-blue-800"
        >
          {url.short}
        </button>
      </p>
      <p className="text-sm text-gray-500 mt-1">Expires at: {url.expiry}</p>
    </div>
  );
}

export default ShortUrlCard;
