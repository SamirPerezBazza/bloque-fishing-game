import type { Item, Player } from "types";


export const LEADERBOARD_COLUMNS: Array<keyof Player> = ['rank', 'username', 'xp','gold','level'];
export const MARKET_COLUMNS: Array<keyof Item> = ['id', 'name', 'type', 'description', 'cost'];
