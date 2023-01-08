import { fireEvent, render, screen } from "@testing-library/react-native";
import { RecentSearches } from "./RecentSearches";

const FIRST_TEXT_MOCK = "Hello";
const SECOND_TEXT_MOCK = "World";

describe("Recent Searches Component", () => {
	const mockRemoveFromRecentSearches = jest.fn();

	beforeAll(() =>
		render(
			<RecentSearches
				recentSearches={[FIRST_TEXT_MOCK, SECOND_TEXT_MOCK]}
				removeFromRecentSearches={mockRemoveFromRecentSearches}
			/>
		)
	);

	describe("Render", () => {
		it("should render correctly", () => {
			expect(screen.getByText("Latest searches")).toBeTruthy();
			expect(screen.getByText(FIRST_TEXT_MOCK)).toBeTruthy();
			expect(screen.getByText(SECOND_TEXT_MOCK)).toBeTruthy();
		});
	});

	describe("Interactions", () => {
		describe("Press", () => {
			it("should call the function passed by props to the Word Already Searches Component", () => {
				const removeButton = screen.getAllByLabelText("Remove");
				fireEvent.press(removeButton[0]);

				expect(mockRemoveFromRecentSearches).toHaveBeenCalled();
			});
		});
	});
});
