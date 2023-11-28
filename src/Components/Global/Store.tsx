import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux/es/types";
import myReducer from "../Global/ReduxState";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  PAUSE,
  PURGE,
  FLUSH,
  REGISTER,
  PERSIST,
  REHYDRATE,
} from "redux-persist";

const persistConfig = {
  key: "MyE_Waste",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, myReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

//this will define your dispatch and selector functions

export const UseAppDispatch: () => typeof Store.dispatch = useDispatch;

export const UseAppSelector: TypedUseSelectorHook<
  ReturnType<typeof Store.getState>
> = useSelector;
