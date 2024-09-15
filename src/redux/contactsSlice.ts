import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";
import { Contacts } from "../types/redux";
import { User } from "../types/user";

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
    items: [] as User[],
    isLoading: false as boolean,
    error: null as unknown,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchContacts.fulfilled,
        (state, action: PayloadAction<User[]>) => {
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
        state.error = "An unknown error occurred";
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
