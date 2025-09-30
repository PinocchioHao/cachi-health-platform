export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white dark:bg-white">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
        <div className="flex items-center gap-4">
          {/* 左边版权信息 */}
          <p className="text-sm text-slate-500 dark:text-[#40301C]">
            © {new Date().getFullYear()} scsg. All rights reserved.
          </p>

          {/* 中间旗帜 */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6" className="h-6 w-auto">
              <rect width="10" height="6" fill="#c00" />
              <rect width="10" height="3" />
              <circle cx="5" cy="3" r="1.5" fill="#ff0" />
          </svg>

          <img src="/torres-strait-islands-flag.png" alt="Torres Strait Islander Flag" className="h-6 w-auto" />
        </div>

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