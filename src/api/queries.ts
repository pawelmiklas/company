import axios from "axios";
import { useQuery } from "react-query";

type Post = {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
};

type UseComments = {
  filter?: string;
  from?: number;
  limit?: number;
};

export function useComments({ from = 0, limit = 10, filter }: UseComments) {
  return useQuery<Post[]>(["posts", { from, limit, filter }], async () => {
    let url = `https://jsonplaceholder.typicode.com/comments?`;

    if (filter) {
      url += `_start=${from}&name=${filter}`;
    } else {
      url += `_start=${from}&_limit=${limit}`;
    }

    const { data } = await axios.get(url);
    return data;
  });
}
