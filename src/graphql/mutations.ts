/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSpeakerVoiceEmotion = /* GraphQL */ `
  mutation CreateSpeakerVoiceEmotion(
    $input: CreateSpeakerVoiceEmotionInput!
    $condition: ModelSpeakerVoiceEmotionConditionInput
  ) {
    createSpeakerVoiceEmotion(input: $input, condition: $condition) {
      id
      timestamp
      score
      neutral
      happy
      sad
      angry
      fearful
      disgusted
      surprised
      meetingID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSpeakerVoiceEmotion = /* GraphQL */ `
  mutation UpdateSpeakerVoiceEmotion(
    $input: UpdateSpeakerVoiceEmotionInput!
    $condition: ModelSpeakerVoiceEmotionConditionInput
  ) {
    updateSpeakerVoiceEmotion(input: $input, condition: $condition) {
      id
      timestamp
      score
      neutral
      happy
      sad
      angry
      fearful
      disgusted
      surprised
      meetingID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSpeakerVoiceEmotion = /* GraphQL */ `
  mutation DeleteSpeakerVoiceEmotion(
    $input: DeleteSpeakerVoiceEmotionInput!
    $condition: ModelSpeakerVoiceEmotionConditionInput
  ) {
    deleteSpeakerVoiceEmotion(input: $input, condition: $condition) {
      id
      timestamp
      score
      neutral
      happy
      sad
      angry
      fearful
      disgusted
      surprised
      meetingID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPublicMeetingInfo = /* GraphQL */ `
  mutation CreatePublicMeetingInfo(
    $input: CreatePublicMeetingInfoInput!
    $condition: ModelPublicMeetingInfoConditionInput
  ) {
    createPublicMeetingInfo(input: $input, condition: $condition) {
      id
      name
      startedAt
      stoppedAt
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updatePublicMeetingInfo = /* GraphQL */ `
  mutation UpdatePublicMeetingInfo(
    $input: UpdatePublicMeetingInfoInput!
    $condition: ModelPublicMeetingInfoConditionInput
  ) {
    updatePublicMeetingInfo(input: $input, condition: $condition) {
      id
      name
      startedAt
      stoppedAt
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deletePublicMeetingInfo = /* GraphQL */ `
  mutation DeletePublicMeetingInfo(
    $input: DeletePublicMeetingInfoInput!
    $condition: ModelPublicMeetingInfoConditionInput
  ) {
    deletePublicMeetingInfo(input: $input, condition: $condition) {
      id
      name
      startedAt
      stoppedAt
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createEvaluation = /* GraphQL */ `
  mutation CreateEvaluation(
    $input: CreateEvaluationInput!
    $condition: ModelEvaluationConditionInput
  ) {
    createEvaluation(input: $input, condition: $condition) {
      id
      owner
      publicmeetinginfoID
      code
      cognitive_load
      distraction_1
      distraction_2
      distraction_3
      distraction_4
      distraction_5
      distraction_6
      distraction_7
      distraction_8
      distraction_9
      distraction_10
      distraction_11
      distraction_12
      distraction_13
      distraction_14
      distraction_15
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateEvaluation = /* GraphQL */ `
  mutation UpdateEvaluation(
    $input: UpdateEvaluationInput!
    $condition: ModelEvaluationConditionInput
  ) {
    updateEvaluation(input: $input, condition: $condition) {
      id
      owner
      publicmeetinginfoID
      code
      cognitive_load
      distraction_1
      distraction_2
      distraction_3
      distraction_4
      distraction_5
      distraction_6
      distraction_7
      distraction_8
      distraction_9
      distraction_10
      distraction_11
      distraction_12
      distraction_13
      distraction_14
      distraction_15
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteEvaluation = /* GraphQL */ `
  mutation DeleteEvaluation(
    $input: DeleteEvaluationInput!
    $condition: ModelEvaluationConditionInput
  ) {
    deleteEvaluation(input: $input, condition: $condition) {
      id
      owner
      publicmeetinginfoID
      code
      cognitive_load
      distraction_1
      distraction_2
      distraction_3
      distraction_4
      distraction_5
      distraction_6
      distraction_7
      distraction_8
      distraction_9
      distraction_10
      distraction_11
      distraction_12
      distraction_13
      distraction_14
      distraction_15
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createMeeting = /* GraphQL */ `
  mutation CreateMeeting(
    $input: CreateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    createMeeting(input: $input, condition: $condition) {
      id
      name
      startedAt
      stoppedAt
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      SpeakerVoiceEmotions {
        items {
          id
          timestamp
          score
          neutral
          happy
          sad
          angry
          fearful
          disgusted
          surprised
          meetingID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      PublicMeetingInfo {
        id
        name
        startedAt
        stoppedAt
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      owner
      AudienceFaceExpressions {
        items {
          id
          timestamp
          score
          surprised
          happy
          neutral
          sad
          disgusted
          fearful
          angry
          meetingID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateMeeting = /* GraphQL */ `
  mutation UpdateMeeting(
    $input: UpdateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    updateMeeting(input: $input, condition: $condition) {
      id
      name
      startedAt
      stoppedAt
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      SpeakerVoiceEmotions {
        items {
          id
          timestamp
          score
          neutral
          happy
          sad
          angry
          fearful
          disgusted
          surprised
          meetingID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      PublicMeetingInfo {
        id
        name
        startedAt
        stoppedAt
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      owner
      AudienceFaceExpressions {
        items {
          id
          timestamp
          score
          surprised
          happy
          neutral
          sad
          disgusted
          fearful
          angry
          meetingID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteMeeting = /* GraphQL */ `
  mutation DeleteMeeting(
    $input: DeleteMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    deleteMeeting(input: $input, condition: $condition) {
      id
      name
      startedAt
      stoppedAt
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      SpeakerVoiceEmotions {
        items {
          id
          timestamp
          score
          neutral
          happy
          sad
          angry
          fearful
          disgusted
          surprised
          meetingID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      PublicMeetingInfo {
        id
        name
        startedAt
        stoppedAt
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      owner
      AudienceFaceExpressions {
        items {
          id
          timestamp
          score
          surprised
          happy
          neutral
          sad
          disgusted
          fearful
          angry
          meetingID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createAudienceFaceExpression = /* GraphQL */ `
  mutation CreateAudienceFaceExpression(
    $input: CreateAudienceFaceExpressionInput!
    $condition: ModelAudienceFaceExpressionConditionInput
  ) {
    createAudienceFaceExpression(input: $input, condition: $condition) {
      id
      timestamp
      score
      surprised
      happy
      neutral
      sad
      disgusted
      fearful
      angry
      meetingID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateAudienceFaceExpression = /* GraphQL */ `
  mutation UpdateAudienceFaceExpression(
    $input: UpdateAudienceFaceExpressionInput!
    $condition: ModelAudienceFaceExpressionConditionInput
  ) {
    updateAudienceFaceExpression(input: $input, condition: $condition) {
      id
      timestamp
      score
      surprised
      happy
      neutral
      sad
      disgusted
      fearful
      angry
      meetingID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteAudienceFaceExpression = /* GraphQL */ `
  mutation DeleteAudienceFaceExpression(
    $input: DeleteAudienceFaceExpressionInput!
    $condition: ModelAudienceFaceExpressionConditionInput
  ) {
    deleteAudienceFaceExpression(input: $input, condition: $condition) {
      id
      timestamp
      score
      surprised
      happy
      neutral
      sad
      disgusted
      fearful
      angry
      meetingID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
