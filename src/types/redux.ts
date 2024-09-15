import { User } from "./user";

export interface State {
  contacts: Contacts;
  filters: { status: string };
}

export interface Contacts {
  items: User[];
  isLoading: boolean;
  error: unknown;
}
