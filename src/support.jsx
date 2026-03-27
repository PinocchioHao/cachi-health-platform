import { Link } from "react-router-dom";
import Header from "./header.jsx";
import Footer from "./footer.jsx";

const supportTypes = [
  {
    title: "Safe support",
    desc: "Support from family, friends, and trusted people helps us feel safe, respected, and cared for.",
  },
  {
    title: "Community & cultural support",
    desc: "Being part of a community and staying connected to culture, language, and traditions helps people feel understood and supported.",
  },
  {
    title: "Spiritual support",
    desc: "Faith, prayer, meditation, and spiritual practices can bring peace, hope, and strength during difficult times.",
  },
  {
    title: "Access to care",
    desc: "Having access to doctors, interpreters, and health services helps people understand their care and make better decisions.",
  },
  {
    title: "Mental & emotional wellbeing",
    desc: "Talking to others, sharing feelings, and reducing stress helps people stay mentally and emotionally strong.",
  },
  {
    title: "Healthy lifestyle support",
    desc: "Support also includes guidance for eating well, staying active, resting, and building healthy daily habits.",
  },
];

const practicalSupport = [
  "Using interpreters or translators at medical appointments",
  "Bringing a support person or advocate with you",
  "Learning about cancer screening and health services",
  "Joining community groups and support sessions",
  "Connecting with local organisations and community workers",
  "Building relationships with people you trust",
];

export default function Support() {
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
          <span>Support & services</span>
        </section>

        {/* Hero */}
        <section className="border-b border-[#E8DCC7]">
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6A4A]">
              Support & services
            </p>
            <h1 className="max-w-5xl text-4xl font-extrabold leading-tight text-[#3b2a1e] md:text-5xl">
              Support is an important part of health and healing.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#5A4633]">
              In the CACHI approach, support is not only about treatment. It includes safety,
              connection, understanding, and having access to the right help at the right time.
            </p>
          </div>
        </section>

        {/* Types of support */}
        <section className="mx-auto max-w-[1400px] px-6 py-14">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#3b2a1e] md:text-3xl">
              Types of support
            </h2>
            <p className="mt-3 max-w-4xl text-base leading-7 text-[#5A4633]">
              Support comes from many different areas of life. Together, these help people feel stronger,
              safer, and more confident in managing their health.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {supportTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E8DCC7] bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#3b2a1e]">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#5A4633]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Practical support */}
        <section className="mx-auto max-w-[1400px] px-6 py-6">
          <div className="rounded-3xl bg-[#4D1D00] px-8 py-10 text-[#FFE6BA] md:px-10">
            <h2 className="text-2xl font-bold md:text-3xl">
              Practical support in daily life
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {practicalSupport.map((item) => (
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

        {/* Why support matters */}
        <section className="mx-auto max-w-[1400px] px-6 py-14">
          <div className="rounded-2xl border border-[#E8DCC7] bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-2xl font-bold text-[#3b2a1e] md:text-3xl">
              Why support matters
            </h2>

            <p className="mt-4 max-w-4xl text-base leading-8 text-[#5A4633]">
              Support helps people feel less alone and more confident. It improves understanding,
              reduces stress, and helps people make better decisions about their health.
            </p>

            <p className="mt-4 max-w-4xl text-base leading-8 text-[#5A4633]">
              When support is strong, people are more likely to feel safe, connected, and able to take
              care of their physical, mental, and emotional wellbeing.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}