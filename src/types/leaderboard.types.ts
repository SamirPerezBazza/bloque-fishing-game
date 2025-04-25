export interface Player {
  rank: number;
  username: string;
  xp: number;
  level: number;
  gold: number;
}

export interface Leaderboard {
 players: Player[];
}
