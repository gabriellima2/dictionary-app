import { fireEvent, render, screen } from "@testing-library/react-native";

import { usePlaySound } from "../../../hooks/usePlaySound";
import { AudioButton } from "./AudioButton";

jest.mock("../../../hooks/usePlaySound");

const LABEL_TEXT = "Escutar pronúncia";

describe("Audio Button Component", () => {
	const mockPlaySound = jest.fn();

	afterEach(() => jest.resetAllMocks());
	beforeEach(() => {
		(usePlaySound as jest.Mock).mockImplementation(() => ({
			...jest.requireActual("../../../hooks/usePlaySound"),
			playSound: mockPlaySound,
		}));
		render(<AudioButton audioUrl="test" />);
	});

	describe("Render", () => {
		it("should render correctly", () => {
			expect(screen.getByLabelText(LABEL_TEXT)).toBeTruthy();
		});
	});

	describe("Interaction", () => {
		describe("Press", () => {
			it("should call the function when pressed", () => {
				const button = screen.getByLabelText(LABEL_TEXT);
				fireEvent.press(button);

				expect(mockPlaySound).toHaveBeenCalled();
			});
		});
	});
});
