import {combineReducers, compose} from 'redux';
import {usersCountReducer, usersReducer} from './reducers';
import {configureStore} from "@reduxjs/toolkit";


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootReducers = combineReducers({
  usersData: usersReducer,
  userCount: usersCountReducer,
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store: Store<RootStoreType> = createStore(rootReducers, composeEnhancers());

export const store = configureStore({
  reducer: rootReducers,
})
export type AppDispatch = typeof store.dispatch
export type RootStoreType = ReturnType<typeof rootReducers>

//@ts-ignore
window.store = store;
// export type RootStateOrAny = AnyIfEmpty<FixTypeLater>;
