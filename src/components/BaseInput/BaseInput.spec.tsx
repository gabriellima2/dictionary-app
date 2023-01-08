import { fireEvent, render, screen } from "@testing-library/react-native";
import { BaseInput } from "./BaseInput";

const PLACEHOLDER = "Digite aqui...";

function renderBaseInput(props?: { onChangeText?: (text: string) => void }) {
	return render(<BaseInput placeholder={PLACEHOLDER} {...props} />);
}

describe("Base Input Component", () => {
	describe("Render", () => {
		beforeEach(() => renderBaseInput());

		it("should render correctly", () => {
			expect(screen.getByPlaceholderText(PLACEHOLDER)).toBeTruthy();
		});
	});

	describe("Interactions", () => {
		describe("should get the typed value", () => {
			const mockOnChangeText = jest.fn();
			beforeEach(() => renderBaseInput({ onChangeText: mockOnChangeText }));

			it("should show the typed value", () => {
				const TYPED_VALUE = "Olá, Teste!";
				fireEvent.changeText(
					screen.getByPlaceholderText(PLACEHOLDER),
					TYPED_VALUE
				);

				expect(mockOnChangeText).toHaveBeenCalledWith(TYPED_VALUE);
			});
		});
	});
});
