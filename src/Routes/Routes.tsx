import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Home } from "../screens/Home";
import { Result } from "../screens/Result";

import type { StackParams } from "../@types/StackParams";

const Stack = createStackNavigator<StackParams>();

export const Routes = () => (
	<NavigationContainer>
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Result" component={Result} />
		</Stack.Navigator>
	</NavigationContainer>
);
