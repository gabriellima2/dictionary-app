import { useEffect, useState } from "react";
import { Audio, AVPlaybackSource, AVPlaybackStatusToSet } from "expo-av";

type Sound = null | Audio.Sound;

interface Return {
	sound: Sound;
	playSound: () => Promise<void>;
}

export function usePlaySound(
	source: AVPlaybackSource,
	initialStatus?: AVPlaybackStatusToSet
): Return {
	const [sound, setSound] = useState<Sound>(null);

	const playSound = async () => {
		const { sound: audioSound } = await Audio.Sound.createAsync(
			source,
			initialStatus
		);

		setSound(audioSound);
		await audioSound.playAsync();
	};

	useEffect(() => {
		return sound
			? () => {
					sound.unloadAsync();
			  }
			: undefined;
	}, [sound]);

	return {
		sound,
		playSound,
	};
}
