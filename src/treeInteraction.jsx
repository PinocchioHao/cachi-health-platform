import { useEffect, useRef, useState } from 'react'
import treeSvg from '/Tree2.svg?raw'

// 统一在这里配置各弹窗区域的内容
const REGION_INFO = {
  Yellow: {
    title: 'Learning about Health',
    bullets: [
      "See your doctor and ask questions or get translating services or community support workers to ask for you.",
      "Learn about cancer screening services",
      "Contact Sisters’ Cancer Support Group for information",
      "Go to community information sessions."
    ],
    images: [
      "/images/knowledge/knowledge1.png",
      "/images/knowledge/knowledge2.png",
      "/images/knowledge/knowledge3.png",
      "/images/knowledge/knowledge4.png"
    ],
  },

  Green: {
    title: 'Healthy Lifestyle Choices',
    bullets: [
      "Eat Healthy food",
      "Drink water",
      "Do exercise that you enjoy",
      "Get enough sleep & also make time to relax."
    ],
    images: [
      "/images/life_choices/life_choices1.png",
      "/images/life_choices/life_choices2.png",
      "/images/life_choices/life_choices3.png",
      "/images/life_choices/life_choices4.png"
    ],
  },

  // (Green / Change & Growth removed per feedback)

  Red: {
    title: 'Connecting with Family and Friends',
    bullets: [
      "Connect with people",
      "Join your cultural community activities or groups",
      "Enjoy time with family and friends.",
      "Ask for help when you need it."
    ],
    images: [
      "/images/relationship/relationship1.png",
      "/images/relationship/relationship2.png",
      "/images/relationship/relationship3.png",
      "/images/relationship/relationship4.png"
    ],
  },

  Orange: {
    title: 'Reasons to be Healthy',
    bullets: [
      "Looking after your health helps you to do things you enjoy; your health is important to you and your family.",
      "Eat healthier, exercise when you can, sleep enough, rest",
      "Enjoy time with yourself, family, friends & community.",
      "Pray or meditate, or spend time in Nature to find hope, peace & purpose."
    ],
    images: [
      "/images/purpose/purpose1.png",
      "/images/purpose/purpose2.png",
      "/images/purpose/purpose3.png",
      "/images/purpose/purpose4.png"
    ],
  },

  // Trunk sections
  trunk1: {
    title: 'Physical Health',
    bullets: [
      "Have regular daily habits - Eat healthy food, drink water, get enough sleep",
      "Move a little every day",
      "Do things you enjoy, have some fun.",
      "Do not smoke or vape, reduce alcohol, avoid sugary soft drink."
    ],
    images: [
      "/images/physical_health/physical_health1.png",
      "/images/physical_health/physical_health2.png",
      "/images/physical_health/physical_health3.png",
      "/images/physical_health/physical_health4.png"
    ],
  },

  trunk2: {
    title: 'Mental Wellbeing',
    bullets: [
      "Create a daily routine",
      "Talk to a friend, faith leader or professional.",
      "Pray, meditate and be grateful for good things in your life or spend time in nature",
      "Join in your community’s activities."
    ],
    images: [
      "/images/mental_wellbeing/mental_wellbeing1.png",
      "/images/mental_wellbeing/mental_wellbeing2.png",
      "/images/mental_wellbeing/mental_wellbeing3.png",
      "/images/mental_wellbeing/mental_wellbeing4.png"
    ],
  },

  trunk3: {
    title: 'Emotional Strength',
    bullets: [
      "We become stronger when we care for our body, mind & spirit each day",
      "Pray, meditate or be in nature.",
      "Talk to people you feel safe being when you are unhappy, Family or friends who are there to help you.",
      "Be thankful for small blessings."
    ],
    images: [
      "/images/emotional_resilience/emotional_resilience1.png",
      "/images/emotional_resilience/emotional_resilience2.png",
      "/images/emotional_resilience/emotional_resilience3.png",
      "/images/emotional_resilience/emotional_resilience4.png"
    ],
  },

  // Roots
  root1: {
    title: 'Faith and Cultural Connection',
    bullets: [
      "We need hope, purpose & strength",
      "Pray, meditate, spend time in nature.",
      "Be thankful for the good in your life.",
      "Join your community groups for activities."
    ],
    images: [
      "/images/cultural_connection/cultural_connection1.png",
      "/images/cultural_connection/cultural_connection2.png",
      "/images/cultural_connection/cultural_connection3.png",
      "/images/cultural_connection/cultural_connection4.png"
    ],
  },

  root2: {
    title: 'Community Support',
    bullets: [
      "Being connected to others gives us hope & a feeling of belonging.",
      "Use community support workers and interpreting services to help you communicate what you need.",
      "Contact Sisters’ Cancer Support Group or MCCI or IMS for help",
      "Join your community groups."
    ],
    images: [
      "/images/community_support/community_support1.png",
      "/images/community_support/community_support2.png",
      "/images/community_support/community_support3.png",
      "/images/community_support/community_support4.png"
    ],
  },

  root3: {
    title: 'Safety',
    bullets: [
      "Share your feelings with family and friends who are safe.",
      "Get support from community services",
      "Follow medical advice & treatment from your doctor or medical carers.",
      "Feeling supported will give you more strength."
    ],
    images: [
      "/images/safety/safety1.png",
      "/images/safety/safety2.png",
      "/images/safety/safety3.png",
      "/images/safety/safety4.png"
    ],
  },

  root4: {
    title: 'Access to Care',
    bullets: [
      "Find a doctor who is understanding, who listens and explains things clearly",
      "Bring a friend with you to appointments, they might take notes",
      "IF English is hard, ask for a translator",
      "Join community workshops on how to be healthy and learn where to book cancer screening tests."
    ],
    images: [
      "/images/access_care/access_care1.png",
      "/images/access_care/access_care2.png",
      "/images/access_care/access_care3.png",
      "/images/access_care/access_care4.png"
    ],
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
          className="flex items-start gap-3 rounded-full bg-[#EFE4CE] min-h-12 py-3 px-4 text-[15px] font-semibold text-[#3b2a1e] shadow-sm transition hover:bg-[#e6d9be] focus:outline-none focus:ring-2 focus:ring-[#3b2a1e]/40 text-left w-full"
      >
    <span
        className="mt-1 h-3.5 w-3.5 flex-shrink-0 rounded-full"
        style={{ backgroundColor: color }}
        aria-hidden
    />
        <span className="leading-snug break-words">
      {label}
    </span>
      </button>
  )


  const Section = ({title, items}) => (
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
    { key: 'Orange',  label: 'Reasons to be Healthy',           color: DOT_COLORS.orange },
    { key: 'Yellow',  label: 'Learning about Health',         color: DOT_COLORS.yellow },
    { key: 'Red',     label: 'Connecting with Family and Friends',      color: DOT_COLORS.red },
    { key: 'Green',    label: 'Healthy Lifestyle Choices', color: DOT_COLORS.green },
    // { key: 'Blue',    label: 'Healthy Lifestyle Choices', color: DOT_COLORS.blue },
    // { key: 'Green',   label: 'Change & Growth',   color: DOT_COLORS.green },
  ]

  const RIGHT_ITEMS_TOP = [
    { key: 'trunk1', label: 'Physical Health',     color: DOT_COLORS.trunk },
    { key: 'trunk2', label: 'Mental Wellbeing',    color: DOT_COLORS.trunk },
    { key: 'trunk3', label: 'Emotional Strength',color: DOT_COLORS.trunk },
  ]

  const RIGHT_ITEMS_BOTTOM = [
    { key: 'root3', label: 'Safety',        color: DOT_COLORS.root },
    { key: 'root1', label: 'Faith and Cultural Connection', color: DOT_COLORS.root },
    { key: 'root2', label: 'Community Support',   color: DOT_COLORS.root },
    { key: 'root4', label: 'Access to Care',color: DOT_COLORS.root },
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
                  {Array.isArray(info?.bullets) && (
                      <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                        {info.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                      </ul>
                  )}


                </div>
              </div>
            </div>
        )}
      </>
  )
}