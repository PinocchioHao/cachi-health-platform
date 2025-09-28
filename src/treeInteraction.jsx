import { useEffect, useRef, useState } from 'react'
import treeSvg from './assets/Tree2.svg?raw'

// 统一在这里配置各弹窗区域的内容

const REGION_INFO = {
  yellow: {
    title: 'Knowledge',
    body: 'Here are the descriptions for the yellow regions.',
    img: null, 
  },
  blue: {
    title: 'Lifestyle Choices',
    body: 'Here are the descriptions for the blue regions.',
    img: null,
  },
  green: {
    title: 'Change & Growth',
    body: 'Here are the descriptions for the green regions.',
    img: null,
  },
  red: {
    title: 'Relationship',
    body: 'Here are the descriptions for the red regions.',
    img: null,
  },
  orange: {
    title: 'Purpose',
    body: 'Here are the descriptions for the orange regions.',
    img: null,
  },
  trunk1: {
    title: 'Physical Health',
    body: 'Description for trunk segment 1.',
    img: null,
  },
  trunk2: {
    title: 'Mental Wellbeing',
    body: 'Description for trunk segment 2.',
    img: null,
  },
  trunk3: {
    title: 'Emotional Resilience',
    body: 'Description for trunk segment 3.',
    img: null,
  },
  root1: {
    title: 'Cultural Connection',
    body: 'Description for root segment 1.',
    img: null,
  },
  root2: {
    title: 'Community Support',
    body: 'Description for root segment 2.',
    img: null,
  },
  root3: {
    title: 'Safety',
    body: 'Description for root segment 3.',
    img: null,
  },
  root4: {
    title: 'Access To Care',
    body: 'Description for root segment 4.',
    img: null,
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
      {/* SVG 容器 */}
      <div
        ref={hostRef}
        className="tree-wrapper mx-auto w-full max-w-[900px]"
        dangerouslySetInnerHTML={{ __html: treeSvg }}
      />

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
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {info.images.map((src, idx) => (
                    <img
                      key={idx}
                      src={/^https?:\/\//.test(src) ? src : new URL(src, import.meta.url).href}
                      alt={info?.title || activeId}
                      className="w-full rounded-md object-cover"
                    />
                  ))}
                </div>
              )}

              {/* 兼容旧的单图与单段文字 */}
              {info?.body && !info?.paragraphs && (
                <p className="text-base leading-relaxed">{info.body}</p>
              )}
              {info?.img && !info?.images && (
                <img
                  src={/^https?:\/\//.test(info.img) ? info.img : new URL(info.img, import.meta.url).href}
                  alt={info?.title || activeId}
                  className="w-full rounded-md object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}