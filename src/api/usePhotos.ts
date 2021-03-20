import axios from "axios";
import { useQuery } from "react-query";
import { Photo } from "store/types";

export function usePhotos() {
  return useQuery<Photo[]>(["photos"], async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );

    return data;
  });
}
