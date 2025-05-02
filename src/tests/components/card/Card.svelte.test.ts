import { BRONZE, DEFAULT_COLOR, GOLD, SILVER } from "$lib/constants/colors";
import { render } from "@testing-library/svelte";
import Card from "components/card/Card.svelte";
import { rankColor } from "components/card/card.utils";
import type { Player } from "types";
import { describe, expect, test } from "vitest";

describe('<Card />', () => {
  test('should render', ()=>{
    const player: Player = {
      gold: 100,
      level: 10,
      rank: 1,
      username: 'Player1',
      xp: 1000,
    }

    const { findByText } = render(Card, {
      props: {
        ...player
      },
    });

    const username = findByText(player.username);
    const level = findByText(`Level: ${player.level}`);
    const rank = findByText(`Rank: ${player.rank}`);
    const xp = findByText(`XP: ${player.xp}`);
    const gold = findByText(`Gold: ${player.gold}`);
    expect(username).toBeDefined();
    expect(level).toBeDefined();
    expect(rank).toBeDefined();
    expect(xp).toBeDefined();
    expect(gold).toBeDefined();
  });

  test('should render the number for players that are not in the top 3', ()=>{
    const player: Player = {
      gold: 100,
      level: 10,
      rank: 4,
      username: 'Player1',
      xp: 1000,
    }
    const { findByText } = render(Card, {
      props: {
        ...player
      },
    });

    expect(findByText(player.rank)).toBeDefined();



  })

  test('should return the right color for the rank', ()=>{
    const gold = rankColor(1);
    const silver = rankColor(2);
    const bronze = rankColor(3);
    const defaultColor = rankColor(4);

    expect(gold).toBe(GOLD);
    expect(silver).toBe(SILVER);
    expect(bronze).toBe(BRONZE);
    expect(defaultColor).toBe(DEFAULT_COLOR);
  });


 })
