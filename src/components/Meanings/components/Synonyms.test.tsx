import { render, screen } from "@testing-library/react-native";
import { Synonyms } from "./Synonyms";

function renderSynonymsComponent(synonyms: string[]) {
	render(<Synonyms synonyms={synonyms} />);
}

describe("Synonyms Component", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			const SYNONYMS = ["Hello", "World", "Test"];
			renderSynonymsComponent(SYNONYMS);

			expect(screen.getByText(SYNONYMS[0])).toBeTruthy();
			expect(screen.getByText(SYNONYMS[1])).toBeTruthy();
			expect(screen.getByText(SYNONYMS[2])).toBeTruthy();
		});
		it("should render correctly if pass repeated values", () => {
			const SYNONYMS_WITH_REPEATED_VALUES = ["Hello", "World", "Test", "Hello"];
			renderSynonymsComponent(SYNONYMS_WITH_REPEATED_VALUES);

			expect(screen.getByText(SYNONYMS_WITH_REPEATED_VALUES[0])).toBeTruthy();
			expect(screen.getByText(SYNONYMS_WITH_REPEATED_VALUES[1])).toBeTruthy();
			expect(screen.getByText(SYNONYMS_WITH_REPEATED_VALUES[2])).toBeTruthy();
		});
	});
});
