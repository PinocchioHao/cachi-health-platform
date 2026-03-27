import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./header.jsx";
import Footer from "./footer.jsx";

const videos = [
  {
    id: "MYpYe-9aZy0",
    title: "Congratulations, Dimitra!",
    description: "Congratulations, Dimitra!.",
  },
  {
    id: "uS5S1rE5bWE",
    title: "MCCI Celebrating 50 Years of Supporting Multicultural Communities",
    description:
      "MCCI Celebrating 50 Years of Supporting Multicultural Communities.",
  },
  {
    id: "apPijZh8DVE",
    title: "Inclusive Aged Care Forum 2025",
    description: "Inclusive Aged Care Forum 2025.",
  },
];

export default function Video() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <>
      <Header />

      <div className="min-h-screen bg-[#F7F2E2]">
        {/* Breadcrumb */}
        <section className="mx-auto max-w-[1400px] px-6 pt-6 text-sm text-[#8A6A4A]">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Videos</span>
        </section>

        {/* Hero */}
        <section className="border-b border-[#E8DCC7]">
          <div className="mx-auto max-w-[1400px] px-6 py-16">
            <h1 className="text-4xl font-extrabold text-[#3b2a1e]">
              Video Resources
            </h1>
            <p className="mt-4 text-[#5A4633] max-w-3xl">
              A curated collection of videos to support learning about health,
              wellbeing, and community.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 py-10">
          <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
            <div className="space-y-3">
              {videos.map((video) => {
                const isActive = activeVideo.id === video.id;

                return (
                  <button
                    key={video.id}
                    onClick={() => setActiveVideo(video)}
                    className={`w-full text-left p-4 rounded-xl border transition ${
                      isActive
                        ? "bg-[#FBEED6] border-[#4D1D00]"
                        : "bg-white border-[#E8DCC7] hover:bg-[#FFF8EE]"
                    }`}
                  >
                    <p className="font-bold text-[#3b2a1e]">
                      {video.title}
                    </p>
                    <p className="text-sm text-[#5A4633] mt-1">
                      {video.description}
                    </p>
                  </button>
                );
              })}
            </div>

            <div>
              <div className="bg-white p-6 rounded-2xl border">
                <div className="relative pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src={`https://www.youtube.com/embed/${activeVideo.id}`}
                    title={activeVideo.title}
                    allowFullScreen
                  />
                </div>

                <h2 className="mt-4 text-2xl font-bold text-[#3b2a1e]">
                  {activeVideo.title}
                </h2>

                <p className="mt-2 text-[#5A4633]">
                  {activeVideo.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 pb-16">
          <div className="rounded-2xl border border-[#E8DCC7] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#3b2a1e]">
              Learning through video
            </h2>
            <p className="mt-4 text-[#5A4633] max-w-4xl leading-8">
              These videos provide simple and visual ways to understand health,
              support, and community wellbeing. They complement the Tree of
              Health and ESSENCE models used throughout this project.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}