import { PUBLIC_BASE_API_ENDPOINT } from "$env/static/public";
import { MARKET_ENDPOINT } from "$lib/constants";
import type { Market } from "types";


export const marketApi = {
  get: (): Promise<Market> =>fetch(`${PUBLIC_BASE_API_ENDPOINT}${MARKET_ENDPOINT}`).then((res)=>res.json())
}
