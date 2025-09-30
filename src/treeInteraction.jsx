import { useEffect, useRef, useState } from 'react'
import treeSvg from '/public/Tree2.svg?raw'

// 统一在这里配置各弹窗区域的内容

const REGION_INFO = {
  Yellow: {
    title: 'Knowledge',
    description: 'Having knowledge helps us find the right care. We learn what refugee and migrant support services offer, and we know how to use local medical and cancer screening services. If English is hard, we ask for translating/interpreter help. We can contact community navigators to guide us, and reach out to the Sisters Cancer Support Group and other services for emotional and practical support. We also attend community information sessions and workshops on healthy living and screening so we understand our choices and stay well.',
    images: ["/images/knowledge/knowledge1.png", "/images/knowledge/knowledge2.png", "/images/knowledge/knowledge3.png", "/images/knowledge/knowledge4.png"],
  },
  Blue: {
    title: 'Lifestyle Choices',
    description: 'Better lifestyle choices start with small, practical steps. Eat balanced meals with vegetables, fruit, whole grains, and protein, and drink water often. Move most days—walk, stretch, or do light exercise you enjoy. Keep a regular sleep time and create a calm bedtime routine. Make time to relax with deep breathing, prayer/meditation, or quiet hobbies. Stay connected with family, friends, and community groups. Learn about your illness and treatment plan, take medicines as advised, and ask your care team questions. These habits work together to support your wellness.',
    images: ["/images/life_choices/life_choices1.png", "/images/life_choices/life_choices2.png", "/images/life_choices/life_choices3.png", "/images/life_choices/life_choices4.png"],
  },
  Green: {
    title: 'Change & Growth',
    description: 'Accepting change means learning new, healthy habits and taking small steps every day. We build knowledge about food and choose more vegetables, fruit, whole grains, and water. We set simple daily routines—regular meals, movement, and enough sleep—and protect work/life balance by planning time for rest and family. When illness is present, we follow the care plan, ask questions, and notice what helps. As the body and mind change, we adjust gently, celebrating progress and asking for support when needed. Over time, these positive choices guide us from illness toward greater wellness.',
    images: ["/images/change_growth/change_growth1.png", "/images/change_growth/change_growth2.png", "/images/change_growth/change_growth3.png", "/images/change_growth/change_growth4.png"],
  },
  Red: {
    title: 'Relationship',
    description: 'Building relationships starts with connecting to safe, trustworthy people and knowing when to use professional services for guidance. We can join community groups that share our culture, language, or interests, and take part in activities and workshops to learn skills, find support, and meet new friends. Regular contact—checking in, sharing meals, volunteering, or attending classes—builds trust over time. These simple steps create a supportive network that improves confidence, wellbeing, and access to help when we need it.',
    images: ["/images/relationship/relationship1.png", "/images/relationship/relationship2.png", "/images/relationship/relationship3.png", "/images/relationship/relationship4.png"],
  },
  Orange: {
    title: 'Purpose',
    description: 'Having purpose means choosing what matters and moving toward it each day. We focus on getting well—following treatment, resting, eating well, and taking gentle activity. We draw strength from the love of family and friends, letting their care lift our spirits. We also nurture spiritual connection—through prayer, reflection, or quiet time—to find hope, courage, and peace. Together, these supports guide us forward with meaning.',
    images: ["/images/purpose/purpose1.png", "/images/purpose/purpose2.png", "/images/purpose/purpose3.png", "/images/purpose/purpose4.png"],
  },
  trunk1: {
    title: 'Physical Health',
    description: 'Healthy living is supported by consistent, evidence-based habits: consume balanced meals that emphasize vegetables, fruits, whole grains, and lean proteins; maintain adequate hydration; engage in regular physical activity; and keep a stable sleep-wake schedule. Foster emotional well-being by allocating time for enjoyable, restorative activities. For health protection, abstain from smoking—including shisha and vaping—and limit alcohol intake. Taken together, these practices improve energy, resilience, and overall health outcomes.',
    images: ["/images/physical_health/physical_health1.png", "/images/physical_health/physical_health2.png", "/images/physical_health/physical_health3.png", "/images/physical_health/physical_health4.png"],
  },
  trunk2: {
    title: 'Mental Wellbeing',
    description: 'Mental wellbeing grows with small, steady habits and the right support. We manage stress and anxiety with simple tools—slow breathing, brief walks, and talking to someone we trust. We keep a regular daily routine, balance work and home time, and protect healthy sleep by keeping the same bedtime and limiting screens late at night. We reach out to refugee and other local support services for practical help and safe advice. We also stay connected to caring people—family, friends, community groups, or faith leaders—so we feel understood and not alone.',
    images: ["/images/mental_wellbeing/mental_wellbeing1.png", "/images/mental_wellbeing/mental_wellbeing2.png", "/images/mental_wellbeing/mental_wellbeing3.png", "/images/mental_wellbeing/mental_wellbeing4.png"],
  },
  trunk3: {
    title: 'Emotional Resilience',
    description: 'Emotional resilience grows when we care for our spirit, mind, and connections. We can pray or meditate each day to find calm, and stay connected with church, mosque, or other faith services for comfort and guidance. When worries feel heavy, we seek professional help from a counselor or doctor. We also practise gratitude—pausing to notice small good moments, people who support us, and strengths inside us. These simple steps work together to steady our emotions and help us face hard times with courage.',
    images: ["/images/emotional_resilience/emotional_resilience1.png", "/images/emotional_resilience/emotional_resilience2.png", "/images/emotional_resilience/emotional_resilience3.png", "/images/emotional_resilience/emotional_resilience4.png"],
  },
  root1: {
    title: 'Spirituality & Cultural Connection',
    description: 'Spirituality can give calm, hope, and strength. We can stay connected with our church or mosque, speak with trusted religious leaders, and join services for guidance and community. We can also pray or meditate each day to quiet the mind and ease worries. Taking a moment to practise gratitude—writing or saying thanks for small blessings—helps us notice good things and feel more positive. Together, these simple steps support our hearts during difficult times.',
    images: [ "/images/cultural_connection/cultural_connection1.png", "/images/cultural_connection/cultural_connection2.png", "/images/cultural_connection/cultural_connection3.png", "/images/cultural_connection/cultural_connection4.png" ],
  },
  root2: {
    title: 'Community Support',
    description: 'Community and cultural support helps us feel understood and get the right help faster. We can contact local cultural community groups and ask a community navigator to guide us to services. Translators/interpreters make information clear in our own language. We can also connect with the Sisters Cancer Support Group and organisations such as MCCI and IMS for practical help, appointments, transport, and emotional support. Together, these trusted supports make care easier to find, respectful, and culturally safe.',
    images: [ "/images/community_support/community_support1.png", "/images/community_support/community_support2.png", "/images/community_support/community_support3.png", "/images/community_support/community_support4.png" ],
  },
  root3: {
    title: 'Safety',
    description: 'Safe support means asking for help from people who care and can be trusted. We reach out to family and friends to talk, share feelings, and get practical help. We also speak with trusted medical professionals for clear advice and treatment. This caring circle brings hope, builds trust, and gives us strength to face difficult situations. Knowing we are not alone makes challenges easier and safer to manage.',
    images: [ "/images/safety/safety1.png", "/images/safety/safety2.png", "/images/safety/safety3.png", "/images/safety/safety4.png" ],
  },
  root4: {
    title: 'Access To Care',
    description: 'Access to medical care starts with a good, understanding doctor who listens and explains clearly. When you go to appointments, bring a trusted family member or advocate to take notes and speak up for you. If English is hard, ask for a translator/interpreter so you understand every step. Learn where to book cancer screening (for example, breast, cervical, or bowel checks) and keep your appointments. Join community workshops on healthy living to learn about food, exercise, sleep, and local services. These simple actions help you get the right care, make informed choices, and feel supported.',
    images: [ "/images/access_care/access_care1.png", "/images/access_care/access_care2.png", "/images/access_care/access_care3.png", "/images/access_care/access_care4.png" ],
  },
}

