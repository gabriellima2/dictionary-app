import { Text, TextProps } from "react-native";

import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";
import { styles } from "../styles";

interface ParagraphProps extends TextProps {
	weight?: "bold" | "regular" | "light";
}

export const Paragraph = ({ weight = "bold", ...props }: ParagraphProps) => (
	<Text
		{...props}
		style={[
			styles.text,
			props.style,
			{ fontFamily: `Raleway${capitalizeFirstLetter(weight)}` },
		]}
	/>
);
