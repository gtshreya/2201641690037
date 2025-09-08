import { useState } from "react";
import ShortenForm from "./components/ShortenForm";
import ShortUrlCard from "./components/ShortUrlCard";
import Stats from "./components/Stats";
import Logs from "./components/Logs";

function App() {
  const [urls, setUrls] = useState([]);
  const [logs, setLogs] = useState([]);

  const handleShorten = (data) => {
    const newEntry = {
      id: urls.length + 1,
      original: data.url,
      short: `http://localhost:8000/${data.shortcode || "demo123"}`,
      expiry: new Date(Date.now() + data.validity * 60000).toISOString(),
      clicks: [],
    };
    setUrls([...urls, newEntry]);
    setLogs([...logs, { time: new Date().toISOString(), action: "Created new short URL" }]);
  };

  const handleClick = (id) => {
    setUrls(
      urls.map((u) =>
        u.id === id
          ? { ...u, clicks: [...u.clicks, { timestamp: new Date().toISOString(), referrer: "local" }] }
          : u
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600">
        URL Shortener
      </h1>

      <ShortenForm onShorten={handleShorten} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          {urls.map((url) => (
            <div key={url.id} className="space-y-2">
              <ShortUrlCard url={url} onClick={() => handleClick(url.id)} />
              <Stats url={url} />
            </div>
          ))}
        </div>

        <div>
          <Logs logs={logs} />
        </div>
      </div>
    </div>
  );
}

export default App;
