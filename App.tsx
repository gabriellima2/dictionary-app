import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { QueryClientProvider } from "react-query";
import {
	Merriweather_400Regular,
	Merriweather_700Bold,
} from "@expo-google-fonts/merriweather";
import {
	Raleway_300Light,
	Raleway_400Regular,
	Raleway_500Medium,
} from "@expo-google-fonts/raleway";

import { Loading } from "./src/components/Loading";

import { Default } from "./src/layouts/Default";
import { Routes } from "./src/Routes";

import { queryClient } from "./src/lib/query-client";

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
		<QueryClientProvider client={queryClient}>
			<StatusBar style="light" />
			<Routes />
		</QueryClientProvider>
	);
}
