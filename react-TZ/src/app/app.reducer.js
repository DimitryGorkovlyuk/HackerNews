import { combineReducers } from 'redux';

import { storiesReducer as stories } from './stories';
import { loaderReducer as loader } from './shared';

export const appReducer = combineReducers({
  stories,
  loader,
});
