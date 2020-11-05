import { loaderActionTypes } from './loader.action-types';

const initialState = {
  activeRequests: 0,
};

export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case loaderActionTypes.SHOW: {
      return {
        activeRequests: state.activeRequests + 1,
      };
    }

    case loaderActionTypes.HIDE: {
      return {
        activeRequests: state.activeRequests - 1,
      };
    }

    default: {
      return state;
    }
  }
};
