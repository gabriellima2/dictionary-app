import { API_URL } from "../constants/API_URL";
import type { Dictionary } from "../interfaces/Dictionary";

interface IError {
	title: string;
	message: string;
}

export const dictionaryServices = {
	get: async (word: string) => {
		const response = await fetch(`${API_URL}/${word.toLowerCase().trim()}`);
		const data: Dictionary[] | IError = await response.json();

		if (!response.ok && !Array.isArray(data)) throw new Error(data.title);
		if (!response.ok) throw new Error("Network response was not ok");
		return data as Dictionary[];
	},
};
