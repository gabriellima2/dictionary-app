import AsyncStorage from "@react-native-async-storage/async-storage";

export const asyncStorage = {
	set: async (key: string, value: unknown) => {
		try {
			await AsyncStorage.setItem(key, JSON.stringify(value));
		} catch (err) {
			console.error(err.message);
		}
	},

	get: async <TValue>(key: string): Promise<TValue | null> => {
		try {
			const value = await AsyncStorage.getItem(key);

			if (!value) throw new Error("Value not found");

			const formattedValue: TValue = JSON.parse(value);
			return formattedValue;
		} catch (e) {
			return null;
		}
	},

	remove: async (key: string) => {
		try {
			await AsyncStorage.removeItem(key);
		} catch (e) {
			console.error(e.message);
		}
	},
};
