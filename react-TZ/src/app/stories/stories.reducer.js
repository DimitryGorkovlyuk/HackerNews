import { storiesActionTypes } from './stories.action-types';

const initialState = {
  ids: [],
  storyInfo: [],
  authorInfo: [],
};

export const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case storiesActionTypes.FETCH_STORIES_ID_SUCCESS: {
      return {
        ...state,
        ids: [...action.storyIds],
      };
    }
    case storiesActionTypes.FETCH_STORY_INFO_SUCCESS: {
      return {
        ...state,
        storyInfo: [...action.storyInfo],
      };
    }
    case storiesActionTypes.FETCH_AUTHOR_INFO_SUCCESS: {
      return {
        ...state,
        authorInfo: [...action.authorInfo],
      };
    }

    default: {
      return state;
    }
  }
};
