import type { SvelteFetch } from "types/utils.types";
import { leaderboardApi } from "./leaderboard";
import { marketApi } from "./market";


export const LiveApi = (svelteFetch?: SvelteFetch)=> Promise.all([
  leaderboardApi.get(svelteFetch),
  marketApi.get(svelteFetch)
]);
