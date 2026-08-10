import type { FixturesApiResponse } from '../types/fixture';

export interface FetchFixturesParams {
  season?: string;
  week: number;
}

export async function fetchFixtures(params: FetchFixturesParams): Promise<FixturesApiResponse> {
  try {
    const season = params.season || '2026-2027';
    const url = `/api/fixtures?season=${encodeURIComponent(season)}&week=${encodeURIComponent(params.week)}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    const data: FixturesApiResponse = await response.json().catch(() => ({
      success: false,
      error: `Failed to parse response (HTTP Status ${response.status})`,
    }));

    return data;
  } catch (error: any) {
    console.error('[FixturesService] Network or unexpected error:', error);
    return {
      success: false,
      error: error.message || 'An unexpected client network error occurred.',
    };
  }
}
