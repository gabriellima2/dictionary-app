import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

import { BaseButton } from "../../BaseButton";
import { themes } from "../../../styles/theme";

export interface AudioButtonProps {
	audioUrl?: string;
}

export const AudioButton = ({ audioUrl }: AudioButtonProps) => (
	<BaseButton>
		<SimpleLineIcons name="volume-2" size={20} color={themes.fontColor} />
	</BaseButton>
);
