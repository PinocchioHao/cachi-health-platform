export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white dark:bg-white">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
        {/* 左边版权信息 */}
        <p className="text-sm text-slate-500 dark:text-[#40301C]">
          © {new Date().getFullYear()} scsg. All rights reserved.
        </p>

        {/* 右边链接 */}
        <nav className="flex gap-4 text-sm">
          <a
            href="/policy"
            className="text-slate-600 hover:text-slate-900 dark:text-[#40301C] dark:hover:text-[#40301C]"
          >
            Policy
          </a>
          <a
            href="/privacy"
            className="text-slate-600 hover:text-slate-900 dark:text-[#40301C] dark:hover:text-[#40301C]"
          >
            Privacy
          </a>
          <a
            href="/accessibility"
            className="text-slate-600 hover:text-slate-900 dark:text-[#40301C] dark:hover:text-[#40301C]"
          >
            Accessibility
          </a>
        </nav>
      </div>
    </footer>
  )
}