import { writable } from 'svelte-local-storage-store'

export const questions = writable('questions', [])