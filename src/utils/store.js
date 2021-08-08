import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { watchSaga } from '../sagas/rootSaga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createFirestoreInstance } from 'redux-firestore'
import firebase from 'firebase/app'
import rootReducer from './reducers/rootReducer'
import firebaseConfig from './config/firebase'
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp(firebaseConfig)
firebase.firestore()

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

sagaMiddleware.run(watchSaga)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

const firestore = firebase.firestore()

export { store, rrfProps, firestore }
