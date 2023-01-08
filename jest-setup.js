import "@testing-library/react-native";
import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";

export const mockNavigate = jest.fn();

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
jest.mock("@react-navigation/native", () => (
  { useNavigation: () => ({ navigate: mockNavigate }) }));
jest.mock(
	"@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set.js",
	() => {
    return () => "";
	}
);
jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);
