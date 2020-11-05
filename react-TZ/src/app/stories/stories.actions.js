import { storiesActionTypes } from './stories.action-types';

const fetchStoryIds = () => ({
  type: storiesActionTypes.FETCH_STORIES_ID,
});

const fetchStoryIdsFail = (error) => ({
  type: storiesActionTypes.FETCH_STORIES_ID_FAIL,
  error,
});

const fetchStoryIdsSuccess = (storyIds) => ({
  type: storiesActionTypes.FETCH_STORIES_ID_SUCCESS,
  storyIds,
});

const fetchStoryInfo = (storyIds) => ({
  type: storiesActionTypes.FETCH_STORY_INFO,
  storyIds,
});

const fetchStoryInfoFail = (error) => ({
  type: storiesActionTypes.FETCH_STORY_INFO_FAIL,
  error,
});

const fetchStoryInfoSuccess = (storyInfo) => ({
  type: storiesActionTypes.FETCH_STORY_INFO_SUCCESS,
  storyInfo,
});

const fetchAuthorInfo = (storyIds) => ({
  type: storiesActionTypes.FETCH_AUTHOR_INFO,
  storyIds,
});

const fetchAuthorInfoFail = (error) => ({
  type: storiesActionTypes.FETCH_AUTHOR_INFO_FAIL,
  error,
});

const fetchAuthorInfoSuccess = (authorInfo) => ({
  type: storiesActionTypes.FETCH_AUTHOR_INFO_SUCCESS,
  authorInfo,
});

export const storiesActions = {
  fetchStoryIds,
  fetchStoryIdsFail,
  fetchStoryIdsSuccess,

  fetchStoryInfo,
  fetchStoryInfoFail,
  fetchStoryInfoSuccess,

  fetchAuthorInfo,
  fetchAuthorInfoFail,
  fetchAuthorInfoSuccess,
};
