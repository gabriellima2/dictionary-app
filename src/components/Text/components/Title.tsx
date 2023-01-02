import { Text, TextProps } from "react-native";

import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";
import { styles } from "../styles";

interface TitleProps extends TextProps {
	weight?: "bold" | "regular";
}

export const Title = ({ weight = "bold", ...props }: TitleProps) => (
	<Text
		{...props}
		style={[
			styles.text,
			props.style,
			{ fontFamily: `Merriweather${capitalizeFirstLetter(weight)}` },
		]}
	/>
);
