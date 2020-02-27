import { createStore } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import PatientReducer from "../reducers"

const persistConfig = {
  key: 'patientSystem',
  storage,
}

const persistedReducer = persistReducer(persistConfig, PatientReducer)
let store = createStore(persistedReducer)
let persistor = persistStore(store)

export  {store, persistor}
