import { UserAPI } from "./api";

export interface State {
  contacts: Contacts;
  filters: { status: string };
}

export interface Contacts {
  items: UserAPI[];
  isLoading: boolean;
  error: unknown;
}
