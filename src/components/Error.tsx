import { Title, TitleProps } from "./Text";
import { Center } from "./Center";

interface ErrorProps extends Pick<TitleProps, "style"> {
	message: string;
}

export const Error = ({ message, ...props }: ErrorProps) => (
	<Center>
		<Title accessibilityRole="alert" {...props}>
			{message}
		</Title>
	</Center>
);
