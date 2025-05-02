import { BRONZE, DEFAULT_COLOR, GOLD, SILVER } from "$lib/constants/colors";

export const rankColor = (rank: number) => {
		if (rank === 1) return GOLD;
		if (rank === 2) return SILVER;
		if (rank === 3) return BRONZE;
		return DEFAULT_COLOR
	};
