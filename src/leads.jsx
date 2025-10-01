import { useState } from "react";

const topics = [
  {
    id: "education",
    label: "Education",
    icon: "/icons/education.svg",
    images: ["/images/education/education1.png", "/images/education/education2.png", "/images/education/education3.png", "/images/education/education4.png"],
    description: "We learn together about cancer and how to care for ourselves. Regular check-ups and screening can find problems early. If treatment like chemotherapy is needed, the care team will explain what to expect and how to manage side effects. Healthy habits—eating balanced meals, walking in the sun, washing hands, taking medicines on time, and not smoking—keep our bodies stronger. Talking with family, joining support groups, and asking questions help us understand our choices and feel confident. Sharing simple, clear information in our own languages helps everyone feel informed and strong.",
  },
  {
    id: "support",
    label: "Support & Stress Management",
    icon: "/icons/support.svg",
    images: ["/images/support_stress/support_stress_management1.png", "/images/support_stress/support_stress_management2.png", "/images/support_stress/support_stress_management3.png", "/images/support_stress/support_stress_management4.png"],
    description: "We meet in a calm, welcoming place where patients and carers can sit together, talk openly, and feel safe. Everyone is respected, and what we share stays private. We listen to each other's stories, ask questions, and offer simple, practical help. By sharing worries and tips, the stress feels lighter and we remember that we are not alone. This safe space helps us feel supported, hopeful, and stronger—together.",
  },
  {
    id: "spiritual",
    label: "Spiritual Wellbeing",
    icon: "/icons/spiritual.svg",
    images: ["/images/spiritual_wellbeing/spiritual_wellbeing1.png", "/images/spiritual_wellbeing/spiritual_wellbeing2.png", "/images/spiritual_wellbeing/spiritual_wellbeing3.png", "/images/spiritual_wellbeing/spiritual_wellbeing4.png"],
    description: "In our group, everyone's faith and beliefs are welcomed and respected. We sit together in peace—some pray, some reflect quietly, others simply listen—and we support one another without judgment. Spiritual strength, whether through prayer, meditation, or kind words, helps calm the mind, ease fear, and give courage. By honoring each person's path, we create a gentle space of hope and comfort during hard times.",
  },
  {
    id: "exercise",
    label: "Exercise",
    icon: "/icons/exercise.svg",
    images: ["/images/exercise/exercise1.png", "/images/exercise/exercise2.png", "/images/exercise/exercise3.png", "/images/exercise/exercise4.png"],
    description: "Gentle movement—such as slow walking, light stretching, or chair exercises—helps the body feel better and recover. We can start small, at our own pace, and build a daily habit by moving for a few minutes many times a day. Simple steps like breathing calmly, drinking water, and resting when needed keep us safe. If we have pain or a medical condition, we check with our care team first. Every small action supports healing and strength—every move counts.",
  },
  {
    id: "nutrition",
    label: "Nutrition",
    icon: "/icons/nutrition.svg",
    images: ["/images/nutrition/nutrition1.png", "/images/nutrition/nutrition2.png", "/images/nutrition/nutrition3.png", "/images/nutrition/nutrition4.png"],
    description: "We share simple ideas about healthy foods that help the body stay strong, heal, and feel well. A balanced plate can include vegetables and fruit, whole grains (like brown rice or whole-meal bread), and protein foods such as beans, lentils, fish, eggs, or lean meat. Choose healthy oils in small amounts, drink plenty of water, and limit sugary drinks and fried or very salty foods. We can use familiar, affordable ingredients from our own cultures and cook them in healthier ways—grilling, steaming, or baking. Small, everyday choices add up to better energy, faster recovery, and a happier tummy.",
  },
  {
    id: "connectedness",
    label: "Connectedness",
    icon: "/icons/connectedness.svg",
    images: ["/images/connectedness/connectedness1.png", "/images/connectedness/connectedness2.png", "/images/connectedness/connectedness3.png", "/images/connectedness/connectedness4.png"],
    description: "We come together in a calm, welcoming group where patients and carers feel safe, respected, and listened to. We share experiences, learn simple tips, and help each other find services and support. Friendly conversations, regular meet-ups, and staying in touch make daily challenges feel lighter. In this caring community, no one is alone—connection brings comfort, confidence, and happiness.",
  },
  {
    id: "environment",
    label: "Environment",
    icon: "/icons/environment.svg",
    images: ["/images/environment/environment1.png", "/images/environment/environment2.png", "/images/environment/environment3.png", "/images/environment/environment4.png"],
    description: "We learn together how air, water, and home conditions affect health. Clean air—away from smoke and dust—protects the lungs. Safe water—treated, boiled, or filtered—prevents illness. A healthy home has good ventilation, dry rooms without mold, safe food storage, covered rubbish, and careful use of cleaning products. Small daily actions in these areas keep everyone safer and well.",
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
              <img
                src={t.icon}
                alt=""
                className={`h-10 w-auto pointer-events-none mb-2 transition ${
                  active === t.id ? "invert brightness-0" : ""
                }`}
              />
            )}
            <span className="text-base font-semibold text-center leading-snug">
              {t.label}
            </span>
          </button>
        ))}
        
      </div>

      {/* 下方展示区 */}
      {selected && (
        <div className="max-w-7xl mx-auto text-center px-3">
          <div className="flex flex-wrap justify-center gap-12 mb-6">
            {selected.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${selected.label} ${index + 1}`}
                className="w-60 h-60 object-contain"
              />
            ))}
          </div>
          <p className="max-w-8xl mx-auto text-xl text-[#4A210A] font-medium leading-relaxed">
            {selected.description}
          </p>
        </div>
      )}
    </section>
  );
}