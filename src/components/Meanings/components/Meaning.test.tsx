import { render, screen } from "@testing-library/react-native";
import { Meaning } from "./Meaning";

type TMeaningProps = Parameters<typeof Meaning>[0];

const SYNONYMS_FILLED = ["Synonym", "Hello"];
const EXAMPLE_FILLED = "Example Text - Mock";

const mockDefaultValuesMeaningProps: TMeaningProps = {
	definition: "Hello World - Mock",
	title: "Mock",
	synonyms: [],
};

function renderMeaningComponent(params: TMeaningProps) {
	render(<Meaning {...params} />);
}

describe("Meaning Component", () => {
	describe("Render", () => {
		it("should render correctly without 'example' and 'synonyms", () => {
			renderMeaningComponent({ ...mockDefaultValuesMeaningProps });
			const { definition, title } = mockDefaultValuesMeaningProps;

			expect(screen.getByText(definition)).toBeTruthy();
			expect(screen.getByText(title)).toBeTruthy();
			expect(screen.queryByText(SYNONYMS_FILLED[0])).toBeFalsy();
			expect(screen.queryByText(SYNONYMS_FILLED[1])).toBeFalsy();
			expect(screen.queryByText(`'${EXAMPLE_FILLED}'`)).toBeFalsy();
		});
		it("should render correctly with 'example'", () => {
			renderMeaningComponent({
				...mockDefaultValuesMeaningProps,
				example: EXAMPLE_FILLED,
			});
			const { definition, title } = mockDefaultValuesMeaningProps;

			expect(screen.getByText(definition)).toBeTruthy();
			expect(screen.getByText(title)).toBeTruthy();
			expect(screen.queryByText(SYNONYMS_FILLED[0])).toBeFalsy();
			expect(screen.queryByText(SYNONYMS_FILLED[1])).toBeFalsy();
			expect(screen.getByText(`'${EXAMPLE_FILLED}'`)).toBeTruthy();
		});
		it("should render correctly with 'synonyms'", () => {
			renderMeaningComponent({
				...mockDefaultValuesMeaningProps,
				synonyms: SYNONYMS_FILLED,
			});
			const { definition, title } = mockDefaultValuesMeaningProps;

			expect(screen.getByText(definition)).toBeTruthy();
			expect(screen.getByText(title)).toBeTruthy();
			expect(screen.getByText(SYNONYMS_FILLED[0])).toBeTruthy();
			expect(screen.getByText(SYNONYMS_FILLED[1])).toBeTruthy();
			expect(screen.queryByText(`'${EXAMPLE_FILLED}'`)).toBeFalsy();
		});
		it("should render correctly with 'example' and 'synonyms'", () => {
			renderMeaningComponent({
				...mockDefaultValuesMeaningProps,
				synonyms: SYNONYMS_FILLED,
				example: EXAMPLE_FILLED,
			});
			const { definition, title } = mockDefaultValuesMeaningProps;

			expect(screen.getByText(definition)).toBeTruthy();
			expect(screen.getByText(title)).toBeTruthy();
			expect(screen.getByText(SYNONYMS_FILLED[0])).toBeTruthy();
			expect(screen.getByText(SYNONYMS_FILLED[1])).toBeTruthy();
			expect(screen.getByText(`'${EXAMPLE_FILLED}'`)).toBeTruthy();
		});
	});
});
