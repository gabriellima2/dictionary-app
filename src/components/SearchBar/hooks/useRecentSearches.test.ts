import { act, renderHook } from "@testing-library/react-hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY_ASYNC_STORAGE, useRecentSearches } from "./useRecentSearches";

const words = {
	first: "Hello",
	second: "World",
};

describe("useRecentSearches Hook", () => {
	describe("Initial Values", () => {
		it("should return the initial values of recent searches", () => {
			const { result } = renderHook(useRecentSearches);

			expect(result.current.recentSearches).toBeNull();
			expect(AsyncStorage.getItem).toBeCalledWith(KEY_ASYNC_STORAGE);
		});
	});
	describe("State Manipulation", () => {
		describe("SaveWordSearched Function", () => {
			it("should save the first item at the beginning", async () => {
				const { result } = renderHook(useRecentSearches);
				act(() => result.current.saveWordSearched(words.first));

				expect(result.current.recentSearches).toEqual([words.first]);
				expect(AsyncStorage.getItem).toBeCalledWith(KEY_ASYNC_STORAGE);
			});
			it("should save items by stacking them", () => {
				const { result } = renderHook(useRecentSearches);
				act(() => result.current.saveWordSearched(words.second));
				act(() => result.current.saveWordSearched(words.first));

				expect(result.current.recentSearches).toEqual([
					words.first,
					words.second,
				]);
				expect(AsyncStorage.getItem).toBeCalledWith(KEY_ASYNC_STORAGE);
			});
			it("should save a repeated item without duplicating it", () => {
				const { result } = renderHook(useRecentSearches);
				act(() => result.current.saveWordSearched(words.second));
				act(() => result.current.saveWordSearched(words.first));
				act(() => result.current.saveWordSearched(words.second));

				expect(result.current.recentSearches).toEqual([
					words.second,
					words.first,
				]);
				expect(AsyncStorage.getItem).toBeCalledWith(KEY_ASYNC_STORAGE);
			});
		});
		describe("RemoveWordSearched Function", () => {
			it("should not remove if 'recentSearches' is empty", () => {
				const { result } = renderHook(useRecentSearches);
				act(() => result.current.removeWordSearched(0));

				expect(AsyncStorage.setItem).not.toBeCalledWith(KEY_ASYNC_STORAGE);
				expect(result.current.recentSearches).toBeNull();
			});
			it("should remove the only item in 'recentSearches'", () => {
				const { result } = renderHook(useRecentSearches);
				act(() => result.current.saveWordSearched(words.first));
				act(() => result.current.removeWordSearched(0));

				expect(result.current.recentSearches).toBeNull();
				expect(AsyncStorage.getItem).toBeCalledWith(KEY_ASYNC_STORAGE);
			});
			it("should remove item", () => {
				const { result } = renderHook(useRecentSearches);
				act(() => result.current.saveWordSearched(words.first));
				act(() => result.current.saveWordSearched(words.second));
				act(() => result.current.removeWordSearched(0));

				expect(result.current.recentSearches).toEqual([words.first]);
				expect(AsyncStorage.getItem).toBeCalledWith(KEY_ASYNC_STORAGE);
			});
		});
	});
});
