/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSpeakerVoiceEmotion = /* GraphQL */ `
  subscription OnCreateSpeakerVoiceEmotion($owner: String) {
    onCreateSpeakerVoiceEmotion(owner: $owner) {
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
export const onUpdateSpeakerVoiceEmotion = /* GraphQL */ `
  subscription OnUpdateSpeakerVoiceEmotion($owner: String) {
    onUpdateSpeakerVoiceEmotion(owner: $owner) {
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
export const onDeleteSpeakerVoiceEmotion = /* GraphQL */ `
  subscription OnDeleteSpeakerVoiceEmotion($owner: String) {
    onDeleteSpeakerVoiceEmotion(owner: $owner) {
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
export const onCreatePublicMeetingInfo = /* GraphQL */ `
  subscription OnCreatePublicMeetingInfo($owner: String) {
    onCreatePublicMeetingInfo(owner: $owner) {
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
export const onUpdatePublicMeetingInfo = /* GraphQL */ `
  subscription OnUpdatePublicMeetingInfo($owner: String) {
    onUpdatePublicMeetingInfo(owner: $owner) {
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
export const onDeletePublicMeetingInfo = /* GraphQL */ `
  subscription OnDeletePublicMeetingInfo($owner: String) {
    onDeletePublicMeetingInfo(owner: $owner) {
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
export const onCreateEvaluation = /* GraphQL */ `
  subscription OnCreateEvaluation($owner: String) {
    onCreateEvaluation(owner: $owner) {
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
export const onUpdateEvaluation = /* GraphQL */ `
  subscription OnUpdateEvaluation($owner: String) {
    onUpdateEvaluation(owner: $owner) {
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
export const onDeleteEvaluation = /* GraphQL */ `
  subscription OnDeleteEvaluation($owner: String) {
    onDeleteEvaluation(owner: $owner) {
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
export const onCreateMeeting = /* GraphQL */ `
  subscription OnCreateMeeting($owner: String) {
    onCreateMeeting(owner: $owner) {
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
export const onUpdateMeeting = /* GraphQL */ `
  subscription OnUpdateMeeting($owner: String) {
    onUpdateMeeting(owner: $owner) {
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
export const onDeleteMeeting = /* GraphQL */ `
  subscription OnDeleteMeeting($owner: String) {
    onDeleteMeeting(owner: $owner) {
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
export const onCreateAudienceFaceExpression = /* GraphQL */ `
  subscription OnCreateAudienceFaceExpression($owner: String) {
    onCreateAudienceFaceExpression(owner: $owner) {
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
export const onUpdateAudienceFaceExpression = /* GraphQL */ `
  subscription OnUpdateAudienceFaceExpression($owner: String) {
    onUpdateAudienceFaceExpression(owner: $owner) {
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
export const onDeleteAudienceFaceExpression = /* GraphQL */ `
  subscription OnDeleteAudienceFaceExpression($owner: String) {
    onDeleteAudienceFaceExpression(owner: $owner) {
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
