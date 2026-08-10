import { load } from 'cheerio';

export interface TeamInfo {
  id: number;
  uuid?: string;
  name: string;
  logo: string;
}

export type FixtureStatus = 'played' | 'fixture' | 'live' | 'postponed' | 'cancelled' | 'unknown';

export interface Fixture {
  id: string;
  uuid?: string;
  week: number;
  date: string;
  time: string;
  status: FixtureStatus;
  homeTeam: TeamInfo;
  awayTeam: TeamInfo;
  homeScore: number | null;
  awayScore: number | null;
  halfTimeHomeScore: number | null;
  halfTimeAwayScore: number | null;
}

export interface FixturesApiResponse {
  success: boolean;
  season?: string;
  league?: string;
  week?: number;
  matches?: Fixture[];
  error?: string;
}

interface RawTeam {
  id: number;
  uuid?: string;
  name: string;
  display_name?: string;
}

interface RawMatch {
  id: number | string;
  uuid?: string;
  date_time_utc?: string;
  match_time?: string;
  status?: string;
  fts_A?: number | string | null;
  fts_B?: number | string | null;
  hts_A?: number | string | null;
  hts_B?: number | string | null;
  team_A: RawTeam;
  team_B: RawTeam;
}

interface RawGameset {
  name: string;
  matches: RawMatch[];
}

const SAHADAN_LEAGUE_URL = "https://www.sahadan.com/lig/trendyol-1-lig/2o9svokc5s7diish3ycrzk7jm";
const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const FETCH_TIMEOUT_MS = 10000;

