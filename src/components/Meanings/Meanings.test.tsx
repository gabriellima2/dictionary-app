import { render, screen } from "@testing-library/react-native";
import { Text } from "react-native";
import { Meanings } from "./Meanings";

const DEFINITION_TEXT = "Definition";
const PHONETIC_TEXT = "Phonetic";
const EXAMPLE_TEXT = "Example";
const PART_OF_SPEECH = "Word";
const SYNONYMS = ["Synonym"];

describe("Meanings Component", () => {
	beforeAll(() =>
		render(
			<Meanings
				Phonetic={() => <Text>{PHONETIC_TEXT}</Text>}
				meanings={[
					{
						definitions: [
							{ definition: DEFINITION_TEXT, example: EXAMPLE_TEXT },
						],
						partOfSpeech: PART_OF_SPEECH,
						synonyms: SYNONYMS,
					},
				]}
			/>
		)
	);

	describe("Render", () => {
		it("should render correctly", () => {
			expect(screen.getByText(PHONETIC_TEXT)).toBeTruthy();
			expect(screen.getByText(DEFINITION_TEXT)).toBeTruthy();
			expect(screen.getByText(PART_OF_SPEECH)).toBeTruthy();
			expect(screen.getByText(SYNONYMS[0])).toBeTruthy();
		});
	});
});
