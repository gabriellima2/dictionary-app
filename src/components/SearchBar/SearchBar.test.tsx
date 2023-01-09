import { fireEvent, render, screen } from "@testing-library/react-native";
import type { ReactTestInstance } from "react-test-renderer";

import { useRecentSearches } from "./hooks/useRecentSearches";
import { SearchBar } from "./SearchBar";

jest.mock("./hooks/useRecentSearches");

const mockUseRecentSearchesDefaultReturnValue: ReturnType<
	typeof useRecentSearches
> = {
	recentSearches: null,
	removeWordSearched: jest.fn(),
	saveWordSearched: jest.fn(),
};

function onSubmitEditing(input: ReactTestInstance, value: string) {
	fireEvent.changeText(input, value);
	fireEvent(input, "onSubmitEditing", {
		nativeEvent: { text: value },
	});
}

function getInputElement() {
	return screen.getByPlaceholderText("Type something...");
}

describe("Search Bar Component", () => {
	const mockSaveWordSearched = jest.fn();
	const mockRecentSearches = ["Hello"];
	const mockOnSearch = jest.fn();

	function renderSearchBarWithMockedHooks(
		mockReturnValue = mockUseRecentSearchesDefaultReturnValue
	) {
		(useRecentSearches as jest.Mock).mockImplementation(() => ({
			...mockReturnValue,
		}));
		render(<SearchBar onSearch={mockOnSearch} />);
	}

	afterEach(() => jest.resetAllMocks());

	describe("Render", () => {
		it("should render correctly if 'recent searches' is empty", () => {
			renderSearchBarWithMockedHooks();

			expect(getInputElement()).toBeTruthy();
			expect(screen.queryByText(mockRecentSearches[0])).not.toBeTruthy();
		});
		it("should render correctly if 'rencent searches' is filled", () => {
			renderSearchBarWithMockedHooks({
				...mockUseRecentSearchesDefaultReturnValue,
				recentSearches: mockRecentSearches,
			});

			expect(getInputElement()).toBeTruthy();
			expect(screen.getByText(mockRecentSearches[0])).toBeTruthy();
		});
	});

	describe("Interactions", () => {
		describe("Search", () => {
			it("should not search if the value is empty", () => {
				renderSearchBarWithMockedHooks({
					...mockUseRecentSearchesDefaultReturnValue,
					saveWordSearched: mockSaveWordSearched,
				});
				const input = getInputElement();
				onSubmitEditing(input, "");

				expect(mockOnSearch).not.toHaveBeenCalled();
				expect(mockSaveWordSearched).not.toHaveBeenCalled();
			});

			it("should search if the value is filled", () => {
				renderSearchBarWithMockedHooks({
					...mockUseRecentSearchesDefaultReturnValue,
					saveWordSearched: mockSaveWordSearched,
				});
				const typedValue = "Hello";
				const input = getInputElement();
				onSubmitEditing(input, typedValue);

				expect(mockOnSearch).toHaveBeenCalledWith(typedValue);
				expect(mockSaveWordSearched).toHaveBeenCalledWith(typedValue);
			});
		});
	});
});
