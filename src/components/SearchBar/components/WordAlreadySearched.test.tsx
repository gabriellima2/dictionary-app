import { fireEvent, render, screen } from "@testing-library/react-native";

import { mockNavigate } from "../../../../jest-setup";
import { WordAlreadySearched } from "./WordAlreadySearched";

const WORD = "Unit Test";

describe("Word Already Searched Component", () => {
	const mockHandleRemove = jest.fn();

	beforeAll(() =>
		render(
			<WordAlreadySearched
				word={WORD}
				removeFromRecentSearches={mockHandleRemove}
			/>
		)
	);

	describe("Render", () => {
		it("should render correctly", () => {
			expect(screen.getByText(WORD)).toBeTruthy();
			expect(screen.getByLabelText("Remove")).toBeTruthy();
		});
	});

	describe("Interactions", () => {
		describe("Press", () => {
			describe("Link", () => {
				it("should call navigation function when clicking link", () => {
					const link = screen.getByRole("link");
					fireEvent.press(link);

					expect(mockNavigate).toHaveBeenCalled();
				});
			});
			describe("Remove Button", () => {
				it("should call remove function when clicking button", () => {
					const removeButton = screen.getByLabelText("Remove");
					fireEvent.press(removeButton);

					expect(mockHandleRemove).toHaveBeenCalled();
				});
			});
		});
	});
});
