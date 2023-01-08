import { fireEvent, render, screen } from "@testing-library/react-native";
import type { ReactTestInstance } from "react-test-renderer";

import { useRecentSearches } from "./hooks/useRecentSearches";
import { SearchBar } from "./SearchBar";

jest.mock("./hooks/useRecentSearches");

const mockUseRecentSearches = useRecentSearches as jest.MockedFunction<
	typeof useRecentSearches
>;

const useRecentSearchesDefaultReturnValue = {
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
	const mockOnSearch = jest.fn();
	const mockSaveWordSearched = jest.fn();

	afterEach(() => jest.resetAllMocks());
	beforeEach(() => {
		mockUseRecentSearches.mockImplementation(() => ({
			...useRecentSearchesDefaultReturnValue,
		}));
		render(<SearchBar onSearch={mockOnSearch} />);
	});

	describe("Render", () => {
		it("should render correctly", () => {
			expect(getInputElement()).toBeTruthy();
			expect(screen.queryByText("Hello")).not.toBeTruthy();
		});
	});

	describe("Interactions", () => {
		describe("Search", () => {
			function executeMockImplementation() {
				mockUseRecentSearches.mockImplementation(() => ({
					...useRecentSearchesDefaultReturnValue,
					saveWordSearched: mockSaveWordSearched,
				}));
			}

			it("should not search if the value is empty", () => {
				executeMockImplementation();

				const input = getInputElement();
				onSubmitEditing(input, "");

				expect(mockOnSearch).not.toHaveBeenCalled();
				expect(mockSaveWordSearched).not.toHaveBeenCalled();
			});

			it("should search if the value is filled", () => {
				executeMockImplementation();

				const typedValue = "Hello";
				const input = getInputElement();
				onSubmitEditing(input, typedValue);

				expect(mockOnSearch).toHaveBeenCalledWith(typedValue);
				expect(mockSaveWordSearched).toHaveBeenCalledWith(typedValue);
			});
		});
	});
});
