import { Link, useLocation } from "react-router-dom";

export default function LaptopHeader() {
  const location = useLocation();

  const navItems = [
    ["About us", "/about"],
    ["Support & services", "/support"],
    ["Get involved", "/involved"],
    ["ESSENCE", "/essence"],
    ["Videos", "/video"],
    
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white">
      <div className="mx-auto flex h-24 max-w-[1400px] items-center gap-6 px-4">
        <div className="flex flex-1 items-center justify-center lg:justify-start">
          <Link to="/" className="inline-flex items-center">
            <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
          </Link>
        </div>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-2">
            {navItems.map(([label, path]) => {
              const isActive = location.pathname === path;

              return (
                <li key={path}>
                  <Link
                    to={path}
                    className={`rounded-md px-3 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isActive
                        ? "bg-[#F7F2E2] text-[#4D1D00]"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}