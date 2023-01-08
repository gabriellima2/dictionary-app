import { fireEvent, render, screen } from "@testing-library/react-native";
import type { ReactTestInstance } from "react-test-renderer";

import { useRecentSearches } from "./hooks/useRecentSearches";
import { SearchBar } from "./SearchBar";

jest.mock("./hooks/useRecentSearches");

const mockUseRecentSearches = useRecentSearches as jest.MockedFunction<
	typeof useRecentSearches
>;

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
	const mockOnSearch = jest.fn();
	const mockSaveWordSearched = jest.fn();

	beforeEach(() => {
		render(<SearchBar onSearch={mockOnSearch} />);
	});

	describe("Render", () => {
		mockUseRecentSearches.mockReturnValue({
			recentSearches: null,
			removeWordSearched: jest.fn(),
			saveWordSearched: jest.fn,
		});

		it("should render correctly if 'recent searches' is empty", () => {
			expect(getInputElement()).toBeTruthy();
			expect(screen.getByText("Hello")).toBeTruthy();
		});
	});

	describe("Interactions", () => {
		mockUseRecentSearches.mockReturnValue({
			recentSearches: ["Hello"],
			removeWordSearched: jest.fn(),
			saveWordSearched: mockSaveWordSearched,
		});

		describe("Search", () => {
			it("should not search if the value is empty", () => {
				const input = getInputElement();
				onSubmitEditing(input, "");

				expect(mockOnSearch).not.toHaveBeenCalled();
				expect(mockSaveWordSearched).not.toHaveBeenCalled();
			});

			it("should search if the value is filled", () => {
				const typedValue = "Hello";
				const input = getInputElement();
				onSubmitEditing(input, typedValue);

				expect(mockOnSearch).toHaveBeenCalledWith(typedValue);
				expect(mockSaveWordSearched).toHaveBeenCalledWith(typedValue);
			});
		});
	});
});
