import svgPaths from "./logo.ts";
import { Link } from "react-router";
import { useState } from "react";

function Logo() {
  return (
    <Link to="/" className="h-[40px] relative shrink-0 w-[92px]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 40">
        <g id="Logo">
          <path d={svgPaths.p2258e180} fill="var(--fill-0, #0144D4)" id="Vector" />
          <path d={svgPaths.p35607880} fill="var(--fill-0, #0245D5)" id="Vector_2" />
          <path d={svgPaths.p1e155b80} fill="var(--fill-0, #0044D5)" id="Vector_3" />
          <path d={svgPaths.p1c889dd0} fill="var(--fill-0, #0044D5)" id="Vector_4" />
          <path d={svgPaths.p27ef9780} fill="var(--fill-0, #0144D4)" id="Vector_5" />
          <path d={svgPaths.pc7b3e00} fill="var(--fill-0, #0044D5)" id="Vector_6" />
          <path d={svgPaths.pfb2cb80} fill="var(--fill-0, #0043D5)" id="Vector_7" />
          <path d={svgPaths.p268a8e00} fill="var(--fill-0, #0044D5)" id="Vector_8" />
          <path d={svgPaths.p3db5800} fill="var(--fill-0, #0044D5)" id="Vector_9" />
          <path d={svgPaths.p3eeb7c00} fill="var(--fill-0, #0043D5)" id="Vector_10" />
          <path d={svgPaths.p1629cc80} fill="var(--fill-0, #0043D5)" id="Vector_11" />
          <path d={svgPaths.p1752fa00} fill="var(--fill-0, #0043D5)" id="Vector_12" />
          <path d={svgPaths.p34e1c500} fill="var(--fill-0, #0044D5)" id="Vector_13" />
          <path d={svgPaths.p11148c00} fill="var(--fill-0, #0044D5)" id="Vector_14" />
          <path d={svgPaths.pca6a500} fill="var(--fill-0, #0043D5)" id="Vector_15" />
          <path d={svgPaths.p18baac00} fill="var(--fill-0, #0143D4)" id="Vector_16" />
          <path d={svgPaths.pa38bc80} fill="var(--fill-0, #0043D5)" id="Vector_17" />
          <path d={svgPaths.p3a4d0800} fill="var(--fill-0, #0043D5)" id="Vector_18" />
          <path d={svgPaths.p1ac4c500} fill="var(--fill-0, #0044D5)" id="Vector_19" />
          <path d={svgPaths.p2b3ce700} fill="var(--fill-0, #0043D5)" id="Vector_20" />
          <path d={svgPaths.p23d88500} fill="var(--fill-0, #0043D5)" id="Vector_21" />
          <path d={svgPaths.p1caeed80} fill="var(--fill-0, #0043D5)" id="Vector_22" />
          <path d={svgPaths.p340406c0} fill="var(--fill-0, #0043D4)" id="Vector_23" />
          <path d={svgPaths.p35a06f00} fill="var(--fill-0, #0045D5)" id="Vector_24" />
          <path d={svgPaths.p37615570} fill="var(--fill-0, #0144D5)" id="Vector_25" />
          <path d={svgPaths.p100f9e00} fill="var(--fill-0, #0144D4)" id="Vector_26" />
          <path d={svgPaths.p39f1d780} fill="var(--fill-0, #0143D5)" id="Vector_27" />
          <path d={svgPaths.p3411e400} fill="var(--fill-0, #0043D6)" id="Vector_28" />
          <path d={svgPaths.p31738d40} fill="var(--fill-0, #0044D6)" id="Vector_29" />
        </g>
      </svg>
    </Link>
  );
}

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/resources", label: "Resources" },
  { to: "/partners", label: "Partners" },
  { to: "/professional-development", label: "Professional Development" },
];

function Divider() {
  return (
    <div className="hidden md:flex h-[18px] items-center justify-center relative shrink-0 w-0">
      <div className="flex-none rotate-90">
        <div className="h-0 relative w-[18px]">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 2">
              <line id="Line 10" stroke="var(--stroke-0, #0144D5)" strokeLinecap="square" strokeWidth="2" x1="1" x2="17" y1="1" y2="1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] md:gap-[16px] lg:gap-[24px] items-center justify-center ml-0 mt-0 px-[8px] md:px-[16px] lg:px-[24px] relative row-1 flex-wrap">
      {navLinks.map((link, i) => (
        <>
          <Link
            key={link.to}
            to={link.to}
            className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[1.2] not-italic relative shrink-0 text-[#0144d5] text-[12px] md:text-[16px] lg:text-[18px] text-center no-underline hover:opacity-80 transition-opacity"
          >
            <p className="leading-[1.2] break-words">{link.label}</p>
          </Link>
          {i < navLinks.length - 1 && <Divider key={`divider-${i}`} />}
        </>
      ))}
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame />
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[40px] items-start justify-end min-h-px min-w-px relative" data-name="Nav">
      <div aria-hidden="true" className="absolute border-[#face35] border-b-3 border-l-3 border-solid top-0 right-0 bottom-0 left-[40px] pointer-events-none" />
      <Group />
    </div>
  );
}

export default function SharedHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden w-full relative z-50">
        <div className="bg-white content-stretch flex items-center justify-between px-[30px] py-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)]" data-name="Header">
          <Logo />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="h-[50px] relative shrink-0 w-[70px] bg-transparent border-none p-0 cursor-pointer"
          >
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 50">
              <g id="Frame 2">
                <rect height="49" rx="4.5" stroke="var(--stroke-0, #CECECE)" width="69" x="0.5" y="0.5" />
                {menuOpen ? (
                  // X icon when open
                  <>
                    <path d="M22 16L48 34" stroke="var(--stroke-0, #CECECE)" strokeWidth="3" strokeLinecap="round" />
                    <path d="M48 16L22 34" stroke="var(--stroke-0, #CECECE)" strokeWidth="3" strokeLinecap="round" />
                  </>
                ) : (
                  // Hamburger icon when closed
                  <>
                    <path d="M20 15H50" stroke="var(--stroke-0, #CECECE)" strokeWidth="3" />
                    <path d="M20 25H50" stroke="var(--stroke-0, #CECECE)" strokeWidth="3" />
                    <path d="M20 35H50" stroke="var(--stroke-0, #CECECE)" strokeWidth="3" />
                  </>
                )}
              </g>
            </svg>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] border-l-[6px] border-l-[#face35] z-50">
            <nav className="flex flex-col py-[10px]">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="font-['Poppins',sans-serif] text-[#0144d5] text-[20px] font-bold no-underline px-[30px] py-[18px] hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block bg-white relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.2)] shrink-0 w-full" data-name="Header">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[20px] md:px-[50px] py-[20px] relative size-full">
            <Logo />
            <Nav />
          </div>
        </div>
      </div>
    </>
  );
}