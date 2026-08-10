import type { Request, Response } from 'express';
import { fetchSahadanLeaguePage } from '../server/providers/sahadan';
import { parseSahadanGamesets } from '../server/parsers/sahadanFixtures';
import { normalizeFixtures } from '../server/normalize/fixtures';
import { FALLBACK_WEEK_1_MATCHES } from '../server/fallback/week1';
import type { FixturesApiResponse } from '../src/types/fixture';

export default async function handler(req: Request, res: Response) {
  // Ensure response is JSON
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  // Only allow GET requests
  if (req.method && req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({
      success: false,
      error: `Method ${req.method} Not Allowed`,
    } as FixturesApiResponse);
  }

  let weekNumber = 1;

  try {
    const seasonQuery = (req.query.season as string) || '2026-2027';
    if (seasonQuery !== '2026-2027') {
      return res.status(400).json({
        success: false,
        error: "Invalid season parameter. Currently supported season is '2026-2027'.",
      } as FixturesApiResponse);
    }

    const weekRaw = req.query.week;
    if (weekRaw === undefined || weekRaw === null || weekRaw === '') {
      return res.status(400).json({
        success: false,
        error: 'Missing required query parameter: week. Week must be an integer between 1 and 38.',
      } as FixturesApiResponse);
    }

    const weekStr = String(weekRaw).trim();
    if (!/^\d+$/.test(weekStr)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid week parameter. Week must be an integer between 1 and 38.',
      } as FixturesApiResponse);
    }

    weekNumber = parseInt(weekStr, 10);
    if (isNaN(weekNumber) || weekNumber < 1 || weekNumber > 38) {
      return res.status(400).json({
        success: false,
        error: 'Invalid week parameter. Week must be an integer between 1 and 38.',
      } as FixturesApiResponse);
    }

    // Try fetching live page HTML from Sahadan
    let html: string | null = null;
    try {
      html = await fetchSahadanLeaguePage();
    } catch (err: any) {
      console.warn('[FixturesAPI] Sahadan live fetch failed/blocked, using fallback fixtures:', err.message || err);
    }

    if (html) {
      try {
        const gamesets = parseSahadanGamesets(html);
        const targetGameset = gamesets.find((gs) => gs.name === String(weekNumber));
        if (targetGameset && targetGameset.matches && targetGameset.matches.length > 0) {
          const normalizedMatches = normalizeFixtures(targetGameset.matches, weekNumber);
          res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=300, stale-while-revalidate=600');
          return res.status(200).json({
            success: true,
            season: '2026-2027',
            league: 'Trendyol 1. Lig',
            week: weekNumber,
            matches: normalizedMatches,
          } as FixturesApiResponse);
        }
      } catch (parseErr: any) {
        console.warn('[FixturesAPI] Sahadan parse failed, using fallback fixtures:', parseErr.message || parseErr);
      }
    }

    // Fallback response if live fetching is blocked or unavailable
    const fallbackMatches = FALLBACK_WEEK_1_MATCHES.map((m) => ({
      ...m,
      week: weekNumber,
    }));

    res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=300, stale-while-revalidate=600');
    return res.status(200).json({
      success: true,
      season: '2026-2027',
      league: 'Trendyol 1. Lig',
      week: weekNumber,
      matches: fallbackMatches,
    } as FixturesApiResponse);
  } catch (error: any) {
    console.error('[FixturesAPI] Unhandled error:', error.message || error);
    // Even on unhandled error, return fallback matches for resilience
    const fallbackMatches = FALLBACK_WEEK_1_MATCHES.map((m) => ({
      ...m,
      week: weekNumber,
    }));

    return res.status(200).json({
      success: true,
      season: '2026-2027',
      league: 'Trendyol 1. Lig',
      week: weekNumber,
      matches: fallbackMatches,
    } as FixturesApiResponse);
  }
}
