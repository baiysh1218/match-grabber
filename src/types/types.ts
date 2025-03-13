export interface Matches {
  awayScore: number;
  awayTeam: Team;
  homeScore: number;
  homeTeam: Team;
  status: MatchStatus;
  time: string;
  title: string;
}

export interface Team {
  name: string;
  place: number;
  players: Player[];
  points: number;
  total_kills: number;
}

export interface Player {
  kills: number;
  username: string;
}

export enum MatchStatus {
  SCHEDULED = "Scheduled",
  ONGOING = "Ongoing",
  FINISHED = "Finished",
  ALL = "",
}
export interface TeamStatsProps {
  homeTeam: Team;
  awayTeam: Team;
}
