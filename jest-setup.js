import "@testing-library/react-native";

export const mockedNavigate = jest.fn();

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

jest.mock("@react-navigation/native", () => (
  { useNavigation: () => ({ navigate: mockedNavigate }) }));

jest.mock('@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set.js', () => {
    return () => '';
});
