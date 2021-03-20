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
  name?: string;
  from?: number;
  limit?: number;
  postId?: number;
};

export function useComments({
  from = 0,
  limit = 10,
  name,
  postId,
}: UseComments) {
  return useQuery<Post[]>(
    ["posts", { from, limit, name, postId }],
    async () => {
      let url = `https://jsonplaceholder.typicode.com/comments?_start=${from}&`;

      if (name) {
        url += `name=${name}`;
      }

      if (postId) {
        url += `postId=${postId}`;
      }

      if (!name && !postId) {
        url += `_limit=${limit}`;
      }

      const { data } = await axios.get(url);
      return data;
    }
  );
}
