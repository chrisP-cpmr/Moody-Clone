import {
  ModelInit,
  MutableModel,
  PersistentModelConstructor,
} from "@aws-amplify/datastore";

export declare class SpeakerVoiceEmotion {
  readonly id: string;
  readonly timestamp: number;
  readonly score: number;
  readonly neutral: number;
  readonly happy: number;
  readonly sad: number;
  readonly angry: number;
  readonly fearful: number;
  readonly disgusted: number;
  readonly surprised: number;
  readonly meetingID?: string;
  constructor(init: ModelInit<SpeakerVoiceEmotion>);
  static copyOf(
    source: SpeakerVoiceEmotion,
    mutator: (
      draft: MutableModel<SpeakerVoiceEmotion>
    ) => MutableModel<SpeakerVoiceEmotion> | void
  ): SpeakerVoiceEmotion;
}

export declare class PublicMeetingInfo {
  readonly id: string;
  readonly name: string;
  readonly startedAt: string;
  readonly stoppedAt: string;
  readonly owner?: string;
  constructor(init: ModelInit<PublicMeetingInfo>);
  static copyOf(
    source: PublicMeetingInfo,
    mutator: (
      draft: MutableModel<PublicMeetingInfo>
    ) => MutableModel<PublicMeetingInfo> | void
  ): PublicMeetingInfo;
}

export declare class Evaluation {
  readonly id: string;
  readonly owner?: string;
  readonly publicmeetinginfoID: string;
  readonly code: string;
  readonly cognitive_load: number;
  readonly distraction_1: number;
  readonly distraction_2: number;
  readonly distraction_3: number;
  readonly distraction_4: number;
  readonly distraction_5: number;
  readonly distraction_6: number;
  readonly distraction_7: number;
  readonly distraction_8: number;
  readonly distraction_9: number;
  readonly distraction_10: number;
  readonly distraction_11: number;
  readonly distraction_12: number;
  readonly distraction_13: number;
  readonly distraction_14: number;
  readonly distraction_15: number;
  constructor(init: ModelInit<Evaluation>);
  static copyOf(
    source: Evaluation,
    mutator: (
      draft: MutableModel<Evaluation>
    ) => MutableModel<Evaluation> | void
  ): Evaluation;
}

export declare class Meeting {
  readonly id: string;
  readonly name: string;
  readonly AudienceFaceExpressions?: (AudienceFaceExpression | null)[];
  readonly startedAt?: string;
  readonly stoppedAt?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly PublicMeetingInfo?: PublicMeetingInfo;
  readonly SpeakerVoiceEmotions?: (SpeakerVoiceEmotion | null)[];
  constructor(init: ModelInit<Meeting>);
  static copyOf(
    source: Meeting,
    mutator: (draft: MutableModel<Meeting>) => MutableModel<Meeting> | void
  ): Meeting;
}

export declare class AudienceFaceExpression {
  readonly id: string;
  readonly timestamp: number;
  readonly score: number;
  readonly surprised?: number;
  readonly happy?: number;
  readonly neutral?: number;
  readonly sad?: number;
  readonly disgusted?: number;
  readonly fearful?: number;
  readonly angry?: number;
  readonly meetingID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<AudienceFaceExpression>);
  static copyOf(
    source: AudienceFaceExpression,
    mutator: (
      draft: MutableModel<AudienceFaceExpression>
    ) => MutableModel<AudienceFaceExpression> | void
  ): AudienceFaceExpression;
}
