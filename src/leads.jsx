import { useState } from "react";

const topics = [
  {
    id: "education",
    label: "Education",
    icon: "src/assets/icons/education.svg",
    image: "/images/education.png",
    description: "Education empowers individuals with knowledge and skills for better health.",
  },
  {
    id: "support",
    label: "Support & Stress Management",
    icon: "src/assets/icons/support.svg",
    image: "/images/stress.png",
    description: "Effective stress management and emotional support improve resilience.",
  },
  {
    id: "spiritual",
    label: "Spiritual Wellbeing",
    icon: "src/assets/icons/spiritual.svg",
    image: "/images/spiritual.png",
    description: "Spiritual wellbeing brings peace, meaning, and balance into life.",
  },
  {
    id: "exercise",
    label: "Exercise",
    icon: "src/assets/icons/exercise.svg",
    image: "/images/exercise.png",
    description: "Regular exercise strengthens the body and boosts mental health.",
  },
  {
    id: "nutrition",
    label: "Nutrition",
    icon: "src/assets/icons/nutrition.svg",
    image: "/images/nutrition.png",
    description: "Balanced nutrition provides essential energy and supports long-term health.",
  },
  {
    id: "connectedness",
    label: "Connectedness",
    icon: "src/assets/icons/connectedness.svg",
    image: "/images/connectedness.png",
    description: "Human connections foster belonging, reduce isolation, and improve wellbeing.",
  },
  {
    id: "environment",
    label: "Environment",
    icon: "src/assets/icons/environment.svg",
    image: "/images/environment.png",
    description: "A safe and healthy environment nurtures physical and emotional health.",
  },
];

export default function EssenceSection() {
  const [active, setActive] = useState(topics[0].id);

  const selected = topics.find((t) => t.id === active);

  return (
    <section className="py-12 bg-[#FBEED6]">
      {/* 上方按钮 */}
      <div className="flex flex-wrap justify-center gap-4 mb-10 mx-auto max-w-7xl">
        {topics.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            aria-pressed={active === t.id}
            className={`rounded-xl p-4 w-42 h-32 flex flex-col justify-center items-center transition ${
              active === t.id
                ? "bg-[#4A210A] text-[#FBEED6]"
                : "bg-[#EAD4B0] text-[#4A210A] hover:bg-[#D9C09C]"
            }`}
          >
            {t.icon && (
              <img src={t.icon} alt="" className="h-10 w-10 pointer-events-none mb-2" />
            )}
            <span className="text-base font-semibold text-center leading-snug">
              {t.label}
            </span>
          </button>
        ))}
        
      </div>

      {/* 下方展示区 */}
      {selected && (
        <div className="max-w-3xl mx-auto text-center">
          <img
            src={selected.image}
            alt={selected.label}
            className="mx-auto mb-6 w-60 h-60 object-contain"
          />
          <p className="text-xl text-[#4A210A] font-medium leading-relaxed">
            {selected.description}
          </p>
        </div>
      )}
    </section>
  );
}