import create from "zustand";
import { Photo, User } from "./types";

type State = {
  users: User[];
  setUsers: (users: User[]) => void;
  photos: Photo[];
  setPhotos: (photos: Photo[]) => void;
};

const useStore = create<State>((set) => ({
  users: [],
  setUsers: (users) => set(() => ({ users })),
  photos: [],
  setPhotos: (photos) => set(() => ({ photos })),
}));

export { useStore };
