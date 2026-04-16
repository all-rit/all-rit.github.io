import svgPaths from "./svg-9idtbe1ivc";

function Logo() {
  return (
    <div className="h-[78px] relative shrink-0 w-[180px]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 78">
        <g id="Logo">
          <path d={svgPaths.p28656200} fill="var(--fill-0, #0144D4)" id="Vector" />
          <path d={svgPaths.p3346e400} fill="var(--fill-0, #0245D5)" id="Vector_2" />
          <path d={svgPaths.p1eb9a080} fill="var(--fill-0, #0044D5)" id="Vector_3" />
          <path d={svgPaths.p2d26a100} fill="var(--fill-0, #0044D5)" id="Vector_4" />
          <path d={svgPaths.p3e906ef0} fill="var(--fill-0, #0144D4)" id="Vector_5" />
          <path d={svgPaths.p372e42f0} fill="var(--fill-0, #0044D5)" id="Vector_6" />
          <path d={svgPaths.p1e5ff340} fill="var(--fill-0, #0043D5)" id="Vector_7" />
          <path d={svgPaths.p10738370} fill="var(--fill-0, #0044D5)" id="Vector_8" />
          <path d={svgPaths.p2b917200} fill="var(--fill-0, #0044D5)" id="Vector_9" />
          <path d={svgPaths.p12908c00} fill="var(--fill-0, #0043D5)" id="Vector_10" />
          <path d={svgPaths.p16edf4b0} fill="var(--fill-0, #0043D5)" id="Vector_11" />
          <path d={svgPaths.p2e8d7900} fill="var(--fill-0, #0043D5)" id="Vector_12" />
          <path d={svgPaths.pc6cf480} fill="var(--fill-0, #0044D5)" id="Vector_13" />
          <path d={svgPaths.pff45480} fill="var(--fill-0, #0044D5)" id="Vector_14" />
          <path d={svgPaths.p1d335100} fill="var(--fill-0, #0043D5)" id="Vector_15" />
          <path d={svgPaths.p3c50ffb0} fill="var(--fill-0, #0143D4)" id="Vector_16" />
          <path d={svgPaths.p23e6c680} fill="var(--fill-0, #0043D5)" id="Vector_17" />
          <path d={svgPaths.p1fe74700} fill="var(--fill-0, #0043D5)" id="Vector_18" />
          <path d={svgPaths.p25495600} fill="var(--fill-0, #0044D5)" id="Vector_19" />
          <path d={svgPaths.p32769880} fill="var(--fill-0, #0043D5)" id="Vector_20" />
          <path d={svgPaths.p2ad1c780} fill="var(--fill-0, #0043D5)" id="Vector_21" />
          <path d={svgPaths.p345e7a00} fill="var(--fill-0, #0043D5)" id="Vector_22" />
          <path d={svgPaths.pc878940} fill="var(--fill-0, #0043D4)" id="Vector_23" />
          <path d={svgPaths.p1529300} fill="var(--fill-0, #0045D5)" id="Vector_24" />
          <path d={svgPaths.p2e697800} fill="var(--fill-0, #0144D5)" id="Vector_25" />
          <path d={svgPaths.p46c6e80} fill="var(--fill-0, #0144D4)" id="Vector_26" />
          <path d={svgPaths.pa548b80} fill="var(--fill-0, #0143D5)" id="Vector_27" />
          <path d={svgPaths.p388d7d00} fill="var(--fill-0, #0043D6)" id="Vector_28" />
          <path d={svgPaths.p31469c00} fill="var(--fill-0, #0044D6)" id="Vector_29" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[50px] relative shrink-0 w-[70px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 50">
        <g id="Frame 2">
          <rect height="49" rx="4.5" stroke="var(--stroke-0, #CECECE)" width="69" x="0.5" y="0.5" />
          <path d="M20 15H50" id="Vector 1" stroke="var(--stroke-0, #CECECE)" strokeWidth="3" />
          <path d="M20 25H50" id="Vector 2" stroke="var(--stroke-0, #CECECE)" strokeWidth="3" />
          <path d="M20 35H50" id="Vector 3" stroke="var(--stroke-0, #CECECE)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[30px] py-[20px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] size-full" data-name="Header">
      <Logo />
      <Frame />
    </div>
  );
}