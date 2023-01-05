import type { StackScreenProps } from "@react-navigation/stack";

import { useDictionary } from "../hooks/useDictionary";

import { Meanings } from "../components/Meanings";
import { Phonetic } from "../components/Phonetic";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";

import { Default } from "../layouts/Default";

import type { StackParams } from "../@types/StackParams";

type StackProps = StackScreenProps<StackParams, "Result">;

interface ResultProps extends StackProps {}

export const Result = (props: ResultProps) => {
	const { word } = props.route.params;
	const { data, error, isError, isLoading } = useDictionary(word);

	const getAudio = () => {
		if (data && data.phonetics)
			return data.phonetics.find((phonetic) => phonetic.audio).audio;
	};

	if (isError || !data)
		return (
			<Default>
				<Error message={error as string} />
			</Default>
		);

	if (isLoading)
		return (
			<Default>
				<Loading />
			</Default>
		);

	return (
		<Default>
			<Meanings
				meanings={data.meanings}
				Phonetic={() => <Phonetic word={data.word} audioUrl={getAudio()} />}
			/>
		</Default>
	);
};
