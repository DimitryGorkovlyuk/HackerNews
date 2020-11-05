import { loaderActionTypes } from './loader.action-types';

export const show = () => ({
  type: loaderActionTypes.SHOW,
});

export const hide = () => ({
  type: loaderActionTypes.HIDE,
});

export const loaderActionCreators = {
  show,
  hide,
};
