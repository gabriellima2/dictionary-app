import { useNavigation as useReactNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";

import type { StackParams } from "../@types/StackParams";

export function useNavigation() {
	return useReactNavigation<StackNavigationProp<StackParams>>();
}
