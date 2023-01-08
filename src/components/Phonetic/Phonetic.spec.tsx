import { render, screen } from "@testing-library/react-native";
import { Phonetic } from "./Phonetic";

const WORD = "Hello";
const LABEL_AUDIO_BUTTON = "Escutar pronúncia";

function renderPhoneticComponent(audioUrl?: string) {
	render(<Phonetic word={WORD} audioUrl={audioUrl} />);
}

describe("Phonetic Component", () => {
	describe("Render", () => {
		it("should render correctly if not pass 'audioUrl' props", () => {
			renderPhoneticComponent();

			expect(screen.getByText(WORD)).toBeTruthy();
			expect(screen.queryByLabelText(LABEL_AUDIO_BUTTON)).not.toBeTruthy();
		});
		it("should render correctly if pass 'audioUrl' props", () => {
			const AUDIO_URL = "Test";
			renderPhoneticComponent(AUDIO_URL);

			expect(screen.getByText(WORD)).toBeTruthy();
			expect(screen.getByLabelText(LABEL_AUDIO_BUTTON)).toBeTruthy();
		});
	});
});
