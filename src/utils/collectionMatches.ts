import { Photo, User } from "store/types";

export const matchUser = (users: User[], id: number) =>
  users.find((user) => user.id === id);

export const matchPhoto = (photos: Photo[], id: number) =>
  photos.find((photo) => photo.id === id);
