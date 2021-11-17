/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSpeakerVoiceEmotionInput = {
  id?: string | null;
  timestamp: number;
  score: number;
  neutral: number;
  happy: number;
  sad: number;
  angry: number;
  fearful: number;
  disgusted: number;
  surprised: number;
  meetingID?: string | null;
  _version?: number | null;
};

export type ModelSpeakerVoiceEmotionConditionInput = {
  timestamp?: ModelIntInput | null;
  score?: ModelFloatInput | null;
  neutral?: ModelFloatInput | null;
  happy?: ModelFloatInput | null;
  sad?: ModelFloatInput | null;
  angry?: ModelFloatInput | null;
  fearful?: ModelFloatInput | null;
  disgusted?: ModelFloatInput | null;
  surprised?: ModelFloatInput | null;
  meetingID?: ModelIDInput | null;
  and?: Array<ModelSpeakerVoiceEmotionConditionInput | null> | null;
  or?: Array<ModelSpeakerVoiceEmotionConditionInput | null> | null;
  not?: ModelSpeakerVoiceEmotionConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type SpeakerVoiceEmotion = {
  __typename: "SpeakerVoiceEmotion";
  id: string;
  timestamp: number;
  score: number;
  neutral: number;
  happy: number;
  sad: number;
  angry: number;
  fearful: number;
  disgusted: number;
  surprised: number;
  meetingID?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateSpeakerVoiceEmotionInput = {
  id: string;
  timestamp?: number | null;
  score?: number | null;
  neutral?: number | null;
  happy?: number | null;
  sad?: number | null;
  angry?: number | null;
  fearful?: number | null;
  disgusted?: number | null;
  surprised?: number | null;
  meetingID?: string | null;
  _version?: number | null;
};

export type DeleteSpeakerVoiceEmotionInput = {
  id: string;
  _version?: number | null;
};

export type CreatePublicMeetingInfoInput = {
  id?: string | null;
  name: string;
  startedAt: string;
  stoppedAt: string;
  owner?: string | null;
  _version?: number | null;
};

export type ModelPublicMeetingInfoConditionInput = {
  name?: ModelStringInput | null;
  startedAt?: ModelStringInput | null;
  stoppedAt?: ModelStringInput | null;
  and?: Array<ModelPublicMeetingInfoConditionInput | null> | null;
  or?: Array<ModelPublicMeetingInfoConditionInput | null> | null;
  not?: ModelPublicMeetingInfoConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type PublicMeetingInfo = {
  __typename: "PublicMeetingInfo";
  id: string;
  name: string;
  startedAt: string;
  stoppedAt: string;
  owner?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePublicMeetingInfoInput = {
  id: string;
  name?: string | null;
  startedAt?: string | null;
  stoppedAt?: string | null;
  owner?: string | null;
  _version?: number | null;
};

export type DeletePublicMeetingInfoInput = {
  id: string;
  _version?: number | null;
};

export type CreateEvaluationInput = {
  id?: string | null;
  owner?: string | null;
  publicmeetinginfoID: string;
  code: string;
  cognitive_load: number;
  distraction_1: number;
  distraction_2: number;
  distraction_3: number;
  distraction_4: number;
  distraction_5: number;
  distraction_6: number;
  distraction_7: number;
  distraction_8: number;
  distraction_9: number;
  distraction_10: number;
  distraction_11: number;
  distraction_12: number;
  distraction_13: number;
  distraction_14: number;
  distraction_15: number;
  _version?: number | null;
};

export type ModelEvaluationConditionInput = {
  publicmeetinginfoID?: ModelIDInput | null;
  code?: ModelStringInput | null;
  cognitive_load?: ModelIntInput | null;
  distraction_1?: ModelIntInput | null;
  distraction_2?: ModelIntInput | null;
  distraction_3?: ModelIntInput | null;
  distraction_4?: ModelIntInput | null;
  distraction_5?: ModelIntInput | null;
  distraction_6?: ModelIntInput | null;
  distraction_7?: ModelIntInput | null;
  distraction_8?: ModelIntInput | null;
  distraction_9?: ModelIntInput | null;
  distraction_10?: ModelIntInput | null;
  distraction_11?: ModelIntInput | null;
  distraction_12?: ModelIntInput | null;
  distraction_13?: ModelIntInput | null;
  distraction_14?: ModelIntInput | null;
  distraction_15?: ModelIntInput | null;
  and?: Array<ModelEvaluationConditionInput | null> | null;
  or?: Array<ModelEvaluationConditionInput | null> | null;
  not?: ModelEvaluationConditionInput | null;
};

export type Evaluation = {
  __typename: "Evaluation";
  id: string;
  owner?: string | null;
  publicmeetinginfoID: string;
  code: string;
  cognitive_load: number;
  distraction_1: number;
  distraction_2: number;
  distraction_3: number;
  distraction_4: number;
  distraction_5: number;
  distraction_6: number;
  distraction_7: number;
  distraction_8: number;
  distraction_9: number;
  distraction_10: number;
  distraction_11: number;
  distraction_12: number;
  distraction_13: number;
  distraction_14: number;
  distraction_15: number;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEvaluationInput = {
  id: string;
  owner?: string | null;
  publicmeetinginfoID?: string | null;
  code?: string | null;
  cognitive_load?: number | null;
  distraction_1?: number | null;
  distraction_2?: number | null;
  distraction_3?: number | null;
  distraction_4?: number | null;
  distraction_5?: number | null;
  distraction_6?: number | null;
  distraction_7?: number | null;
  distraction_8?: number | null;
  distraction_9?: number | null;
  distraction_10?: number | null;
  distraction_11?: number | null;
  distraction_12?: number | null;
  distraction_13?: number | null;
  distraction_14?: number | null;
  distraction_15?: number | null;
  _version?: number | null;
};

export type DeleteEvaluationInput = {
  id: string;
  _version?: number | null;
};

export type CreateMeetingInput = {
  id?: string | null;
  name: string;
  startedAt?: string | null;
  stoppedAt?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  _version?: number | null;
  meetingPublicMeetingInfoId?: string | null;
};

export type ModelMeetingConditionInput = {
  name?: ModelStringInput | null;
  startedAt?: ModelStringInput | null;
  stoppedAt?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelMeetingConditionInput | null> | null;
  or?: Array<ModelMeetingConditionInput | null> | null;
  not?: ModelMeetingConditionInput | null;
};

export type Meeting = {
  __typename: "Meeting";
  id: string;
  name: string;
  startedAt?: string | null;
  stoppedAt?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  SpeakerVoiceEmotions?: ModelSpeakerVoiceEmotionConnection | null;
  PublicMeetingInfo?: PublicMeetingInfo | null;
  owner?: string | null;
  AudienceFaceExpressions?: ModelAudienceFaceExpressionConnection | null;
};

export type ModelSpeakerVoiceEmotionConnection = {
  __typename: "ModelSpeakerVoiceEmotionConnection";
  items: Array<SpeakerVoiceEmotion>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelAudienceFaceExpressionConnection = {
  __typename: "ModelAudienceFaceExpressionConnection";
  items: Array<AudienceFaceExpression>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type AudienceFaceExpression = {
  __typename: "AudienceFaceExpression";
  id: string;
  timestamp: number;
  score: number;
  surprised?: number | null;
  happy?: number | null;
  neutral?: number | null;
  sad?: number | null;
  disgusted?: number | null;
  fearful?: number | null;
  angry?: number | null;
  meetingID: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type UpdateMeetingInput = {
  id: string;
  name?: string | null;
  startedAt?: string | null;
  stoppedAt?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  _version?: number | null;
  meetingPublicMeetingInfoId?: string | null;
};

export type DeleteMeetingInput = {
  id: string;
  _version?: number | null;
};

export type CreateAudienceFaceExpressionInput = {
  id?: string | null;
  timestamp: number;
  score: number;
  surprised?: number | null;
  happy?: number | null;
  neutral?: number | null;
  sad?: number | null;
  disgusted?: number | null;
  fearful?: number | null;
  angry?: number | null;
  meetingID: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  _version?: number | null;
};

export type ModelAudienceFaceExpressionConditionInput = {
  timestamp?: ModelIntInput | null;
  score?: ModelFloatInput | null;
  surprised?: ModelFloatInput | null;
  happy?: ModelFloatInput | null;
  neutral?: ModelFloatInput | null;
  sad?: ModelFloatInput | null;
  disgusted?: ModelFloatInput | null;
  fearful?: ModelFloatInput | null;
  angry?: ModelFloatInput | null;
  meetingID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelAudienceFaceExpressionConditionInput | null> | null;
  or?: Array<ModelAudienceFaceExpressionConditionInput | null> | null;
  not?: ModelAudienceFaceExpressionConditionInput | null;
};

export type UpdateAudienceFaceExpressionInput = {
  id: string;
  timestamp?: number | null;
  score?: number | null;
  surprised?: number | null;
  happy?: number | null;
  neutral?: number | null;
  sad?: number | null;
  disgusted?: number | null;
  fearful?: number | null;
  angry?: number | null;
  meetingID?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  _version?: number | null;
};

export type DeleteAudienceFaceExpressionInput = {
  id: string;
  _version?: number | null;
};

export type ModelSpeakerVoiceEmotionFilterInput = {
  id?: ModelIDInput | null;
  timestamp?: ModelIntInput | null;
  score?: ModelFloatInput | null;
  neutral?: ModelFloatInput | null;
  happy?: ModelFloatInput | null;
  sad?: ModelFloatInput | null;
  angry?: ModelFloatInput | null;
  fearful?: ModelFloatInput | null;
  disgusted?: ModelFloatInput | null;
  surprised?: ModelFloatInput | null;
  meetingID?: ModelIDInput | null;
  and?: Array<ModelSpeakerVoiceEmotionFilterInput | null> | null;
  or?: Array<ModelSpeakerVoiceEmotionFilterInput | null> | null;
  not?: ModelSpeakerVoiceEmotionFilterInput | null;
};

export type ModelPublicMeetingInfoFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  startedAt?: ModelStringInput | null;
  stoppedAt?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelPublicMeetingInfoFilterInput | null> | null;
  or?: Array<ModelPublicMeetingInfoFilterInput | null> | null;
  not?: ModelPublicMeetingInfoFilterInput | null;
};

export type ModelPublicMeetingInfoConnection = {
  __typename: "ModelPublicMeetingInfoConnection";
  items: Array<PublicMeetingInfo>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelEvaluationFilterInput = {
  id?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  publicmeetinginfoID?: ModelIDInput | null;
  code?: ModelStringInput | null;
  cognitive_load?: ModelIntInput | null;
  distraction_1?: ModelIntInput | null;
  distraction_2?: ModelIntInput | null;
  distraction_3?: ModelIntInput | null;
  distraction_4?: ModelIntInput | null;
  distraction_5?: ModelIntInput | null;
  distraction_6?: ModelIntInput | null;
  distraction_7?: ModelIntInput | null;
  distraction_8?: ModelIntInput | null;
  distraction_9?: ModelIntInput | null;
  distraction_10?: ModelIntInput | null;
  distraction_11?: ModelIntInput | null;
  distraction_12?: ModelIntInput | null;
  distraction_13?: ModelIntInput | null;
  distraction_14?: ModelIntInput | null;
  distraction_15?: ModelIntInput | null;
  and?: Array<ModelEvaluationFilterInput | null> | null;
  or?: Array<ModelEvaluationFilterInput | null> | null;
  not?: ModelEvaluationFilterInput | null;
};

export type ModelEvaluationConnection = {
  __typename: "ModelEvaluationConnection";
  items: Array<Evaluation>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelMeetingFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  startedAt?: ModelStringInput | null;
  stoppedAt?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelMeetingFilterInput | null> | null;
  or?: Array<ModelMeetingFilterInput | null> | null;
  not?: ModelMeetingFilterInput | null;
};

export type ModelMeetingConnection = {
  __typename: "ModelMeetingConnection";
  items: Array<Meeting>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelAudienceFaceExpressionFilterInput = {
  id?: ModelIDInput | null;
  timestamp?: ModelIntInput | null;
  score?: ModelFloatInput | null;
  surprised?: ModelFloatInput | null;
  happy?: ModelFloatInput | null;
  neutral?: ModelFloatInput | null;
  sad?: ModelFloatInput | null;
  disgusted?: ModelFloatInput | null;
  fearful?: ModelFloatInput | null;
  angry?: ModelFloatInput | null;
  meetingID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelAudienceFaceExpressionFilterInput | null> | null;
  or?: Array<ModelAudienceFaceExpressionFilterInput | null> | null;
  not?: ModelAudienceFaceExpressionFilterInput | null;
};

export type CreateSpeakerVoiceEmotionMutationVariables = {
  input: CreateSpeakerVoiceEmotionInput;
  condition?: ModelSpeakerVoiceEmotionConditionInput | null;
};

export type CreateSpeakerVoiceEmotionMutation = {
  createSpeakerVoiceEmotion?: {
    __typename: "SpeakerVoiceEmotion";
    id: string;
    timestamp: number;
    score: number;
    neutral: number;
    happy: number;
    sad: number;
    angry: number;
    fearful: number;
    disgusted: number;
    surprised: number;
    meetingID?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdateSpeakerVoiceEmotionMutationVariables = {
  input: UpdateSpeakerVoiceEmotionInput;
  condition?: ModelSpeakerVoiceEmotionConditionInput | null;
};

export type UpdateSpeakerVoiceEmotionMutation = {
  updateSpeakerVoiceEmotion?: {
    __typename: "SpeakerVoiceEmotion";
    id: string;
    timestamp: number;
    score: number;
    neutral: number;
    happy: number;
    sad: number;
    angry: number;
    fearful: number;
    disgusted: number;
    surprised: number;
    meetingID?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteSpeakerVoiceEmotionMutationVariables = {
  input: DeleteSpeakerVoiceEmotionInput;
  condition?: ModelSpeakerVoiceEmotionConditionInput | null;
};

export type DeleteSpeakerVoiceEmotionMutation = {
  deleteSpeakerVoiceEmotion?: {
    __typename: "SpeakerVoiceEmotion";
    id: string;
    timestamp: number;
    score: number;
    neutral: number;
    happy: number;
    sad: number;
    angry: number;
    fearful: number;
    disgusted: number;
    surprised: number;
    meetingID?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type CreatePublicMeetingInfoMutationVariables = {
  input: CreatePublicMeetingInfoInput;
  condition?: ModelPublicMeetingInfoConditionInput | null;
};

export type CreatePublicMeetingInfoMutation = {
  createPublicMeetingInfo?: {
    __typename: "PublicMeetingInfo";
    id: string;
    name: string;
    startedAt: string;
    stoppedAt: string;
    owner?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdatePublicMeetingInfoMutationVariables = {
  input: UpdatePublicMeetingInfoInput;
  condition?: ModelPublicMeetingInfoConditionInput | null;
};

export type UpdatePublicMeetingInfoMutation = {
  updatePublicMeetingInfo?: {
    __typename: "PublicMeetingInfo";
    id: string;
    name: string;
    startedAt: string;
    stoppedAt: string;
    owner?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeletePublicMeetingInfoMutationVariables = {
  input: DeletePublicMeetingInfoInput;
  condition?: ModelPublicMeetingInfoConditionInput | null;
};

export type DeletePublicMeetingInfoMutation = {
  deletePublicMeetingInfo?: {
    __typename: "PublicMeetingInfo";
    id: string;
    name: string;
    startedAt: string;
    stoppedAt: string;
    owner?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateEvaluationMutationVariables = {
  input: CreateEvaluationInput;
  condition?: ModelEvaluationConditionInput | null;
};

export type CreateEvaluationMutation = {
  createEvaluation?: {
    __typename: "Evaluation";
    id: string;
    owner?: string | null;
    publicmeetinginfoID: string;
    code: string;
    cognitive_load: number;
    distraction_1: number;
    distraction_2: number;
    distraction_3: number;
    distraction_4: number;
    distraction_5: number;
    distraction_6: number;
    distraction_7: number;
    distraction_8: number;
    distraction_9: number;
    distraction_10: number;
    distraction_11: number;
    distraction_12: number;
    distraction_13: number;
    distraction_14: number;
    distraction_15: number;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateEvaluationMutationVariables = {
  input: UpdateEvaluationInput;
  condition?: ModelEvaluationConditionInput | null;
};

export type UpdateEvaluationMutation = {
  updateEvaluation?: {
    __typename: "Evaluation";
    id: string;
    owner?: string | null;
    publicmeetinginfoID: string;
    code: string;
    cognitive_load: number;
    distraction_1: number;
    distraction_2: number;
    distraction_3: number;
    distraction_4: number;
    distraction_5: number;
    distraction_6: number;
    distraction_7: number;
    distraction_8: number;
    distraction_9: number;
    distraction_10: number;
    distraction_11: number;
    distraction_12: number;
    distraction_13: number;
    distraction_14: number;
    distraction_15: number;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteEvaluationMutationVariables = {
  input: DeleteEvaluationInput;
  condition?: ModelEvaluationConditionInput | null;
};

export type DeleteEvaluationMutation = {
  deleteEvaluation?: {
    __typename: "Evaluation";
    id: string;
    owner?: string | null;
    publicmeetinginfoID: string;
    code: string;
    cognitive_load: number;
    distraction_1: number;
    distraction_2: number;
    distraction_3: number;
    distraction_4: number;
    distraction_5: number;
    distraction_6: number;
    distraction_7: number;
    distraction_8: number;
    distraction_9: number;
    distraction_10: number;
    distraction_11: number;
    distraction_12: number;
    distraction_13: number;
    distraction_14: number;
    distraction_15: number;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateMeetingMutationVariables = {
  input: CreateMeetingInput;
  condition?: ModelMeetingConditionInput | null;
};

export type CreateMeetingMutation = {
  createMeeting?: {
    __typename: "Meeting";
    id: string;
    name: string;
    startedAt?: string | null;
    stoppedAt?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    SpeakerVoiceEmotions?: {
      __typename: "ModelSpeakerVoiceEmotionConnection";
      items: Array<{
        __typename: "SpeakerVoiceEmotion";
        id: string;
        timestamp: number;
        score: number;
        neutral: number;
        happy: number;
        sad: number;
        angry: number;
        fearful: number;
        disgusted: number;
        surprised: number;
        meetingID?: string | null;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    PublicMeetingInfo?: {
      __typename: "PublicMeetingInfo";
      id: string;
      name: string;
      startedAt: string;
      stoppedAt: string;
      owner?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    owner?: string | null;
    AudienceFaceExpressions?: {
      __typename: "ModelAudienceFaceExpressionConnection";
      items: Array<{
        __typename: "AudienceFaceExpression";
        id: string;
        timestamp: number;
        score: number;
        surprised?: number | null;
        happy?: number | null;
        neutral?: number | null;
        sad?: number | null;
        disgusted?: number | null;
        fearful?: number | null;
        angry?: number | null;
        meetingID: string;
        createdAt?: string | null;
        updatedAt?: string | null;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      }>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type UpdateMeetingMutationVariables = {
  input: UpdateMeetingInput;
  condition?: ModelMeetingConditionInput | null;
};

export type UpdateMeetingMutation = {
  updateMeeting?: {
    __typename: "Meeting";
    id: string;
    name: string;
    startedAt?: string | null;
    stoppedAt?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    SpeakerVoiceEmotions?: {
      __typename: "ModelSpeakerVoiceEmotionConnection";
      items: Array<{
        __typename: "SpeakerVoiceEmotion";
        id: string;
        timestamp: number;
        score: number;
        neutral: number;
        happy: number;
        sad: number;
        angry: number;
        fearful: number;
        disgusted: number;
        surprised: number;
        meetingID?: string | null;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    PublicMeetingInfo?: {
      __typename: "PublicMeetingInfo";
      id: string;
      name: string;
      startedAt: string;
      stoppedAt: string;
      owner?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    owner?: string | null;
    AudienceFaceExpressions?: {
      __typename: "ModelAudienceFaceExpressionConnection";
      items: Array<{
        __typename: "AudienceFaceExpression";
        id: string;
        timestamp: number;
        score: number;
        surprised?: number | null;
        happy?: number | null;
        neutral?: number | null;
        sad?: number | null;
        disgusted?: number | null;
        fearful?: number | null;
        angry?: number | null;
        meetingID: string;
        createdAt?: string | null;
        updatedAt?: string | null;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      }>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type DeleteMeetingMutationVariables = {
  input: DeleteMeetingInput;
  condition?: ModelMeetingConditionInput | null;
};

export type DeleteMeetingMutation = {
  deleteMeeting?: {
    __typename: "Meeting";
    id: string;
    name: string;
    startedAt?: string | null;
    stoppedAt?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    SpeakerVoiceEmotions?: {
      __typename: "ModelSpeakerVoiceEmotionConnection";
      items: Array<{
        __typename: "SpeakerVoiceEmotion";
        id: string;
        timestamp: number;
        score: number;
        neutral: number;
        happy: number;
        sad: number;
        angry: number;
        fearful: number;
        disgusted: number;
        surprised: number;
        meetingID?: string | null;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    PublicMeetingInfo?: {
      __typename: "PublicMeetingInfo";
      id: string;
      name: string;
      startedAt: string;
      stoppedAt: string;
      owner?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    owner?: string | null;
    AudienceFaceExpressions?: {
      __typename: "ModelAudienceFaceExpressionConnection";
      items: Array<{
        __typename: "AudienceFaceExpression";
        id: string;
        timestamp: number;
        score: number;
        surprised?: number | null;
        happy?: number | null;
        neutral?: number | null;
        sad?: number | null;
        disgusted?: number | null;
        fearful?: number | null;
        angry?: number | null;
        meetingID: string;
        createdAt?: string | null;
        updatedAt?: string | null;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      }>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type CreateAudienceFaceExpressionMutationVariables = {
  input: CreateAudienceFaceExpressionInput;
  condition?: ModelAudienceFaceExpressionConditionInput | null;
};

export type CreateAudienceFaceExpressionMutation = {
  createAudienceFaceExpression?: {
    __typename: "AudienceFaceExpression";
    id: string;
    timestamp: number;
    score: number;
    surprised?: number | null;
    happy?: number | null;
    neutral?: number | null;
    sad?: number | null;
    disgusted?: number | null;
    fearful?: number | null;
    angry?: number | null;
    meetingID: string;
    createdAt?: string | null;
    updatedAt?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type UpdateAudienceFaceExpressionMutationVariables = {
  input: UpdateAudienceFaceExpressionInput;
  condition?: ModelAudienceFaceExpressionConditionInput | null;
};

export type UpdateAudienceFaceExpressionMutation = {
  updateAudienceFaceExpression?: {
    __typename: "AudienceFaceExpression";
    id: string;
    timestamp: number;
    score: number;
    surprised?: number | null;
    happy?: number | null;
    neutral?: number | null;
    sad?: number | null;
    disgusted?: number | null;
    fearful?: number | null;
    angry?: number | null;
    meetingID: string;
    createdAt?: string | null;
    updatedAt?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type DeleteAudienceFaceExpressionMutationVariables = {
  input: DeleteAudienceFaceExpressionInput;
  condition?: ModelAudienceFaceExpressionConditionInput | null;
};

export type DeleteAudienceFaceExpressionMutation = {
  deleteAudienceFaceExpression?: {
    __typename: "AudienceFaceExpression";
    id: string;
    timestamp: number;
    score: number;
    surprised?: number | null;
    happy?: number | null;
    neutral?: number | null;
    sad?: number | null;
    disgusted?: number | null;
    fearful?: number | null;
    angry?: number | null;
    meetingID: string;
    createdAt?: string | null;
    updatedAt?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type GetSpeakerVoiceEmotionQueryVariables = {
  id: string;
};

export type GetSpeakerVoiceEmotionQuery = {
  getSpeakerVoiceEmotion?: {
    __typename: "SpeakerVoiceEmotion";
    id: string;
    timestamp: number;
    score: number;
    neutral: number;
    happy: number;
    sad: number;
    angry: number;
    fearful: number;
    disgusted: number;
    surprised: number;
    meetingID?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListSpeakerVoiceEmotionsQueryVariables = {
  filter?: ModelSpeakerVoiceEmotionFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListSpeakerVoiceEmotionsQuery = {
  listSpeakerVoiceEmotions?: {
    __typename: "ModelSpeakerVoiceEmotionConnection";
    items: Array<{
      __typename: "SpeakerVoiceEmotion";
      id: string;
      timestamp: number;
      score: number;
      neutral: number;
      happy: number;
      sad: number;
      angry: number;
      fearful: number;
      disgusted: number;
      surprised: number;
      meetingID?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    }>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncSpeakerVoiceEmotionsQueryVariables = {
  filter?: ModelSpeakerVoiceEmotionFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncSpeakerVoiceEmotionsQuery = {
  syncSpeakerVoiceEmotions?: {
    __typename: "ModelSpeakerVoiceEmotionConnection";
    items: Array<{
      __typename: "SpeakerVoiceEmotion";
      id: string;
      timestamp: number;
      score: number;
      neutral: number;
      happy: number;
      sad: number;
      angry: number;
      fearful: number;
      disgusted: number;
      surprised: number;
      meetingID?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    }>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetPublicMeetingInfoQueryVariables = {
  id: string;
};

export type GetPublicMeetingInfoQuery = {
  getPublicMeetingInfo?: {
    __typename: "PublicMeetingInfo";
    id: string;
    name: string;
    startedAt: string;
    stoppedAt: string;
    owner?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListPublicMeetingInfosQueryVariables = {
  filter?: ModelPublicMeetingInfoFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListPublicMeetingInfosQuery = {
  listPublicMeetingInfos?: {
    __typename: "ModelPublicMeetingInfoConnection";
    items: Array<{
      __typename: "PublicMeetingInfo";
      id: string;
      name: string;
      startedAt: string;
      stoppedAt: string;
      owner?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    }>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncPublicMeetingInfosQueryVariables = {
  filter?: ModelPublicMeetingInfoFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncPublicMeetingInfosQuery = {
  syncPublicMeetingInfos?: {
    __typename: "ModelPublicMeetingInfoConnection";
    items: Array<{
      __typename: "PublicMeetingInfo";
      id: string;
      name: string;
      startedAt: string;
      stoppedAt: string;
      owner?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    }>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetEvaluationQueryVariables = {
  id: string;
};

export type GetEvaluationQuery = {
  getEvaluation?: {
    __typename: "Evaluation";
    id: string;
    owner?: string | null;
    publicmeetinginfoID: string;
    code: string;
    cognitive_load: number;
    distraction_1: number;
    distraction_2: number;
    distraction_3: number;
    distraction_4: number;
    distraction_5: number;
    distraction_6: number;
    distraction_7: number;
    distraction_8: number;
    distraction_9: number;
    distraction_10: number;
    distraction_11: number;
    distraction_12: number;
    distraction_13: number;
    distraction_14: number;
    distraction_15: number;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListEvaluationsQueryVariables = {
  filter?: ModelEvaluationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListEvaluationsQuery = {
  listEvaluations?: {
    __typename: "ModelEvaluationConnection";
    items: Array<{
      __typename: "Evaluation";
      id: string;
      owner?: string | null;
      publicmeetinginfoID: string;
      code: string;
      cognitive_load: number;
      distraction_1: number;
      distraction_2: number;
      distraction_3: number;
      distraction_4: number;
      distraction_5: number;
      distraction_6: number;
      distraction_7: number;
      distraction_8: number;
      distraction_9: number;
      distraction_10: number;
      distraction_11: number;
      distraction_12: number;
      distraction_13: number;
      distraction_14: number;
      distraction_15: number;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    }>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncEvaluationsQueryVariables = {
  filter?: ModelEvaluationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncEvaluationsQuery = {
  syncEvaluations?: {
    __typename: "ModelEvaluationConnection";
    items: Array<{
      __typename: "Evaluation";
      id: string;
      owner?: string | null;
      publicmeetinginfoID: string;
      code: string;
      cognitive_load: number;
      distraction_1: number;
      distraction_2: number;
      distraction_3: number;
      distraction_4: number;
      distraction_5: number;
      distraction_6: number;
      distraction_7: number;
      distraction_8: number;
      distraction_9: number;
      distraction_10: number;
      distraction_11: number;
      distraction_12: number;
      distraction_13: number;
      distraction_14: number;
      distraction_15: number;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    }>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetMeetingQueryVariables = {
  id: string;
};

export type GetMeetingQuery = {
  getMeeting?: {
    __typename: "Meeting";
    id: string;
    name: string;
    startedAt?: string | null;
    stoppedAt?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    SpeakerVoiceEmotions?: {
      __typename: "ModelSpeakerVoiceEmotionConnection";
      items: Array<{
        __typename: "SpeakerVoiceEmotion";
        id: string;
        timestamp: number;
        score: number;
        neutral: number;
        happy: number;
        sad: number;
        angry: number;
        fearful: number;
        disgusted: number;
        surprised: number;
        meetingID?: string | null;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    PublicMeetingInfo?: {
      __typename: "PublicMeetingInfo";
      id: string;
      name: string;
      startedAt: string;
      stoppedAt: string;
      owner?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    owner?: string | null;
    AudienceFaceExpressions?: {
      __typename: "ModelAudienceFaceExpressionConnection";
      items: Array<{
        __typename: "AudienceFaceExpression";
        id: string;
        timestamp: number;
        score: number;
        surprised?: number | null;
        happy?: number | null;
        neutral?: number | null;
        sad?: number | null;
        disgusted?: number | null;
        fearful?: number | null;
        angry?: number | null;
        meetingID: string;
        createdAt?: string | null;
        updatedAt?: string | null;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      }>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type ListMeetingsQueryVariables = {
  filter?: ModelMeetingFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListMeetingsQuery = {
  listMeetings?: {
    __typename: "ModelMeetingConnection";
    items: Array<{
      __typename: "Meeting";
      id: string;
      name: string;
      startedAt?: string | null;
      stoppedAt?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      SpeakerVoiceEmotions?: {
        __typename: "ModelSpeakerVoiceEmotionConnection";
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      PublicMeetingInfo?: {
        __typename: "PublicMeetingInfo";
        id: string;
        name: string;
        startedAt: string;
        stoppedAt: string;
        owner?: string | null;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
      } | null;
      owner?: string | null;
      AudienceFaceExpressions?: {
        __typename: "ModelAudienceFaceExpressionConnection";
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    }>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncMeetingsQueryVariables = {
  filter?: ModelMeetingFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncMeetingsQuery = {
  syncMeetings?: {
    __typename: "ModelMeetingConnection";
    items: Array<{
      __typename: "Meeting";
      id: string;
      name: string;
      startedAt?: string | null;
      stoppedAt?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      SpeakerVoiceEmotions?: {
        __typename: "ModelSpeakerVoiceEmotionConnection";
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      PublicMeetingInfo?: {
        __typename: "PublicMeetingInfo";
        id: string;
        name: string;
        startedAt: string;
        stoppedAt: string;
        owner?: string | null;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
      } | null;
      owner?: string | null;
      AudienceFaceExpressions?: {
        __typename: "ModelAudienceFaceExpressionConnection";
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    }>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetAudienceFaceExpressionQueryVariables = {
  id: string;
};

export type GetAudienceFaceExpressionQuery = {
  getAudienceFaceExpression?: {
    __typename: "AudienceFaceExpression";
    id: string;
    timestamp: number;
    score: number;
    surprised?: number | null;
    happy?: number | null;
    neutral?: number | null;
    sad?: number | null;
    disgusted?: number | null;
    fearful?: number | null;
    angry?: number | null;
    meetingID: string;
    createdAt?: string | null;
    updatedAt?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type ListAudienceFaceExpressionsQueryVariables = {
  filter?: ModelAudienceFaceExpressionFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListAudienceFaceExpressionsQuery = {
  listAudienceFaceExpressions?: {
    __typename: "ModelAudienceFaceExpressionConnection";
    items: Array<{
      __typename: "AudienceFaceExpression";
      id: string;
      timestamp: number;
      score: number;
      surprised?: number | null;
      happy?: number | null;
      neutral?: number | null;
      sad?: number | null;
      disgusted?: number | null;
      fearful?: number | null;
      angry?: number | null;
      meetingID: string;
      createdAt?: string | null;
      updatedAt?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    }>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncAudienceFaceExpressionsQueryVariables = {
  filter?: ModelAudienceFaceExpressionFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncAudienceFaceExpressionsQuery = {
  syncAudienceFaceExpressions?: {
    __typename: "ModelAudienceFaceExpressionConnection";
    items: Array<{
      __typename: "AudienceFaceExpression";
      id: string;
      timestamp: number;
      score: number;
      surprised?: number | null;
      happy?: number | null;
      neutral?: number | null;
      sad?: number | null;
      disgusted?: number | null;
      fearful?: number | null;
      angry?: number | null;
      meetingID: string;
      createdAt?: string | null;
      updatedAt?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    }>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type OnCreateSpeakerVoiceEmotionSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateSpeakerVoiceEmotionSubscription = {
  onCreateSpeakerVoiceEmotion?: {
    __typename: "SpeakerVoiceEmotion";
    id: string;
    timestamp: number;
    score: number;
    neutral: number;
    happy: number;
    sad: number;
    angry: number;
    fearful: number;
    disgusted: number;
    surprised: number;
    meetingID?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateSpeakerVoiceEmotionSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateSpeakerVoiceEmotionSubscription = {
  onUpdateSpeakerVoiceEmotion?: {
    __typename: "SpeakerVoiceEmotion";
    id: string;
    timestamp: number;
    score: number;
    neutral: number;
    happy: number;
    sad: number;
    angry: number;
    fearful: number;
    disgusted: number;
    surprised: number;
    meetingID?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteSpeakerVoiceEmotionSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteSpeakerVoiceEmotionSubscription = {
  onDeleteSpeakerVoiceEmotion?: {
    __typename: "SpeakerVoiceEmotion";
    id: string;
    timestamp: number;
    score: number;
    neutral: number;
    happy: number;
    sad: number;
    angry: number;
    fearful: number;
    disgusted: number;
    surprised: number;
    meetingID?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnCreatePublicMeetingInfoSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreatePublicMeetingInfoSubscription = {
  onCreatePublicMeetingInfo?: {
    __typename: "PublicMeetingInfo";
    id: string;
    name: string;
    startedAt: string;
    stoppedAt: string;
    owner?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdatePublicMeetingInfoSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdatePublicMeetingInfoSubscription = {
  onUpdatePublicMeetingInfo?: {
    __typename: "PublicMeetingInfo";
    id: string;
    name: string;
    startedAt: string;
    stoppedAt: string;
    owner?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeletePublicMeetingInfoSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeletePublicMeetingInfoSubscription = {
  onDeletePublicMeetingInfo?: {
    __typename: "PublicMeetingInfo";
    id: string;
    name: string;
    startedAt: string;
    stoppedAt: string;
    owner?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateEvaluationSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateEvaluationSubscription = {
  onCreateEvaluation?: {
    __typename: "Evaluation";
    id: string;
    owner?: string | null;
    publicmeetinginfoID: string;
    code: string;
    cognitive_load: number;
    distraction_1: number;
    distraction_2: number;
    distraction_3: number;
    distraction_4: number;
    distraction_5: number;
    distraction_6: number;
    distraction_7: number;
    distraction_8: number;
    distraction_9: number;
    distraction_10: number;
    distraction_11: number;
    distraction_12: number;
    distraction_13: number;
    distraction_14: number;
    distraction_15: number;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateEvaluationSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateEvaluationSubscription = {
  onUpdateEvaluation?: {
    __typename: "Evaluation";
    id: string;
    owner?: string | null;
    publicmeetinginfoID: string;
    code: string;
    cognitive_load: number;
    distraction_1: number;
    distraction_2: number;
    distraction_3: number;
    distraction_4: number;
    distraction_5: number;
    distraction_6: number;
    distraction_7: number;
    distraction_8: number;
    distraction_9: number;
    distraction_10: number;
    distraction_11: number;
    distraction_12: number;
    distraction_13: number;
    distraction_14: number;
    distraction_15: number;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteEvaluationSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteEvaluationSubscription = {
  onDeleteEvaluation?: {
    __typename: "Evaluation";
    id: string;
    owner?: string | null;
    publicmeetinginfoID: string;
    code: string;
    cognitive_load: number;
    distraction_1: number;
    distraction_2: number;
    distraction_3: number;
    distraction_4: number;
    distraction_5: number;
    distraction_6: number;
    distraction_7: number;
    distraction_8: number;
    distraction_9: number;
    distraction_10: number;
    distraction_11: number;
    distraction_12: number;
    distraction_13: number;
    distraction_14: number;
    distraction_15: number;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateMeetingSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateMeetingSubscription = {
  onCreateMeeting?: {
    __typename: "Meeting";
    id: string;
    name: string;
    startedAt?: string | null;
    stoppedAt?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    SpeakerVoiceEmotions?: {
      __typename: "ModelSpeakerVoiceEmotionConnection";
      items: Array<{
        __typename: "SpeakerVoiceEmotion";
        id: string;
        timestamp: number;
        score: number;
        neutral: number;
        happy: number;
        sad: number;
        angry: number;
        fearful: number;
        disgusted: number;
        surprised: number;
        meetingID?: string | null;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    PublicMeetingInfo?: {
      __typename: "PublicMeetingInfo";
      id: string;
      name: string;
      startedAt: string;
      stoppedAt: string;
      owner?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    owner?: string | null;
    AudienceFaceExpressions?: {
      __typename: "ModelAudienceFaceExpressionConnection";
      items: Array<{
        __typename: "AudienceFaceExpression";
        id: string;
        timestamp: number;
        score: number;
        surprised?: number | null;
        happy?: number | null;
        neutral?: number | null;
        sad?: number | null;
        disgusted?: number | null;
        fearful?: number | null;
        angry?: number | null;
        meetingID: string;
        createdAt?: string | null;
        updatedAt?: string | null;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      }>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnUpdateMeetingSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateMeetingSubscription = {
  onUpdateMeeting?: {
    __typename: "Meeting";
    id: string;
    name: string;
    startedAt?: string | null;
    stoppedAt?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    SpeakerVoiceEmotions?: {
      __typename: "ModelSpeakerVoiceEmotionConnection";
      items: Array<{
        __typename: "SpeakerVoiceEmotion";
        id: string;
        timestamp: number;
        score: number;
        neutral: number;
        happy: number;
        sad: number;
        angry: number;
        fearful: number;
        disgusted: number;
        surprised: number;
        meetingID?: string | null;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    PublicMeetingInfo?: {
      __typename: "PublicMeetingInfo";
      id: string;
      name: string;
      startedAt: string;
      stoppedAt: string;
      owner?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    owner?: string | null;
    AudienceFaceExpressions?: {
      __typename: "ModelAudienceFaceExpressionConnection";
      items: Array<{
        __typename: "AudienceFaceExpression";
        id: string;
        timestamp: number;
        score: number;
        surprised?: number | null;
        happy?: number | null;
        neutral?: number | null;
        sad?: number | null;
        disgusted?: number | null;
        fearful?: number | null;
        angry?: number | null;
        meetingID: string;
        createdAt?: string | null;
        updatedAt?: string | null;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      }>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnDeleteMeetingSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteMeetingSubscription = {
  onDeleteMeeting?: {
    __typename: "Meeting";
    id: string;
    name: string;
    startedAt?: string | null;
    stoppedAt?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    SpeakerVoiceEmotions?: {
      __typename: "ModelSpeakerVoiceEmotionConnection";
      items: Array<{
        __typename: "SpeakerVoiceEmotion";
        id: string;
        timestamp: number;
        score: number;
        neutral: number;
        happy: number;
        sad: number;
        angry: number;
        fearful: number;
        disgusted: number;
        surprised: number;
        meetingID?: string | null;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    PublicMeetingInfo?: {
      __typename: "PublicMeetingInfo";
      id: string;
      name: string;
      startedAt: string;
      stoppedAt: string;
      owner?: string | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    owner?: string | null;
    AudienceFaceExpressions?: {
      __typename: "ModelAudienceFaceExpressionConnection";
      items: Array<{
        __typename: "AudienceFaceExpression";
        id: string;
        timestamp: number;
        score: number;
        surprised?: number | null;
        happy?: number | null;
        neutral?: number | null;
        sad?: number | null;
        disgusted?: number | null;
        fearful?: number | null;
        angry?: number | null;
        meetingID: string;
        createdAt?: string | null;
        updatedAt?: string | null;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      }>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnCreateAudienceFaceExpressionSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateAudienceFaceExpressionSubscription = {
  onCreateAudienceFaceExpression?: {
    __typename: "AudienceFaceExpression";
    id: string;
    timestamp: number;
    score: number;
    surprised?: number | null;
    happy?: number | null;
    neutral?: number | null;
    sad?: number | null;
    disgusted?: number | null;
    fearful?: number | null;
    angry?: number | null;
    meetingID: string;
    createdAt?: string | null;
    updatedAt?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnUpdateAudienceFaceExpressionSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateAudienceFaceExpressionSubscription = {
  onUpdateAudienceFaceExpression?: {
    __typename: "AudienceFaceExpression";
    id: string;
    timestamp: number;
    score: number;
    surprised?: number | null;
    happy?: number | null;
    neutral?: number | null;
    sad?: number | null;
    disgusted?: number | null;
    fearful?: number | null;
    angry?: number | null;
    meetingID: string;
    createdAt?: string | null;
    updatedAt?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnDeleteAudienceFaceExpressionSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteAudienceFaceExpressionSubscription = {
  onDeleteAudienceFaceExpression?: {
    __typename: "AudienceFaceExpression";
    id: string;
    timestamp: number;
    score: number;
    surprised?: number | null;
    happy?: number | null;
    neutral?: number | null;
    sad?: number | null;
    disgusted?: number | null;
    fearful?: number | null;
    angry?: number | null;
    meetingID: string;
    createdAt?: string | null;
    updatedAt?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};
