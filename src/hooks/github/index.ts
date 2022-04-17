import axios from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { api } from "../../services/github";
import { IRepository } from "./index.types";

const options = {
  staleTime: 1000 * 60, // 1 minute
};

const useRepositories = () => {
  return useQuery<IRepository[]>(
    "repositories",
    async () => {
      const response = await api.get("/users/brunocharamba/repos?type=owner");
      return response.data;
    },
    options
  );
};

export { useRepositories };
