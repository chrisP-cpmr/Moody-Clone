import { Box, Paper, Typography } from "@material-ui/core";
import FrequencyBarVisualizerService from "../../media/FrequencyBarVisualizerService";
import { useEffect, useRef } from "react";
import {
  PaulEkmanVoiceEmotion,
  VOICE_EMOTIONS,
} from "../../meetings/speakerVoiceEmotionUtils";
import { useAppSelector } from "../../reduxHooks";
import { selectActiveMeetingSpeakerVoiceEmotionsLastN } from "../../meetings/speakerVoiceEmotionSlice";
import { SpeakerVoiceEmotion } from "../../models";
import { Alert } from "@material-ui/lab";

type VoiceVisualizationProps = {
  audioStream: MediaStream;
};

const findMaxEmotion = (
  voiceEmotion: SpeakerVoiceEmotion
): keyof PaulEkmanVoiceEmotion | undefined => {
  if (!voiceEmotion) {
    return undefined;
  }

  let maxScore: number = 0.0;
  let maxEmotion: keyof PaulEkmanVoiceEmotion | undefined = undefined;

  VOICE_EMOTIONS.forEach((emotion: keyof PaulEkmanVoiceEmotion) => {
    const emotionScore: number = voiceEmotion[emotion];
    if (emotionScore > maxScore) {
      maxScore = emotionScore;
      maxEmotion = emotion;
    }
  });

  return maxEmotion;
};

export default function VoiceVisualization({
  audioStream,
}: VoiceVisualizationProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    let stopDrawing: Function = () => {};
    const startVisualization = async () => {
      stopDrawing = await new FrequencyBarVisualizerService(
        canvasRef.current!,
        new AudioContext(),
        audioStream
      ).startDrawing();
    };
    startVisualization();
    return () => {
      stopDrawing();
    };
  }, [audioStream]);
  const latestVoiceEmotion: SpeakerVoiceEmotion | undefined = useAppSelector(
    selectActiveMeetingSpeakerVoiceEmotionsLastN(1)
  )[0];
  const maxEmotion = findMaxEmotion(latestVoiceEmotion);

  return (
    <Paper>
      <Box display="flex">
        <canvas ref={canvasRef} width={700} height={400} />
        <Box ml={4} mt={2}>
          <Typography variant="h4" gutterBottom>
            Predictions
          </Typography>
          {latestVoiceEmotion ? (
            <>
              {VOICE_EMOTIONS.map((emotion: keyof PaulEkmanVoiceEmotion) => {
                return (
                  <Box key={emotion}>
                    <Box
                      display="inline-block"
                      color={
                        maxEmotion && maxEmotion === emotion
                          ? "primary.main"
                          : "inherit"
                      }
                      mt={0.5}
                      borderBottom={
                        maxEmotion && maxEmotion === emotion ? 1 : 0
                      }
                    >
                      <Typography variant="body1">
                        <strong>{emotion.toUpperCase()}: </strong>
                        {(latestVoiceEmotion[emotion] * 100).toFixed(2)}%
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </>
          ) : (
            <Alert severity="info">
              <Typography variant="body1">
                No emotions have been tracked yet.
              </Typography>
            </Alert>
          )}
        </Box>
      </Box>
    </Paper>
  );
}
