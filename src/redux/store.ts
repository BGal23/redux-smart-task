import { Reducer, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { contactsReducer } from "./contactsSlice";
import { Storage } from "redux-persist/es/types";
import storage from "redux-persist/lib/storage";
import { filtersReducer } from "./filtersSlice";

interface Persist {
  key: string;
  storage: Storage;
  whitelist?: string[];
}

const contactPersistConfig: Persist = {
  key: "contacts",
  storage: storage,
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactPersistConfig, contactsReducer) as Reducer,
    filters: filtersReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
