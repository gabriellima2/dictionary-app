import { API_URL } from "../constants/API_URL";
import type { Dictionary } from "../interfaces/Dictionary";

interface Error {
	title: string;
	message: string;
}

export const dictionaryServices = {
	get: async (word: string) => {
		try {
			const response = await fetch(`${API_URL}/${word.toLowerCase().trim()}`);
			const data: Dictionary[] | Error = await response.json();

			if (!Array.isArray(data)) throw new Error(data.title);
			return data;
		} catch (err) {
			return null;
		}
	},
};
