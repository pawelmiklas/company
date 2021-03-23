import axios from "axios";
import { useQuery } from "react-query";
import { Photo } from "store/types";

type UsePhotos = {
  from?: number;
  limit?: number;
};

export function usePhotos({ from = 0, limit = 10 }: UsePhotos) {
  return useQuery<Photo[]>(["photos", { from, limit }], async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?_start=${from}&_limit=${limit}`
    );

    return data;
  });
}
