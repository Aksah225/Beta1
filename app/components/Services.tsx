"use client";

export default function MyCard() {
  const youtubeVideos = [
    "dQw4w9WgXcQ",
    "9bZkp7q19f0",
  ];

  const shortFormVideos = [
    "3tmd-ClpJxA",
    "l482T0yNkeo",
    "fLexgOxsZu0",
    "DAuu1DTiIG0",
    "gTkfDjUBXMY",
    "6BsDM6ODD3g",
  ];

  const parallelVideos = [
    "dQw4w9WgXcQ",
    "9bZkp7q19f0",
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-10">

      {/* ================= CARD 1: YOUTUBE VIDEOS (2) ================= */}
      <div
        className="p-8 rounded-2xl shadow-lg"
        style={{
          background: "linear-gradient(135deg, #111, #1a1a1a)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h2 className="text-3xl font-semibold text-white text-center">
          YouTube Videos
        </h2>

        <p className="text-gray-400 mt-4 text-center">
          These videos explain my project and services.
        </p>

        <div className="mt-6 text-center">
          <button
            className="px-6 py-2 rounded-lg text-white"
            style={{
              background: "#ff4533",
              boxShadow: "0 4px 12px rgba(255,69,51,0.3)",
            }}
          >
            Explore pricing
          </button>
        </div>

        {/* 2 Videos Grid */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          {youtubeVideos.map((video) => (
            <div
              key={video}
              className="rounded-xl overflow-hidden"
              style={{ height: "200px" }}
            >
              <img
                src={`https://i.ytimg.com/vi/${video}/maxresdefault.jpg`}
                alt="video thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= CARD 2: SHORT FORM VIDEOS (6) ================= */}
      <div
        className="p-8 rounded-2xl shadow-lg"
        style={{
          background: "linear-gradient(135deg, #111, #1a1a1a)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h2 className="text-3xl font-semibold text-white text-center">
          Short Form Videos
        </h2>

        <p className="text-gray-400 mt-4 text-center">
          Nail your Reels, TikToks, LinkedIn and Shorts to optimize engagement.
        </p>

        <div className="mt-6 text-center">
          <button
            className="px-6 py-2 rounded-lg text-white"
            style={{
              background: "#ff4533",
              boxShadow: "0 4px 12px rgba(255,69,51,0.3)",
            }}
          >
            Explore pricing
          </button>
        </div>

        {/* 6 Videos Grid */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {shortFormVideos.map((video) => (
            <div
              key={video}
              className="rounded-xl overflow-hidden"
              style={{ height: "160px" }}
            >
              <img
                src={`https://i.ytimg.com/vi/${video}/maxresdefault.jpg`}
                alt="video thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= CARD 3: PARALLEL 2 VIDEOS ================= */}
      <div
        className="p-8 rounded-2xl shadow-lg"
        style={{
          background: "linear-gradient(135deg, #111, #1a1a1a)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h2 className="text-3xl font-semibold text-white text-center">
          Video Showcase
        </h2>

        <p className="text-gray-400 mt-4 text-center">
          These videos highlight our services and client success.
        </p>

        <div className="mt-6 text-center">
          <button
            className="px-6 py-2 rounded-lg text-white"
            style={{
              background: "#ff4533",
              boxShadow: "0 4px 12px rgba(255,69,51,0.3)",
            }}
          >
            Explore pricing
          </button>
        </div>

        {/* Parallel Videos */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          {parallelVideos.map((video) => (
            <div
              key={video}
              className="rounded-xl overflow-hidden"
              style={{ height: "200px" }}
            >
              <img
                src={`https://i.ytimg.com/vi/${video}/maxresdefault.jpg`}
                alt="video thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}