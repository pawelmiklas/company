import axios from "axios";
import { useQuery } from "react-query";
import { Post } from "store/types";

type UsePosts = {
  from?: number;
  limit?: number;
};

export function usePosts({ from = 0, limit = 10 }: UsePosts) {
  return useQuery<Post[]>(["users", { from, limit }], async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_start=${from}&_limit=${limit}`
    );

    return data;
  });
}