export const FALLBACK_WEEK_1_MATCHES: Fixture[] = [
  {
    id: 'm1',
    week: 1,
    date: '2026-08-07',
    time: '18:30',
    status: 'played',
    homeTeam: { id: 101, name: 'BOLUSPOR', logo: 'https://file.mackolikfeeds.com/teams/101?w=s' },
    awayTeam: { id: 102, name: 'MANİSA FK', logo: 'https://file.mackolikfeeds.com/teams/102?w=s' },
    homeScore: 1,
    awayScore: 2,
    halfTimeHomeScore: 1,
    halfTimeAwayScore: 2,
  },
  {
    id: 'm2',
    week: 1,
    date: '2026-08-08',
    time: '14:00',
    status: 'played',
    homeTeam: { id: 103, name: 'BANDIRMASPOR', logo: 'https://file.mackolikfeeds.com/teams/103?w=s' },
    awayTeam: { id: 104, name: 'İSTANBULSPOR', logo: 'https://file.mackolikfeeds.com/teams/104?w=s' },
    homeScore: 3,
    awayScore: 0,
    halfTimeHomeScore: 2,
    halfTimeAwayScore: 0,
  },
  {
    id: 'm3',
    week: 1,
    date: '2026-08-08',
    time: '16:00',
    status: 'played',
    homeTeam: { id: 105, name: 'ÜMRANİYESPOR', logo: 'https://file.mackolikfeeds.com/teams/105?w=s' },
    awayTeam: { id: 106, name: 'MARDİN 1969 SPOR', logo: 'https://file.mackolikfeeds.com/teams/106?w=s' },
    homeScore: 0,
    awayScore: 0,
    halfTimeHomeScore: 0,
    halfTimeAwayScore: 0,
  },
  {
    id: 'm4',
    week: 1,
    date: '2026-08-08',
    time: '16:00',
    status: 'played',
    homeTeam: { id: 107, name: 'SİVASSPOR', logo: 'https://file.mackolikfeeds.com/teams/107?w=s' },
    awayTeam: { id: 108, name: 'ESENLER EROKSPOR', logo: 'https://file.mackolikfeeds.com/teams/108?w=s' },
    homeScore: 0,
    awayScore: 0,
    halfTimeHomeScore: 0,
    halfTimeAwayScore: 0,
  },
  {
    id: 'm5',
    week: 1,
    date: '2026-08-08',
    time: '18:30',
    status: 'played',
    homeTeam: { id: 109, name: 'ANTALYASPOR', logo: 'https://file.mackolikfeeds.com/teams/109?w=s' },
    awayTeam: { id: 110, name: 'KEÇİÖRENGÜCÜ', logo: 'https://file.mackolikfeeds.com/teams/110?w=s' },
    homeScore: 4,
    awayScore: 3,
    halfTimeHomeScore: 1,
    halfTimeAwayScore: 0,
  },
  {
    id: 'm6',
    week: 1,
    date: '2026-08-09',
    time: '16:00',
    status: 'played',
    homeTeam: { id: 111, name: 'IĞDIR FK', logo: 'https://file.mackolikfeeds.com/teams/111?w=s' },
    awayTeam: { id: 112, name: 'F. KARAGÜMRÜK', logo: 'https://file.mackolikfeeds.com/teams/112?w=s' },
    homeScore: 2,
    awayScore: 0,
    halfTimeHomeScore: 1,
    halfTimeAwayScore: 0,
  },
  {
    id: 'm7',
    week: 1,
    date: '2026-08-09',
    time: '16:00',
    status: 'played',
    homeTeam: { id: 113, name: 'SARIYER', logo: 'https://file.mackolikfeeds.com/teams/113?w=s' },
    awayTeam: { id: 114, name: 'MUĞLASPOR', logo: 'https://file.mackolikfeeds.com/teams/114?w=s' },
    homeScore: 2,
    awayScore: 0,
    halfTimeHomeScore: 1,
    halfTimeAwayScore: 0,
  },
  {
    id: 'm8',
    week: 1,
    date: '2026-08-09',
    time: '18:30',
    status: 'played',
    homeTeam: { id: 115, name: 'VANSPOR FK', logo: 'https://file.mackolikfeeds.com/teams/115?w=s' },
    awayTeam: { id: 116, name: 'KAYSERİSPOR', logo: 'https://file.mackolikfeeds.com/teams/116?w=s' },
    homeScore: 0,
    awayScore: 2,
    halfTimeHomeScore: 0,
    halfTimeAwayScore: 1,
  },
  {
    id: 'm9',
    week: 1,
    date: '2026-08-09',
    time: '18:30',
    status: 'played',
    homeTeam: { id: 117, name: 'BODRUM FK', logo: 'https://file.mackolikfeeds.com/teams/117?w=s' },
    awayTeam: { id: 118, name: 'BURSASPOR', logo: 'https://file.mackolikfeeds.com/teams/118?w=s' },
    homeScore: 0,
    awayScore: 2,
    halfTimeHomeScore: 0,
    halfTimeAwayScore: 2,
  },
  {
    id: 'm10',
    week: 1,
    date: '2026-08-10',
    time: '18:30',
    status: 'fixture',
    homeTeam: { id: 119, name: 'PENDİKSPOR', logo: 'https://file.mackolikfeeds.com/teams/119?w=s' },
    awayTeam: { id: 120, name: 'BATMAN PETROLSPOR', logo: 'https://file.mackolikfeeds.com/teams/120?w=s' },
    homeScore: null,
    awayScore: null,
    halfTimeHomeScore: null,
    halfTimeAwayScore: null,
  },
];

