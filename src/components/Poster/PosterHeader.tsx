import React from 'react';
import type { Fixture } from '../../types/fixture';
import altLiglerLogo from '../../../assets/AltLigler.png';
import logo1Lig from '../../../assets/logo1.lig.png';

interface PosterHeaderProps {
  week: number;
  season?: string;
  leagueName?: string;
  matches: Fixture[];
}

export const PosterHeader: React.FC<PosterHeaderProps> = ({
  week,
  season = '2026-2027',
  leagueName = 'TRENDYOL 1. LİG',
  matches,
}) => {
  // Determine if the week is mostly played or upcoming
  const playedCount = matches.filter((m) => m.status === 'played').length;
  const isMostlyPlayed = playedCount >= Math.max(1, matches.length / 2);

  const headlineText = isMostlyPlayed ? 'HAFTANIN SONUÇLARI' : 'HAFTANIN FİKSTÜRÜ';

  return (
    <div className="w-full flex flex-col items-center justify-center relative z-10 mb-0 pt-1">
      {/* Top Header Row with Official Brand & League Logos */}
      <div className="w-full flex items-center justify-between px-2 mb-2">
        {/* Left: Alt Ligler Official Logo */}
        <div className="flex items-center gap-3">
          <img
            src={altLiglerLogo}
            alt="Alt Ligler Logo"
            className="h-20 w-auto object-contain drop-shadow-[0_4px_20px_rgba(0,175,175,0.45)]"
          />
        </div>

        {/* Right: Trendyol 1. Lig Official Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo1Lig}
            alt="Trendyol 1. Lig Logo"
            className="h-24 w-auto object-contain drop-shadow-[0_4px_20px_rgba(255,101,0,0.4)]"
          />
        </div>
      </div>

      {/* Main Editorial Headline Block */}
      <div className="flex flex-col items-center text-center w-full mt-1">
        {/* Subtitle - Competition Identity */}
        <span className="text-2xl font-black font-montserrat tracking-[0.25em] text-[#00AFAF] uppercase drop-shadow mb-1">
          {leagueName}
        </span>

        {/* Big Editorial Display Headline */}
        <h1 className="text-7xl font-black font-bebas tracking-wider text-white uppercase leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] my-1">
          {headlineText}
        </h1>

        {/* Thin Glowing Accent Line */}
        <div className="w-80 h-[2px] bg-gradient-to-r from-transparent via-[#00AFAF] to-transparent my-1.5 opacity-90" />

        {/* Week & Season Sub-Headline Badge */}
        <div className="flex items-center gap-2.5 text-sm font-mono font-black tracking-[0.25em] text-cyan-200 uppercase bg-[#072430]/90 px-4 py-1 rounded-full border border-cyan-500/40 shadow-md">
          <span className="text-[#FF6500] font-black">{week}. HAFTA</span>
          <span className="text-cyan-500/60">•</span>
          <span>{season} SEZONU</span>
        </div>
      </div>
    </div>
  );
};




