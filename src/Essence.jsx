import { Link } from "react-router-dom";
import Header from "./header.jsx";
import Footer from "./footer.jsx";

const essenceItems = [
  {
    letter: "E",
    title: "Education",
    desc: "Learning simple information about cancer, treatment, and how to stay healthy helps people understand their choices and feel stronger.",
  },
  {
    letter: "S",
    title: "Support",
    desc: "A safe space where people and carers can meet, talk, and know they are not alone. Sharing helps reduce stress and build confidence.",
  },
  {
    letter: "S",
    title: "Spirituality",
    desc: "Respect for faith and beliefs can help bring peace, courage, and inner strength during difficult times.",
  },
  {
    letter: "E",
    title: "Exercise",
    desc: "Gentle movement such as walking or stretching can help the body feel better, recover, and heal. Every move counts.",
  },
  {
    letter: "N",
    title: "Nutrition",
    desc: "Healthy food helps the body stay strong, recover, and feel well.",
  },
  {
    letter: "C",
    title: "Connectedness",
    desc: "A caring community helps people feel safe, supported, understood, and less alone.",
  },
  {
    letter: "E",
    title: "Environment",
    desc: "Learning about air, water, and home conditions helps people understand how their surroundings can support or affect health.",
  },
];

export default function Essence() {
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
          <span>ESSENCE</span>
        </section>

        {/* Hero */}
        <section className="border-b border-[#E8DCC7]">
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6A4A]">
              ESSENCE of Health
            </p>
            <h1 className="max-w-5xl text-4xl font-extrabold leading-tight text-[#3b2a1e] md:text-5xl">
              Seven important areas for health, healing, and wellbeing.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#5A4633]">
              In the CACHI program, ESSENCE is used to explain seven important things that help people
              stay strong, supported, and connected through health challenges and recovery.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="mx-auto max-w-[1400px] px-6 py-14">
          <div className="rounded-2xl border border-[#E8DCC7] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#3b2a1e] md:text-3xl">
              What does ESSENCE mean?
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-[#5A4633]">
              ESSENCE is a simple model that helps explain health in a holistic way. It brings together
              education, support, spirituality, exercise, nutrition, connectedness, and environment to
              show that wellbeing is made stronger when all parts work together.
            </p>
          </div>
        </section>

        {/* 7 cards */}
        <section className="mx-auto max-w-[1400px] px-6 py-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {essenceItems.map((item, index) => (
              <div
                key={`${item.letter}-${item.title}-${index}`}
                className="rounded-2xl border border-[#E8DCC7] bg-white p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FBEED6] font-bold text-[#8A5A17]">
                  {item.letter}
                </div>
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

        {/* Why it matters */}
        <section className="mx-auto max-w-[1400px] px-6 py-14">
          <div className="rounded-3xl bg-[#4D1D00] px-8 py-10 text-[#FFE6BA] md:px-10">
            <h2 className="text-2xl font-bold md:text-3xl">
              Why ESSENCE matters
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-[#F9E6C5]">
              The ESSENCE model helps people understand that health is not only about illness or
              treatment. It is also about support, relationships, healthy habits, spiritual strength,
              and the world around us.
            </p>
            <p className="mt-4 max-w-4xl text-base leading-8 text-[#F9E6C5]">
              It is designed to make health concepts easier to understand in a simple, visual, and
              community-based way.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="mx-auto max-w-[1400px] px-6 pb-16">
          <div className="rounded-2xl border border-[#E8DCC7] bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-2xl font-bold text-[#3b2a1e] md:text-3xl">
              ESSENCE and the Tree of Health
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-[#5A4633]">
              The Tree of Health provides the framework for understanding wellbeing through roots, trunk,
              branches, and leaves. ESSENCE builds on that framework by giving seven practical areas that
              people can explore in more detail.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}