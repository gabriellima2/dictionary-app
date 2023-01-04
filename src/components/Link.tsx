import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import type { RouteProp } from "@react-navigation/native";

import { useNavigation } from "../hooks/useNavigation";

import type { StackParams } from "../@types/StackParams";
import type { Children } from "../@types/Children";

export interface LinkProps
	extends Children,
		Pick<TouchableOpacityProps, "style" | "accessibilityLabel">,
		Pick<RouteProp<StackParams, keyof StackParams>, "params"> {
	screen: keyof StackParams;
}

export const Link = (props: LinkProps) => {
	const { navigate } = useNavigation();

	const handlePress = () => {
		navigate(props.screen, { ...props.params });
	};

	return (
		<TouchableOpacity
			activeOpacity={0.5}
			onPress={handlePress}
			accessibilityRole="link"
			style={props.style}
		>
			{props.children}
		</TouchableOpacity>
	);
};
