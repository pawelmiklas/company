import axios from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { User } from "store/types";

type UseUsers = {
  options?: UseQueryOptions<User[]>;
};

export function useUsers({ options }: UseUsers) {
  return useQuery<User[]>(
    ["users"],
    async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      return data;
    },
    options
  );
}
