import { Text } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";

import { Default } from "../layouts/Default";

import type { StackParams } from "../@types/StackParams";

type StackProps = StackScreenProps<StackParams, "Result">;

interface ResultProps extends StackProps {}

export const Result = (props: ResultProps) => {
	const { word } = props.route.params;

	return (
		<Default>
			<Text>Result Screen: {word}</Text>
		</Default>
	);
};
