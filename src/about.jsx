import { Link } from "react-router-dom";
import Header from "./header.jsx";
import Footer from "./footer.jsx";

export default function About() {
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
          <span>About</span>
        </section>

        {/* Hero */}
        <section className="border-b border-[#E8DCC7]">
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6A4A]">
              About CACHI
            </p>
            <h1 className="max-w-5xl text-4xl font-extrabold leading-tight text-[#3b2a1e] md:text-5xl">
              A simple and interactive way to explore health, healing, and wellbeing.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#5A4633]">
              The Culturally Appropriate Cancer Improvement Program (CACHI) is designed to help women,
              families, carers, and communities understand health in a more practical, supportive, and
              culturally meaningful way.
            </p>
          </div>
        </section>

        {/* What is CACHI */}
        <section className="mx-auto max-w-[1400px] px-6 py-14">
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <h2 className="text-2xl font-bold text-[#3b2a1e] md:text-3xl">
                What is CACHI?
              </h2>
              <p className="mt-5 text-base leading-8 text-[#5A4633]">
                CACHI is a culturally appropriate cancer improvement program that helps explain health
                and healing in ways that are simple, visual, and community-based.
              </p>
              <p className="mt-4 text-base leading-8 text-[#5A4633]">
                This website is designed as a demonstration and learning tool. It allows users to
                explore topics, understand key ideas, and interact with health concepts without needing
                a complex system or login.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E8DCC7] bg-[#FBEED6] p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2a1e]">Main purpose of this website</h3>
              <ul className="mt-5 space-y-4 text-[#5A4633]">
                <li>Explain health concepts in a simple and visual way</li>
                <li>Help users explore topics through interaction</li>
                <li>Present the Tree of Health framework</li>
                <li>Introduce the ESSENCE of Health model</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tree of Health */}
        <section className="mx-auto max-w-[1400px] px-6 py-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#3b2a1e] md:text-3xl">
              Tree of Health
            </h2>
            <p className="mt-3 max-w-4xl text-base leading-7 text-[#5A4633]">
              In this program, health is explained like a tree. A tree grows strong when it has good
              roots, a strong trunk, and healthy branches. In the same way, people stay well when
              different parts of life are supported together.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#E8DCC7] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2a1e]">Roots</h3>
              <p className="mt-3 text-base leading-7 text-[#5A4633]">
                The roots represent safety, support, access to care, and connection to culture,
                language, and traditions.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E8DCC7] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2a1e]">Trunk</h3>
              <p className="mt-3 text-base leading-7 text-[#5A4633]">
                The trunk represents our inner strength, including physical health, mental wellbeing,
                and emotional resilience.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E8DCC7] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3b2a1e]">Branches & Leaves</h3>
              <p className="mt-3 text-base leading-7 text-[#5A4633]">
                The branches and leaves represent knowledge, relationships, purpose, and healthy
                lifestyle choices.
              </p>
            </div>
          </div>
        </section>

        {/* ESSENCE */}
        <section className="mx-auto max-w-[1400px] px-6 py-14">
          <div className="rounded-3xl bg-[#4D1D00] px-8 py-10 text-[#FFE6BA] md:px-10">
            <h2 className="text-2xl font-bold md:text-3xl">
              From Tree of Health to ESSENCE
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-[#F9E6C5]">
              The Tree of Health leads into the ESSENCE of Health model, which explains seven important
              areas for health and healing: Education, Support, Spirituality, Exercise, Nutrition,
              Connectedness, and Environment.
            </p>
          </div>
        </section>

        {/* Audience */}
        <section className="mx-auto max-w-[1400px] px-6 pb-16">
          <div className="rounded-2xl border border-[#E8DCC7] bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-2xl font-bold text-[#3b2a1e] md:text-3xl">
              Who this website is for
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                "Women experiencing cancer and other health challenges",
                "Families and carers supporting loved ones",
                "Community members seeking health knowledge",
                "People looking for encouragement, support, and connection",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#E8DCC7] bg-[#FBEED6] p-5 text-sm leading-7 text-[#5A4633]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}