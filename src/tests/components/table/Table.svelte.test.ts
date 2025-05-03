import { render } from '@testing-library/svelte';
import Table from '../../../components/table/Table.svelte';
import { describe, test, expect } from 'vitest';
import type { Player } from 'types';

describe('Table.svelte', () => {
  test('should render wtesthout crashing', () => {
    const { container } = render(Table);
    expect(container).toBeTruthy();
  });

  test('should display table headers correctly', () => {
    const headers: Array<keyof Player> = ['username', 'gold', 'level', 'rank', 'xp'];
    const { getByText } = render(Table, { props: { columns: headers as never[], data: [] } });

    headers.forEach((header) => {
      expect(getByText(header)).toBeTruthy();
    });
  });

  test('should display table rows correctly', () => {
    const data: Player[] = [
      { username: 'Player1', gold: 100, level: 1, rank: 2, xp: 0 },
    ];
    const headers: Array<keyof Player> = ['username', 'gold', 'level', 'rank', 'xp'];
    const { getByText } = render(Table, { props: { columns: headers as never[], data } });

    data.forEach((player) => {
      expect(getByText(player.username)).toBeDefined();
      expect(getByText(player.gold.toString())).toBeDefined();
      expect(getByText(player.level.toString())).toBeDefined();
      expect(getByText(player.rank.toString())).toBeDefined();
      expect(getByText(player.xp.toString())).toBeDefined();
    });

  });
});
