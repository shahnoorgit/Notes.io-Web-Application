export type fetchedNotesType = [
  {
    _id?: unknown;
    madeby?: unknown;
    title: string;
    body: string;
    createdAt?: string;
    updatedAt?: unknown;
    __v?: unknown;
  }
];

export type CreateNote = {
  _id: unknown;
  title: string;
  body: string;
};
