import { leaderboardApi } from "./leaderboard";
import { marketApi } from "./market";

export const LiveApi = ()=> Promise.all([
  leaderboardApi.get(),
  marketApi.get()
]);
