import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

import { usePlaySound } from "../../../hooks/usePlaySound";

import { BaseButton } from "../../BaseButton";
import { themes } from "../../../styles/theme";

export interface AudioButtonProps {
	audioUrl?: string;
}

export const AudioButton = ({ audioUrl }: AudioButtonProps) => {
	const { playSound } = usePlaySound({ uri: audioUrl });

	return (
		<BaseButton onPress={playSound}>
			<SimpleLineIcons name="volume-2" size={20} color={themes.fontColor} />
		</BaseButton>
	);
};
