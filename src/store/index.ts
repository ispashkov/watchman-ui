import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import history from '../utils/history';

const logger = createLogger({
  collapsed: true
});

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer(history),
  {},
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history),
      logger
    )
  )
)

sagaMiddleware.run(rootSaga);