export default function TreeInteraction() {
  const hostRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState(null)

  // 打开弹窗
  function handleRegion(id) {
    setActiveId(id)
    setOpen(true)
  }

  const DOT_COLORS = {
    yellow: '#F8BB25',
    orange: '#F8A11E',
    red: '#DC4119',
    blue: '#2A4584',
    green: '#6B9D1B',
    trunk: '#4D1D00',
    root: '#AE6014',
  }

  const Pill = ({ label, color, onClick }) => (
    <button
      onClick={onClick}
      className="group flex items-center gap-3 rounded-full bg-[#EFE4CE] w-55 h-12 justify-left px-4 text-[15px] font-semibold text-[#3b2a1e] shadow-sm transition hover:bg-[#e6d9be] focus:outline-none focus:ring-2 focus:ring-[#3b2a1e]/40"
    >
      <span
        className="inline-block h-3.5 w-3.5 rounded-full"
        style={{ backgroundColor: color }}
        aria-hidden
      />
      <span>{label}</span>
    </button>
  )

  const Section = ({ title, items }) => (
    <div className="space-y-3">
      <h3 className="mb-2 text-lg font-semibold text-[#3b2a1e]">{title}</h3>
      <div className="flex flex-col gap-3">
        {items.map((it) => (
          <Pill key={it.key}
            label={it.label}
            color={it.color}
            onClick={() => handleRegion(it.key)}
          />
        ))}
      </div>
    </div>
  )

  const LEFT_ITEMS_TOP = [
    { key: 'Orange',  label: 'Purpose',           color: DOT_COLORS.orange },
    { key: 'Yellow',  label: 'Knowledge',         color: DOT_COLORS.yellow },
    { key: 'Red',     label: 'Relationship',      color: DOT_COLORS.red },
    { key: 'Blue',    label: 'Lifestyle Choices', color: DOT_COLORS.blue },
    { key: 'Green',   label: 'Change & Growth',   color: DOT_COLORS.green },
  ]

  const RIGHT_ITEMS_TOP = [
    { key: 'trunk1', label: 'Physical Health',     color: DOT_COLORS.trunk },
    { key: 'trunk2', label: 'Mental Wellbeing',    color: DOT_COLORS.trunk },
    { key: 'trunk3', label: 'Emotional Resilience',color: DOT_COLORS.trunk },
  ]

  const RIGHT_ITEMS_BOTTOM = [
    { key: 'root3', label: 'Safety',        color: DOT_COLORS.root },
    { key: 'root1', label: 'Spirituality', color: DOT_COLORS.root },
    { key: 'root2', label: 'Community Support',   color: DOT_COLORS.root },
    { key: 'root4', label: 'Access To Care',color: DOT_COLORS.root },
  ]

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const ids = Object.keys(REGION_INFO)
    const selector = ids.map((id) => `#${id}`).join(', ')

    // 装饰可点击区域（可重复调用）
    const decorate = () => {
      ids.forEach((id) => {
        const el = host.querySelector(`#${id}`)
        if (!el) return
        el.style.cursor = 'pointer'
        el.setAttribute('role', 'button')
        el.setAttribute('tabindex', '0')
      })
    }

    // 初次装饰
    decorate()

    // 事件委托：只在容器上监听一次
    const onClick = (e) => {
      const target = e.target.closest(selector)
      if (target) {
        handleRegion(target.id)
      }
    }

    const onKeyDown = (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return
      const target = e.target.closest(selector)
      if (target) {
        e.preventDefault()
        handleRegion(target.id)
      }
    }

    host.addEventListener('click', onClick)
    host.addEventListener('keydown', onKeyDown)

    // 观察 SVG 变动（如果 React 重新注入 innerHTML，重新装饰）
    const observer = new MutationObserver(() => decorate())
    observer.observe(host, { childList: true, subtree: true })

    // ESC 关闭
    const onEsc = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onEsc)

    return () => {
      host.removeEventListener('click', onClick)
      host.removeEventListener('keydown', onKeyDown)
      observer.disconnect()
      document.removeEventListener('keydown', onEsc)
    }
  }, [])

  const info = activeId ? REGION_INFO[activeId] : null

  // 将本地相对路径转换为静态资源 URL；绝对链接保持原样
  const imgSrc = info?.img
    ? (/^https?:\/\//.test(info.img) ? info.img : new URL(info.img, import.meta.url).href)
    : null

  return (
    <>
      <div className="max-auto grid max-w-[1400px] grid-cols-[1fr_minmax(0,900px)_1fr] items-start gap-1 px-2">
        {/* 左侧面板 */}
        <div className="sticky top-60 hidden flex-col gap-8 self-start md:flex">
          <Section title="Branches & Leaves" items={LEFT_ITEMS_TOP} />
          {/* <Section title="Roots" items={LEFT_ITEMS_BOTTOM} /> */}
        </div>

        {/* 中间 SVG 树 */}
        <div className="tree-wrapper mx-auto w-full max-w-[900px]" ref={hostRef}
             dangerouslySetInnerHTML={{ __html: treeSvg }} />

        {/* 右侧面板 */}
        <div className="sticky top-60 hidden flex-col gap-8 self-start md:flex">
          <Section title="Trunk" items={RIGHT_ITEMS_TOP} />
          <Section title="Roots" items={RIGHT_ITEMS_BOTTOM} />
        </div>
      </div>

      {/* 弹窗 */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-[min(92vw,1000px)] max-h-[80vh] overflow-auto rounded-xl border-2 border-white bg-[#F7F2E2] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-[#3b2a1e]">
                  {info?.title ?? `区域：${activeId}`}
                </h2>
                {/*
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{info.body}</p>
                */}
              </div>
              <button
                onClick={() => setOpen(false)}
                className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#3b2a1e]"
                aria-label="关闭"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#3b2a1e" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            {/* 媒体与文本内容 */}
            <div className="mt-2 space-y-4 text-[#3b2a1e]">
              {/* 优先渲染 paragraphs 数组 */}
              {Array.isArray(info?.paragraphs) && info.paragraphs.length > 0 && (
                <div className="space-y-3">
                  {info.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-base leading-relaxed">{p}</p>
                  ))}
                </div>
              )}

              {/* 多图布局 */}
              {Array.isArray(info?.images) && info.images.length > 0 && (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {info.images.map((src, idx) => (
                    <img
                      key={idx}
                      src={/^https?:\/\//.test(src) ? src : new URL(src, import.meta.url).href}
                      alt={info?.title || activeId}
                      className="w-full max-w-[200px] rounded-md object-cover"
                    />
                  ))}
                </div>
              )}

              {/* 描述文本 */}
              {info?.description && !info?.paragraphs && (
                <p className="text-base leading-relaxed">{info.description}</p>
              )}
              
            </div>
          </div>
        </div>
      )}
    </>
  )
}