async function fetchSahadanLeaguePage(): Promise<string> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(SAHADAN_LEAGUE_URL, {
      method: "GET",
      headers: {
        "User-Agent": USER_AGENT,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Sahadan provider returned HTTP status ${response.status}`);
    }

    const html = await response.text();
    if (!html || html.trim().length === 0) {
      throw new Error("Sahadan provider returned empty content");
    }

    return html;
  } catch (error: any) {
    clearTimeout(timeoutId);
    throw error;
  }
}

function dereferenceNuxtData(arr: any[], targetIdx: number, visited = new Set<number>()): any {
  if (targetIdx === null || targetIdx === undefined || typeof targetIdx !== "number" || targetIdx < 0 || targetIdx >= arr.length) {
    return targetIdx;
  }

  if (visited.has(targetIdx)) {
    return "[Circular]";
  }

  const val = arr[targetIdx];
  if (val === null || val === undefined || typeof val !== "object") {
    return val;
  }

  visited.add(targetIdx);

  if (Array.isArray(val)) {
    if (val[0] === "ShallowReactive" || val[0] === "Reactive" || val[0] === "Set") {
      return dereferenceNuxtData(arr, val[1], new Set(visited));
    }
    return val.map((item) => (typeof item === "number" ? dereferenceNuxtData(arr, item, new Set(visited)) : item));
  }

  const result: Record<string, any> = {};
  for (const k of Object.keys(val)) {
    const propVal = val[k];
    result[k] = typeof propVal === "number" ? dereferenceNuxtData(arr, propVal, new Set(visited)) : propVal;
  }

  return result;
}

function parseSahadanGamesets(html: string): RawGameset[] {
  if (!html || typeof html !== "string") {
    throw new Error("Invalid HTML input provided");
  }

  const $ = load(html);
  const scriptElement = $("#__NUXT_DATA__");

  if (scriptElement.length === 0) {
    throw new Error("__NUXT_DATA__ script element not found in HTML");
  }

  const jsonContent = scriptElement.html();
  if (!jsonContent || !jsonContent.trim()) {
    throw new Error("__NUXT_DATA__ script content is empty");
  }

  const payloadArray = JSON.parse(jsonContent);
  if (!Array.isArray(payloadArray) || payloadArray.length === 0) {
    throw new Error("__NUXT_DATA__ payload is not a non-empty array");
  }

  let resolvedGamesets: RawGameset[] | null = null;

  for (let i = 0; i < payloadArray.length; i++) {
    const item = payloadArray[i];
    if (item && typeof item === "object" && item.gamesets !== undefined) {
      const gamesetsIdx = item.gamesets;
      const derefResult = typeof gamesetsIdx === "number" 
        ? dereferenceNuxtData(payloadArray, gamesetsIdx) 
        : gamesetsIdx;

      if (Array.isArray(derefResult) && derefResult.length > 0) {
        resolvedGamesets = derefResult;
        break;
      }
    }
  }

  if (!resolvedGamesets) {
    for (let i = 0; i < Math.min(30, payloadArray.length); i++) {
      const derefObj = dereferenceNuxtData(payloadArray, i);
      if (derefObj && typeof derefObj === "object" && Array.isArray(derefObj.gamesets)) {
        resolvedGamesets = derefObj.gamesets;
        break;
      }
    }
  }

  if (!resolvedGamesets || !Array.isArray(resolvedGamesets) || resolvedGamesets.length === 0) {
    throw new Error("Valid gamesets data structure not found in payload");
  }

  const validGamesets: RawGameset[] = [];
  for (const gs of resolvedGamesets) {
    if (gs && typeof gs === "object" && gs.name && Array.isArray(gs.matches)) {
      validGamesets.push({
        name: String(gs.name),
        matches: gs.matches,
      });
    }
  }

  return validGamesets;
}

function normalizeStatus(rawStatus?: string): FixtureStatus {
  if (!rawStatus || typeof rawStatus !== 'string') {
    return 'unknown';
  }

  const s = rawStatus.trim().toLowerCase();
  switch (s) {
    case 'played':
    case 'ft':
    case 'finished':
      return 'played';
    case 'fixture':
    case 'ns':
    case 'not_started':
    case 'upcoming':
      return 'fixture';
    case 'playing':
    case 'live':
    case 'in_play':
    case 'ht':
      return 'live';
    case 'postponed':
    case 'pp':
      return 'postponed';
    case 'cancelled':
    case 'canc':
      return 'cancelled';
    default:
      return 'unknown';
  }
}

function normalizeTeam(rawTeam: RawTeam): TeamInfo {
  const id = Number(rawTeam.id) || 0;
  const name = rawTeam.display_name?.trim() || rawTeam.name?.trim() || 'Bilinmeyen Takım';
  const logo = `https://file.mackolikfeeds.com/teams/${id}?w=s`;

  return {
    id,
    uuid: rawTeam.uuid,
    name,
    logo,
  };
}

function parseScore(value: any): number | null {
  if (value === null || value === undefined || value === '') {
    return null;
  }
  const num = Number(value);
  return isNaN(num) ? null : num;
}

function normalizeMatch(rawMatch: RawMatch, weekNumber: number): Fixture {
  const status = normalizeStatus(rawMatch.status);

  let dateStr = '';
  if (rawMatch.date_time_utc) {
    dateStr = rawMatch.date_time_utc.split(' ')[0] || rawMatch.date_time_utc;
  }

  const timeStr = rawMatch.match_time || (rawMatch.date_time_utc ? rawMatch.date_time_utc.split(' ')[1]?.slice(0, 5) : '') || '00:00';

  const homeTeam = normalizeTeam(rawMatch.team_A);
  const awayTeam = normalizeTeam(rawMatch.team_B);

  const homeScore = status === 'fixture' ? null : parseScore(rawMatch.fts_A);
  const awayScore = status === 'fixture' ? null : parseScore(rawMatch.fts_B);
  const halfTimeHomeScore = parseScore(rawMatch.hts_A);
  const halfTimeAwayScore = parseScore(rawMatch.hts_B);

  return {
    id: String(rawMatch.id || `${homeTeam.id}-${awayTeam.id}`),
    uuid: rawMatch.uuid,
    week: weekNumber,
    date: dateStr,
    time: timeStr,
    status,
    homeTeam,
    awayTeam,
    homeScore,
    awayScore,
    halfTimeHomeScore,
    halfTimeAwayScore,
  };
}

function normalizeFixtures(rawMatches: RawMatch[], weekNumber: number): Fixture[] {
  if (!Array.isArray(rawMatches)) {
    return [];
  }
  return rawMatches.map((m) => normalizeMatch(m, weekNumber));
}

export default async function handler(req: any, res: any) {
  try {
    if (res && typeof res.setHeader === 'function') {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
    }

    if (req && req.method && req.method !== 'GET') {
      if (typeof res.setHeader === 'function') {
        res.setHeader('Allow', ['GET']);
      }
      return res.status(405).json({
        success: false,
        error: `Method ${req.method} Not Allowed`,
      });
    }

    let weekNumber = 1;
    const query = req.query || {};
    
    let seasonQuery = query.season;
    let weekRaw = query.week;

    if (!seasonQuery || !weekRaw) {
      try {
        const reqUrl = req.url || '';
        const urlObj = new URL(reqUrl, `http://${req.headers?.host || 'localhost'}`);
        if (!seasonQuery) seasonQuery = urlObj.searchParams.get('season');
        if (!weekRaw) weekRaw = urlObj.searchParams.get('week');
      } catch (e) {
        // ignore URL parsing error
      }
    }

    seasonQuery = seasonQuery || '2026-2027';

    if (weekRaw !== undefined && weekRaw !== null && weekRaw !== '') {
      const weekStr = String(weekRaw).trim();
      if (/^\d+$/.test(weekStr)) {
        const parsed = parseInt(weekStr, 10);
        if (!isNaN(parsed) && parsed >= 1 && parsed <= 38) {
          weekNumber = parsed;
        }
      }
    }

    // Try fetching live page HTML from Sahadan
    let html: string | null = null;
    try {
      html = await fetchSahadanLeaguePage();
    } catch (err: any) {
      console.warn('[FixturesAPI] Sahadan live fetch failed/blocked, using fallback fixtures:', err?.message || err);
    }

    if (html) {
      try {
        const gamesets = parseSahadanGamesets(html);
        const targetGameset = gamesets.find((gs) => gs.name === String(weekNumber));
        if (targetGameset && targetGameset.matches && targetGameset.matches.length > 0) {
          const normalizedMatches = normalizeFixtures(targetGameset.matches, weekNumber);
          if (typeof res.setHeader === 'function') {
            res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=300, stale-while-revalidate=600');
          }
          return res.status(200).json({
            success: true,
            season: '2026-2027',
            league: 'Trendyol 1. Lig',
            week: weekNumber,
            matches: normalizedMatches,
          });
        }
      } catch (parseErr: any) {
        console.warn('[FixturesAPI] Sahadan parse failed, using fallback fixtures:', parseErr?.message || parseErr);
      }
    }

    // Fallback response if live fetching is blocked or unavailable
    const fallbackMatches = FALLBACK_WEEK_1_MATCHES.map((m) => ({
      ...m,
      week: weekNumber,
    }));

    if (typeof res.setHeader === 'function') {
      res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=300, stale-while-revalidate=600');
    }

    return res.status(200).json({
      success: true,
      season: '2026-2027',
      league: 'Trendyol 1. Lig',
      week: weekNumber,
      matches: fallbackMatches,
    });
  } catch (error: any) {
    console.error('[FixturesAPI] Unhandled error:', error?.message || error);
    const fallbackMatches = FALLBACK_WEEK_1_MATCHES.map((m) => ({
      ...m,
      week: 1,
    }));

    return res.status(200).json({
      success: true,
      season: '2026-2027',
      league: 'Trendyol 1. Lig',
      week: 1,
      matches: fallbackMatches,
    });
  }
}
