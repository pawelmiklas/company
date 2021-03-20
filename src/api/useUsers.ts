import axios from "axios";
import { useQuery } from "react-query";
import { User } from "store/types";

export function useUsers() {
  return useQuery<User[]>(["users"], async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    return data;
  });
}
