interface Phonetic {
	text: string;
	audio?: string;
}

interface Meaning {
	example: string;
	synonyms: string[] | [];
	antonyms: string[] | [];
}

export interface Dictionary {
	word: string;
	phonetic: string;
	phonetics: Phonetic[];
	meanings: Meaning[];
}
