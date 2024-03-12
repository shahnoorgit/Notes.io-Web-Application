export interface AuthUser {
  _id: unknown;
  fullName: string;
  username: string;
}

export type fetchedNotesType = {
  _id: string;
  title: string;
  body: string;
};
