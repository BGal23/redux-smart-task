import { createSelector } from "@reduxjs/toolkit";
import { State } from "../types/redux";

export const selectContacts = (state: State) => state.contacts.items;
export const selectFiltersStatus = (state: State) => state.filters.status;
export const selectIsLoading = (state: State) => state.contacts.isLoading;
export const selectError = (state: State) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFiltersStatus],
  (contacts, filtersStatus) => {
    const searchString = filtersStatus.toLowerCase();

    return contacts.filter(({ name, username, email, phone }) => {
      const contactValues = [name, username, email, phone];

      return contactValues.some((value) =>
        value.toLowerCase().includes(searchString)
      );
    });
  }
);
