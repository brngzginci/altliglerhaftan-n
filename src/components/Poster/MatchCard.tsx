import React from 'react';
import type { Fixture } from '../../types/fixture';
import { TeamLogo } from './TeamLogo';

interface MatchCardProps {
  fixture: Fixture;
  index?: number;
  compact?: boolean;
}

export const MatchCard: React.FC<MatchCardProps> = ({ fixture, compact = false }) => {
  const {
    status,
    homeTeam,
    awayTeam,
    homeScore,
    awayScore,
    halfTimeHomeScore,
    halfTimeAwayScore,
    date,
    time,
  } = fixture;

  const isPlayed = status === 'played';
  const isLive = status === 'live';
  const isFixture = status === 'fixture';
  const isPostponed = status === 'postponed';
  const isCancelled = status === 'cancelled';
  const isBye = status === 'bye' || fixture.isBye || awayTeam?.name?.trim().toUpperCase() === 'BAY' || homeTeam?.name?.trim().toUpperCase() === 'BAY';

  // Format kickoff time (preserves authentic kickoff time, handles HH:mm and HH:mm:ss without artificial shift)
  const formatKickoffTime = (timeStr: string | undefined): string => {
    if (!timeStr) return '--:--';
    const trimmed = timeStr.trim();
    const match = trimmed.match(/^(\d{1,2}):(\d{2})/);
    if (!match) return trimmed;
    const hours = parseInt(match[1], 10);
    const minutes = match[2];
    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    return `${formattedHours}:${minutes}`;
  };

  const displayTime = formatKickoffTime(time);

  // Format date e.g. "2026-08-07" -> "07 AĞUSTOS"
  const formatDateStr = (rawDate: string): string => {
    if (!rawDate) return '';
    const parts = rawDate.split('-');
    if (parts.length === 3) {
      const monthNames = [
        'OCAK',
        'ŞUBAT',
        'MART',
        'NİSAN',
        'MAYIS',
        'HAZİRAN',
        'TEMMUZ',
        'AĞUSTOS',
        'EYLÜL',
        'EKİM',
        'KASIM',
        'ARALIK',
      ];
      const monthIdx = parseInt(parts[1], 10) - 1;
      const monthStr = monthNames[monthIdx] || parts[1];
      return `${parts[2]} ${monthStr}`;
    }
    return rawDate;
  };

  const formattedDate = formatDateStr(date);

  // Dedicated BAY card rendering (when a team has a bye week)
  if (isBye) {
    const byeTeam = homeTeam.name?.trim().toUpperCase() === 'BAY' ? awayTeam : homeTeam;
    return (
      <div
        className={`relative w-full h-full rounded-xl bg-gradient-to-r from-[#061d28]/95 via-[#0b2938]/95 to-[#061d28]/95 border border-cyan-400/40 shadow-xl flex items-center justify-between overflow-hidden transition-all ${
          compact ? 'p-2.5 px-4' : 'p-3.5 px-5'
        }`}
      >
        {/* Left Accent Bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 to-[#FF6500] shadow-[0_0_10px_#00afaf]" />

        {/* Team Identity */}
        <div className="flex items-center gap-3 min-w-0 z-10">
          <TeamLogo team={byeTeam} size={compact ? 42 : 48} />
          <div className="flex flex-col">
            <span
              className={`font-montserrat uppercase tracking-tight text-white font-black leading-snug line-clamp-1 ${
                compact ? 'text-xs' : 'text-sm'
              }`}
              title={byeTeam.name}
            >
              {byeTeam.name}
            </span>
            <span className="text-[10px] text-cyan-300/80 font-mono tracking-wider uppercase font-semibold">
              HAFTALIK FİKSTÜR
            </span>
          </div>
        </div>

        {/* BAY Badge & Status */}
        <div className="flex items-center gap-2 z-10">
          <div className="flex flex-col items-end">
            <div className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/60 flex items-center gap-1.5 shadow-[0_0_12px_rgba(0,175,175,0.3)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-black tracking-widest text-cyan-300 font-mono uppercase">
                BAY GEÇİYOR
              </span>
            </div>
            <span className="text-[9px] text-slate-400 font-mono mt-1 tracking-wider uppercase">
              BU HAFTA MAÇI YOK
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Winner highlights
  const homeIsWinner = isPlayed && homeScore !== null && awayScore !== null && homeScore > awayScore;
  const awayIsWinner = isPlayed && homeScore !== null && awayScore !== null && awayScore > homeScore;

  // Determine logo size dynamically based on compactness
  const logoSize = compact ? 42 : 48;

  return (
    <div
      className={`relative w-full h-full rounded-xl bg-gradient-to-br from-[#061A22]/95 via-[#092633]/95 to-[#041219]/98 border border-cyan-500/35 shadow-xl flex flex-col justify-between overflow-hidden transition-all group ${
        compact ? 'p-2.5' : 'p-3.5'
      }`}
    >
      {/* Side Orange Winner Accent Strip */}
      {homeIsWinner && (
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FF6500] shadow-[0_0_12px_#FF6500]" />
      )}
      {awayIsWinner && (
        <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#FF6500] shadow-[0_0_12px_#FF6500]" />
      )}

      {/* Main Teams & Score Broadcast Panel */}
      <div className="flex items-center justify-between w-full gap-2 relative z-10 my-auto">
        {/* Home Team */}
        <div className="flex items-center gap-2 flex-1 min-w-0 justify-end text-right">
          <span
            className={`font-montserrat uppercase tracking-tight leading-snug line-clamp-2 ${
              compact ? 'text-xs' : 'text-sm'
            } ${
              homeIsWinner
                ? 'text-[#FF6500] font-black drop-shadow-[0_0_8px_rgba(255,101,0,0.5)]'
                : 'text-white font-extrabold'
            }`}
            title={homeTeam.name}
          >
            {homeTeam.name}
          </span>
          <TeamLogo team={homeTeam} size={logoSize} />
        </div>

        {/* Score / Status Center Panel */}
        <div className="flex flex-col items-center justify-center flex-shrink-0 min-w-[84px] px-1 py-0.5">
          {isPlayed && (
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-1.5 font-bebas tracking-wider leading-none">
                <span
                  className={`text-5xl font-black ${
                    homeIsWinner
                      ? 'text-[#FF6500] drop-shadow-[0_0_12px_rgba(255,101,0,0.6)]'
                      : 'text-white'
                  }`}
                >
                  {homeScore ?? 0}
                </span>
                <span className="text-cyan-400/60 text-xl font-sans font-bold px-0.5">-</span>
                <span
                  className={`text-5xl font-black ${
                    awayIsWinner
                      ? 'text-[#FF6500] drop-shadow-[0_0_12px_rgba(255,101,0,0.6)]'
                      : 'text-white'
                  }`}
                >
                  {awayScore ?? 0}
                </span>
              </div>

              {halfTimeHomeScore !== null && halfTimeAwayScore !== null && (
                <span className="text-[10px] font-mono font-bold text-cyan-300 mt-1 tracking-wider uppercase">
                  İY {halfTimeHomeScore}-{halfTimeAwayScore}
                </span>
              )}
            </div>
          )}

          {isLive && (
            <div className="flex flex-col items-center gap-1">
              <span className="bg-red-600 text-white font-black text-[10px] px-2.5 py-0.5 rounded-full animate-pulse tracking-widest font-mono shadow-sm shadow-red-600/50">
                ● CANLI
              </span>
              <div className="flex items-center gap-1.5 font-bebas text-4xl text-[#FF6500] font-black leading-none">
                <span>{homeScore ?? 0}</span>
                <span className="text-cyan-400/60 text-lg font-sans">-</span>
                <span>{awayScore ?? 0}</span>
              </div>
            </div>
          )}

          {isFixture && (
            <div className="flex flex-col items-center leading-none">
              <span className="text-base font-black font-bebas tracking-widest text-cyan-300">
                VS
              </span>
              <span className="text-3xl font-black font-bebas text-[#FF6500] mt-1 drop-shadow-[0_0_10px_rgba(255,101,0,0.5)]">
                {displayTime}
              </span>
            </div>
          )}

          {isPostponed && (
            <span className="bg-orange-950/90 text-orange-400 border border-orange-500/50 font-black text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-mono">
              ERTELENDİ
            </span>
          )}

          {isCancelled && (
            <span className="bg-red-950/90 text-red-400 border border-red-500/50 font-black text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-mono">
              İPTAL
            </span>
          )}

          {status === 'unknown' && (
            <span className="text-xs text-cyan-400/60 font-mono font-semibold">
              -- : --
            </span>
          )}
        </div>

        {/* Away Team */}
        <div className="flex items-center gap-2 flex-1 min-w-0 justify-start text-left">
          <TeamLogo team={awayTeam} size={logoSize} />
          <span
            className={`font-montserrat uppercase tracking-tight leading-snug line-clamp-2 ${
              compact ? 'text-xs' : 'text-sm'
            } ${
              awayIsWinner
                ? 'text-[#FF6500] font-black drop-shadow-[0_0_8px_rgba(255,101,0,0.5)]'
                : 'text-white font-extrabold'
            }`}
            title={awayTeam.name}
          >
            {awayTeam.name}
          </span>
        </div>
      </div>

      {/* Date & Time Technical Bottom Ribbon (Only for unplayed/upcoming fixtures) */}
      {!isPlayed && (
        <div className="w-full text-center mt-2 pt-1.5 border-t border-cyan-500/20 text-[11px] text-cyan-200/90 font-mono tracking-widest font-bold uppercase">
          {formattedDate ? formattedDate : ''}
          {formattedDate && displayTime !== '--:--' ? ' • ' : ''}
          {displayTime !== '--:--' ? `${displayTime} TSİ` : ''}
        </div>
      )}
    </div>
  );
};




