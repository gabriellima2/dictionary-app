import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
	Merriweather_400Regular,
	Merriweather_700Bold,
} from "@expo-google-fonts/merriweather";
import {
	Raleway_300Light,
	Raleway_400Regular,
	Raleway_500Medium,
} from "@expo-google-fonts/raleway";

import { Routes } from "./src/Routes";
import { Loading } from "./src/components/Loading";
import { Default } from "./src/layouts/Default";

export default function App() {
	const [fontsLoaded] = useFonts({
		MerriweatherRegular: Merriweather_400Regular,
		MerriweatherBold: Merriweather_700Bold,

		RalewayLight: Raleway_300Light,
		RalewayRegular: Raleway_400Regular,
		RalewayMedium: Raleway_500Medium,
	});

	if (!fontsLoaded)
		return (
			<Default>
				<Loading />
			</Default>
		);

	return (
		<>
			<StatusBar style="light" />
			<Routes />
		</>
	);
}
