import { call, takeLatest, put } from 'redux-saga/effects';

import { storiesActionTypes } from './stories.action-types';
import { storiesActions } from './stories.actions';
import { storiesApi } from './stories.api';
import { loaderActionCreators } from '../shared';

export function* fetchStoryIds() {
  try {
    yield put(loaderActionCreators.show());
    const ArrayIds = yield call([storiesApi, storiesApi.getStoryIds]);
    const storyIds = ArrayIds.sort(() => Math.random() - Math.random()).slice(0, 10);
    yield put(storiesActions.fetchStoryIdsSuccess(storyIds));
    yield put(storiesActions.fetchStoryInfo(storyIds));
  } catch (error) {
    yield put(storiesActions.fetchStoryIdsFail(error));
  } finally {
    yield put(loaderActionCreators.hide());
  }
}

export function* watchFetchStoryIds() {
  yield takeLatest(storiesActionTypes.FETCH_STORIES_ID, fetchStoryIds);
}

export function* fetchStoryInfo(action) {
  try {
    yield put(loaderActionCreators.show());
    const storyInfo = yield call([storiesApi, storiesApi.getStoryInfo], action.storyIds);
    yield put(storiesActions.fetchStoryInfoSuccess(storyInfo));
    yield put(storiesActions.fetchAuthorInfo(storyInfo));
  } catch (error) {
    yield put(storiesActions.fetchStoryInfoFail(error));
  } finally {
    yield put(loaderActionCreators.hide());
  }
}

export function* watchFetchStoryInfo() {
  yield takeLatest(storiesActionTypes.FETCH_STORY_INFO, fetchStoryInfo);
}

export function* fetchAuthorInfo(action) {
  try {
    yield put(loaderActionCreators.show());
    const authorInfo = yield call([storiesApi, storiesApi.getAuthorInfo], action.storyIds);
    yield put(storiesActions.fetchAuthorInfoSuccess(authorInfo));
  } catch (error) {
    yield put(storiesActions.fetchAuthorInfoFail(error));
  } finally {
    yield put(loaderActionCreators.hide());
  }
}

export function* watchFetchAuthorInfo() {
  yield takeLatest(storiesActionTypes.FETCH_AUTHOR_INFO, fetchAuthorInfo);
}

export const storiesSaga = [
  watchFetchStoryIds,
  watchFetchStoryInfo,
  watchFetchAuthorInfo,
];
