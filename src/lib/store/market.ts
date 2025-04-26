
import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import type { Market } from 'types';

interface Store {
  market: Market | null;
  loading: boolean;
}

const storedMarket = browser ? localStorage.getItem('marketStore') : null;
const parsedMarket: Store | null = storedMarket ? JSON.parse(storedMarket) : null;
const initialMarket = parsedMarket ?? {
  market: null,
  loading: true,
};

export const marketStore = writable<Store>(initialMarket);

marketStore.subscribe((value)=>{
  if (browser) {
    localStorage.setItem('marketStore', JSON.stringify(value));
  }
})
