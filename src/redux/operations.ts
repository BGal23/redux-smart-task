import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const fetchContacts = createAsyncThunk(
  "contacts/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/users");
      return res.data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
