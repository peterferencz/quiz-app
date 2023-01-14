import { writable } from 'svelte-local-storage-store'

export const preferences = writable('preferences', {
	confetti: true,
	wrongTimeout: 3,
	correctTimeout: 3,
	darktheme: true
})