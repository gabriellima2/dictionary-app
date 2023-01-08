import { fireEvent, render, screen } from "@testing-library/react-native";
import { mockedNavigate } from "../../../../jest-setup";
import { WordAlreadySearched } from "./WordAlreadySearched";

describe("Word Already Searched Component", () => {
	const wordMock = "Teste Unitário";
	const mockHandleRemove = jest.fn();

	beforeAll(() =>
		render(
			<WordAlreadySearched
				word={wordMock}
				removeFromRecentSearches={mockHandleRemove}
			/>
		)
	);

	describe("Render", () => {
		it("should render correctly", () => {
			expect(screen.getByText(wordMock)).toBeTruthy();
			expect(screen.getByLabelText("Remove")).toBeTruthy();
		});
	});

	describe("Interactions", () => {
		describe("Press", () => {
			describe("Link", () => {
				it("should call navigation function when clicking link", () => {
					const link = screen.getByRole("link");
					fireEvent.press(link);

					expect(mockedNavigate).toHaveBeenCalled();
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
