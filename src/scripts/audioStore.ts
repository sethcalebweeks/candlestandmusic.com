import { writable } from 'svelte/store';

export const currentSong = writable(["Merciful & Mighty", "Westminster Confession of God"]);
export const isPlaying = writable(false);