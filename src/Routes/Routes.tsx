import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Home } from "../screens/Home";
import { Result } from "../screens/Result";

import type { StackParams } from "../@types/StackParams";
import { styles } from "./styles";

const Stack = createStackNavigator<StackParams>();

export const Routes = () => (
	<NavigationContainer>
		<Stack.Navigator initialRouteName="Home" screenOptions={{ ...styles }}>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{ title: "Significado das palavras" }}
			/>
			<Stack.Screen name="Result" component={Result} />
		</Stack.Navigator>
	</NavigationContainer>
);
