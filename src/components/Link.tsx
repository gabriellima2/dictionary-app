import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import type { Children } from "../@types/Children";

export interface LinkProps
	extends Children,
		Pick<TouchableOpacityProps, "style" | "accessibilityLabel" | "onPress"> {}

export const Link = (props: LinkProps) => (
	<TouchableOpacity activeOpacity={0.5} accessibilityRole="link" {...props} />
);
