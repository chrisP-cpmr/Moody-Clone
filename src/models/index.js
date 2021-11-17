// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const {
  SpeakerVoiceEmotion,
  PublicMeetingInfo,
  Evaluation,
  Meeting,
  AudienceFaceExpression,
} = initSchema(schema);

export {
  SpeakerVoiceEmotion,
  PublicMeetingInfo,
  Evaluation,
  Meeting,
  AudienceFaceExpression,
};
