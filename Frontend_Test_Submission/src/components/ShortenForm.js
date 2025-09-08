import { useState } from "react";

function ShortenForm({ onShorten }) {
  const [url, setUrl] = useState("");
  const [validity, setValidity] = useState(30);
  const [shortcode, setShortcode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onShorten({ url, validity, shortcode });
    setUrl("");
    setShortcode("");
    setValidity(30);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg p-6 rounded-2xl max-w-xl mx-auto border"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Create Short URL</h2>

      <input
        type="url"
        placeholder="Enter full URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full border p-3 rounded-lg mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
        required
      />

      <div className="flex gap-3 mb-3">
        <input
          type="number"
          placeholder="Validity (mins)"
          value={validity}
          onChange={(e) => setValidity(Number(e.target.value))}
          className="w-1/2 border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="text"
          placeholder="Custom shortcode"
          value={shortcode}
          onChange={(e) => setShortcode(e.target.value)}
          className="w-1/2 border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Shorten Link
      </button>
    </form>
  );
}

export default ShortenForm;
