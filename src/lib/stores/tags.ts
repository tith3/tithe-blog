import { writable } from 'svelte/store';

export const selectedTags = writable([]);
export const showTags = writable(false);


export function resetTags() {
    selectedTags.set([]);
}