// Header
import { useEffect, useRef, useState } from "react";

export default function LaptopHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [setProfileOpen] = useState(false);
    const profileBtnRef = useRef(null);


    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") {
                setMenuOpen(false);
                setProfileOpen(false);
            }
        }
        function onClick(e) {
            if (!profileBtnRef.current) return;
            if (!profileBtnRef.current.parentElement.contains(e.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener("keydown", onKey);
        document.addEventListener("click", onClick);
        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("click", onClick);
        };
    }, []);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white">
            <div className="mx-auto flex h-24 max-w-[1400px] items-center gap-4 px-4 lg:h-24">
                {/* 左侧：Logo */}
                <div className="flex min-w-0 items-center gap-3 flex-1 justify-center lg:justify-start">
                    <img src="/logo.png" alt="Logo" className="h-15 w-auto" />
                </div>

                {/* 主导航 */}
                <div className="flex min-w-0 items-center gap-3">

                    {/* 桌面主导航 */}
                    <nav
                        aria-label="Primary"
                        className="ml-2 hidden shrink-0 lg:block"
                    >
                        <ul className="flex items-center gap-1">
                            {[
                                ["About us", "/About us"],
                                ["Support & services", "/Support & services"],
                                ["Get involved", "/Get involved"],
                                ["Events", "/Events"],
                                ["News", "/News"],
                            ].map(([label, href]) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-[#40301C] dark:hover:bg-[#F7F2E2] dark:hover:text-[#40301C]"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    );
}