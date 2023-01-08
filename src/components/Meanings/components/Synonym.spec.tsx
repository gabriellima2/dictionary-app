import { fireEvent, render, screen } from "@testing-library/react-native";
import { mockedNavigate } from "../../../../jest-setup";
import { Synonym } from "./Synonym";

const WORD = "Hello";

describe("Synonym Component", () => {
	beforeEach(() => render(<Synonym word={WORD} />));

	describe("Render", () => {
		it("should render correctly", () => {
			expect(screen.getByText(WORD)).toBeTruthy();
		});
	});
	describe("Interactions", () => {
		describe("Press", () => {
			it("should call navigation function when pressed", () => {
				const link = screen.getByRole("link");
				fireEvent.press(link);

				expect(mockedNavigate).toHaveBeenCalled();
			});
		});
	});
});
