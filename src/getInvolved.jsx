import { Link } from "react-router-dom";
import Header from "./header.jsx";
import Footer from "./footer.jsx";

const waysToGetInvolved = [
  {
    title: "Join the community",
    desc: "Take part in community sessions, shared discussions, and simple learning activities that help people feel connected and supported.",
  },
  {
    title: "Learn together",
    desc: "Explore the Tree of Health and ESSENCE of Health models, ask questions, and build understanding about health and wellbeing together.",
  },
  {
    title: "Support family and friends",
    desc: "Use what you learn to encourage others, share helpful information, and support people you care about in practical and meaningful ways.",
  },
  {
    title: "Stay connected",
    desc: "Keep in touch with community groups, support services, and activities that help strengthen wellbeing, belonging, and confidence.",
  },
];

const simpleActions = [
  "Attend community workshops and information sessions",
  "Join support groups and local activities",
  "Share health information with family and friends",
  "Encourage others to seek care and ask questions",
  "Use interpreting services or community navigators when needed",
  "Stay connected with safe people and trusted support networks",
];

export default function GetInvolved() {
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
          <span>Get involved</span>
        </section>

        {/* Hero */}
        <section className="border-b border-[#E8DCC7]">
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6A4A]">
              Get involved
            </p>
            <h1 className="max-w-5xl text-4xl font-extrabold leading-tight text-[#3b2a1e] md:text-5xl">
              Health and healing grow stronger when people learn, share, and stay connected together.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#5A4633]">
              Getting involved does not need to be complicated. It can begin with joining a discussion,
              sharing knowledge, supporting family and friends, and being part of a caring community.
            </p>
          </div>
        </section>

        {/* Ways to get involved */}
        <section className="mx-auto max-w-[1400px] px-6 py-14">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#3b2a1e] md:text-3xl">
              Ways to get involved
            </h2>
            <p className="mt-3 max-w-4xl text-base leading-7 text-[#5A4633]">
              This project encourages people to participate in simple, supportive, and community-based ways.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {waysToGetInvolved.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E8DCC7] bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#3b2a1e]">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#5A4633]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Practical actions */}
        <section className="mx-auto max-w-[1400px] px-6 py-6">
          <div className="rounded-3xl bg-[#4D1D00] px-8 py-10 text-[#FFE6BA] md:px-10">
            <h2 className="text-2xl font-bold md:text-3xl">
              Simple ways to take part
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {simpleActions.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#7A3C18] bg-[#5B2507] p-5 text-sm leading-7 text-[#F9E6C5]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why involvement matters */}
        <section className="mx-auto max-w-[1400px] px-6 py-14">
          <div className="rounded-2xl border border-[#E8DCC7] bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-2xl font-bold text-[#3b2a1e] md:text-3xl">
              Why involvement matters
            </h2>

            <p className="mt-4 max-w-4xl text-base leading-8 text-[#5A4633]">
              Involvement helps build connectedness, support, and confidence. When people learn together
              and stay connected to their community, they are more likely to feel understood, encouraged,
              and supported.
            </p>

            <p className="mt-4 max-w-4xl text-base leading-8 text-[#5A4633]">
              This is an important part of the Tree of Health and the ESSENCE of Health model, where
              relationships, support, connectedness, and community all help strengthen wellbeing.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}