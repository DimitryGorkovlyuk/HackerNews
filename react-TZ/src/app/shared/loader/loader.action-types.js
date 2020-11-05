const actionPrefix = (actionType) => `Loader: ${actionType}`;

const SHOW = actionPrefix`SHOW`;
const HIDE = actionPrefix`HIDE`;

export const loaderActionTypes = {
  SHOW,
  HIDE,
};
