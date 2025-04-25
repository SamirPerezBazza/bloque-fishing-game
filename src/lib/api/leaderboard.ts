
import { PUBLIC_BASE_API_ENDPOINT } from "$env/static/public";
import { LEADERBOARD_ENDPOINT } from "$lib/constants";
import type { Leaderboard } from "types/leaderboard.types";


export const leaderboardApi = {
  get: (): Promise<Leaderboard> =>fetch(`${PUBLIC_BASE_API_ENDPOINT}${LEADERBOARD_ENDPOINT}`).then((res)=>res.json())
}
