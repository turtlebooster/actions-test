import baseAxios from "axios";

export const baseURL = "https://snowduck.world/api/v1";

const Axios = baseAxios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default Axios;
