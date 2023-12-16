import { useSpeech } from "react-use";
import { ISpeechOptions } from "react-use/lib/useSpeech";

const voices = window.speechSynthesis.getVoices();

const speechOptions: ISpeechOptions = {
  rate: 0.8,
  pitch: 0.5,
  voice: voices[0],
};

export const Example45 = () => {
  useSpeech("Hello, world!", speechOptions);

  return null;
};
