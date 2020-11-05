import { all } from 'redux-saga/effects';

import { storiesSaga } from './stories';

export function* rootSaga() {
  const allSagas = [...storiesSaga].map((saga) => saga());

  yield all(allSagas);
}
