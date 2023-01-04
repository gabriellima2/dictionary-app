import { Text } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";

import { useDictionary } from "../hooks/useDictionary";

import { Default } from "../layouts/Default";

import type { StackParams } from "../@types/StackParams";

type StackProps = StackScreenProps<StackParams, "Result">;

interface ResultProps extends StackProps {}

export const Result = (props: ResultProps) => {
	const { word } = props.route.params;
	const { data, error, isError, isFetched, isLoading } = useDictionary(word);

	return (
		<Default>
			<Text>Result Screen: {word}</Text>
		</Default>
	);
};
