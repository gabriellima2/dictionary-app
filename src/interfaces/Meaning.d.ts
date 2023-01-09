import type { Synonyms } from "./Synonyms";

export interface Definition {
	definition: string;
	example?: string;
}

export interface Meaning {
	partOfSpeech: string;
	definitions: Definition[];
	synonyms: Synonyms;
}
