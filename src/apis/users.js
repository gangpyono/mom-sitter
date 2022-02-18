import { fetcher } from "./index.js";

const userApi = {
  getUsers: async (param) => {
    const res = await fetcher.get("/search/users", {
      params: {
        q: param,
        page: 1,
        per_page: 100,
      },
    });
    return res.data;
  },
};

export default userApi;
