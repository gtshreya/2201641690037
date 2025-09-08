function Logs({ logs }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border">
      <h3 className="font-semibold mb-3 text-gray-700">📝 Logs</h3>
      <ul className="space-y-1 text-sm text-gray-600">
        {logs.map((log, i) => (
          <li key={i}>
            {log.time} → {log.action}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Logs;
