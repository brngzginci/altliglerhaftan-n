import React, { useState } from 'react';
import type { TeamInfo } from '../../types/fixture';
import { findAuthenticTeamLogo } from '../../data/turkishLowerLeagueTeams';

interface TeamLogoProps {
  team: TeamInfo;
  size?: number; // size in px e.g. 36
  className?: string;
}

export const TeamLogo: React.FC<TeamLogoProps> = ({ team, size = 36, className = '' }) => {
  const [hasError, setHasError] = useState(false);

  const safeTeam = team || { id: 0, name: '??', logo: '' };
  const teamName = safeTeam.name || '??';

  // Extract initials for fallback shield (e.g. "Manisa FK" -> "MFK", "Boluspor" -> "BOL")
  const getInitials = (name: string): string => {
    if (!name) return '??';
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 3).toUpperCase();
  };

  // Determine logo URL: always prioritize authentic local & verified club logos
  const authenticLogo = findAuthenticTeamLogo(teamName, safeTeam.id, safeTeam.logo);
  const effectiveLogo = authenticLogo || safeTeam.logo;

  // Optical size balancing: Since PNG assets are now uniformly normalized to 92% bounding-box fill,
  // we apply subtle optical compensation for horizontally elongated crests
  const lowerName = teamName.toLowerCase();
  const isHorizontallyWide = lowerName.includes('adana demir') || lowerName.includes('1461');
  const opticalScaleClass = isHorizontallyWide ? 'scale-110' : 'scale-100';

  if (hasError || !effectiveLogo) {
    return (
      <div
        style={{ width: `${size}px`, height: `${size}px`, minWidth: `${size}px` }}
        className={`flex-shrink-0 rounded-xl bg-gradient-to-tr from-[#051820] via-[#092936] to-[#0E3D4F] border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-black font-bebas text-xs tracking-wider shadow-md ${className}`}
        title={teamName}
      >
        {getInitials(teamName)}
      </div>
    );
  }

  return (
    <div
      style={{ width: `${size}px`, height: `${size}px`, minWidth: `${size}px` }}
      className="flex-shrink-0 flex items-center justify-center relative"
    >
      <img
        src={effectiveLogo}
        alt={teamName}
        referrerPolicy="no-referrer"
        crossOrigin="anonymous"
        onLoad={(e) => {
          // If Mackolik returns a 1x1 transparent pixel for missing logos, trigger clean shield badge
          if (e.currentTarget.naturalWidth <= 1 && e.currentTarget.naturalHeight <= 1) {
            setHasError(true);
          }
        }}
        onError={() => setHasError(true)}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
        className={`object-contain drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)] ${opticalScaleClass} ${className}`}
        loading="eager"
      />
    </div>
  );
};

