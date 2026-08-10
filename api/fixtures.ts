import type { Request, Response } from 'express';
import { fetchSahadanLeaguePage } from '../server/providers/sahadan';
import { parseSahadanGamesets } from '../server/parsers/sahadanFixtures';
import { normalizeFixtures } from '../server/normalize/fixtures';
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
    // Validate that week is a strict integer string without decimals
    if (!/^\d+$/.test(weekStr)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid week parameter. Week must be an integer between 1 and 38.',
      } as FixturesApiResponse);
    }

    const weekNumber = parseInt(weekStr, 10);
    if (isNaN(weekNumber) || weekNumber < 1 || weekNumber > 38) {
      return res.status(400).json({
        success: false,
        error: 'Invalid week parameter. Week must be an integer between 1 and 38.',
      } as FixturesApiResponse);
    }

    // Fetch page HTML from Sahadan
    let html: string;
    try {
      html = await fetchSahadanLeaguePage();
    } catch (err: any) {
      console.error('[FixturesAPI] Upstream fetch error:', err.message || err);
      return res.status(502).json({
        success: false,
        error: 'Unable to fetch fixture data from Sahadan.',
      } as FixturesApiResponse);
    }

    // Parse gamesets from Nuxt payload
    let gamesets;
    try {
      gamesets = parseSahadanGamesets(html);
    } catch (err: any) {
      console.error('[FixturesAPI] Parser error:', err.message || err);
      return res.status(502).json({
        success: false,
        error: 'Failed to parse fixture data from Sahadan.',
      } as FixturesApiResponse);
    }

    // Find target gameset by week name
    const targetGameset = gamesets.find((gs) => gs.name === String(weekNumber));
    if (!targetGameset) {
      return res.status(404).json({
        success: false,
        error: `Week ${weekNumber} was not found in fixture data.`,
      } as FixturesApiResponse);
    }

    // Normalize raw match items to standard Fixture model
    const normalizedMatches = normalizeFixtures(targetGameset.matches, weekNumber);

    // Set cache control for Vercel CDN / Browser
    res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=300, stale-while-revalidate=600');

    return res.status(200).json({
      success: true,
      season: '2026-2027',
      league: 'Trendyol 1. Lig',
      week: weekNumber,
      matches: normalizedMatches,
    } as FixturesApiResponse);
  } catch (error: any) {
    console.error('[FixturesAPI] Unhandled error:', error.message || error);
    return res.status(500).json({
      success: false,
      error: 'An unexpected internal error occurred.',
    } as FixturesApiResponse);
  }
}
