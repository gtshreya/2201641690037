function Stats({ url }) {
  return (
    <div className="bg-gray-50 border rounded-xl p-4">
      <h3 className="font-semibold mb-2 text-gray-700">📊 Stats</h3>
      <p className="mb-2">Total Clicks: {url.clicks.length}</p>
      <ul className="space-y-1">
        {url.clicks.map((c, i) => (
          <li key={i} className="text-sm text-gray-600">
            {c.timestamp} | Referrer: {c.referrer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stats;
