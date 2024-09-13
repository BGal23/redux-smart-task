import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";
import { Contacts } from "../types/redux";
import { UserAPI } from "../types/api";

const handlePending = (state: Contacts) => {
  state.isLoading = true;
};

const handleRejected = (state: Contacts, action: PayloadAction) => {
  state.isLoading = false;
  state.error = action.payload;
};

const isPendingAction = (action: Action) => {
  return action.type.endsWith("/pending");
};

const isRejectAction = (action: Action) => {
  return action.type.endsWith("/rejected");
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [] as UserAPI[],
    isLoading: false as boolean,
    error: null as unknown,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchContacts.fulfilled,
        (state, action: PayloadAction<UserAPI[]>) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload.map(
            ({ id, name, username, email, phone }) => ({
              id,
              name,
              username,
              email,
              phone,
            })
          );
        }
      )

      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state) => {
        state.error = "someone used an old function, fix it!";
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
