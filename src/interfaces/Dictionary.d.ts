import type { Meaning } from "./Meaning";

interface Phonetic {
	audio?: string;
}

export interface Dictionary {
	word: string;
	phonetics: Phonetic[];
	meanings: Meaning[];
}
