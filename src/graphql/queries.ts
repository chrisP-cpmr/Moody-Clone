/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSpeakerVoiceEmotion = /* GraphQL */ `
  query GetSpeakerVoiceEmotion($id: ID!) {
    getSpeakerVoiceEmotion(id: $id) {
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
export const listSpeakerVoiceEmotions = /* GraphQL */ `
  query ListSpeakerVoiceEmotions(
    $filter: ModelSpeakerVoiceEmotionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpeakerVoiceEmotions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const syncSpeakerVoiceEmotions = /* GraphQL */ `
  query SyncSpeakerVoiceEmotions(
    $filter: ModelSpeakerVoiceEmotionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSpeakerVoiceEmotions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getPublicMeetingInfo = /* GraphQL */ `
  query GetPublicMeetingInfo($id: ID!) {
    getPublicMeetingInfo(id: $id) {
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
export const listPublicMeetingInfos = /* GraphQL */ `
  query ListPublicMeetingInfos(
    $filter: ModelPublicMeetingInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublicMeetingInfos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPublicMeetingInfos = /* GraphQL */ `
  query SyncPublicMeetingInfos(
    $filter: ModelPublicMeetingInfoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPublicMeetingInfos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getEvaluation = /* GraphQL */ `
  query GetEvaluation($id: ID!) {
    getEvaluation(id: $id) {
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
export const listEvaluations = /* GraphQL */ `
  query ListEvaluations(
    $filter: ModelEvaluationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvaluations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEvaluations = /* GraphQL */ `
  query SyncEvaluations(
    $filter: ModelEvaluationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvaluations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getMeeting = /* GraphQL */ `
  query GetMeeting($id: ID!) {
    getMeeting(id: $id) {
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
export const listMeetings = /* GraphQL */ `
  query ListMeetings(
    $filter: ModelMeetingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeetings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMeetings = /* GraphQL */ `
  query SyncMeetings(
    $filter: ModelMeetingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMeetings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getAudienceFaceExpression = /* GraphQL */ `
  query GetAudienceFaceExpression($id: ID!) {
    getAudienceFaceExpression(id: $id) {
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
export const listAudienceFaceExpressions = /* GraphQL */ `
  query ListAudienceFaceExpressions(
    $filter: ModelAudienceFaceExpressionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAudienceFaceExpressions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
`;
export const syncAudienceFaceExpressions = /* GraphQL */ `
  query SyncAudienceFaceExpressions(
    $filter: ModelAudienceFaceExpressionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAudienceFaceExpressions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
`;
