export type FixtureStatus = 
  | 'played' 
  | 'fixture' 
  | 'live' 
  | 'postponed' 
  | 'cancelled' 
  | 'unknown';

export interface TeamInfo {
  id: number;
  uuid?: string;
  name: string;
  logo: string;
}

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
  halfTimeHomeScore?: number | null;
  halfTimeAwayScore?: number | null;
}

export interface FixturesSuccessResponse {
  success: true;
  season: string;
  league: string;
  week: number;
  matches: Fixture[];
}

export interface FixturesErrorResponse {
  success: false;
  error: string;
}

export type FixturesApiResponse = FixturesSuccessResponse | FixturesErrorResponse;
