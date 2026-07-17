import React from "react";

interface LogoProps {
  className?: string; // Classes for container
  theme?: "light" | "dark"; // Choose text contrast
}

export default function Logo({ className = "flex items-center gap-2.5", theme = "light" }: LogoProps) {
  const logoImg = "https://lh3.googleusercontent.com/d/1LbOSYrr_Ioy6uZSGw9WhfilfkhZCzk_w";
  const textColor = theme === "dark" ? "text-white" : "text-gray-950";
  const subColor = theme === "dark" ? "text-gray-400" : "text-gray-500";
  
  return (
    <div id="dikdok-logo" className={`${className} select-none flex items-center gap-2.5`}>
      <img
        src={logoImg}
        alt="DIKDOK.ID Logo"
        className="h-9 sm:h-10 md:h-11 w-auto object-contain flex-shrink-0"
        referrerPolicy="no-referrer"
      />
      <div className="flex flex-col justify-center text-left leading-none">
        <span className={`text-sm sm:text-base md:text-lg font-black tracking-tight leading-none ${textColor}`}>
          DIKDOK HEALTHCARE
        </span>
        <span className={`text-[8px] sm:text-[9px] font-extrabold tracking-widest uppercase mt-1 leading-none ${subColor}`}>
          TRUST - GROWTH - IMPACT
        </span>
      </div>
    </div>
  );
}

