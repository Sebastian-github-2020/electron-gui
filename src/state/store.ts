import {createStore} from "redux";
import UserReducer from "./reducers";
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// 非持久化得写法
// const store = createStore(UserReducer)

const persistConfig = {
    key: 'root',
    storage: storage
}

const myPersistReducer = persistReducer(persistConfig, UserReducer)

const store = createStore(myPersistReducer)

const myPersistStore = persistStore(store)
export const persistor = myPersistStore
export default store