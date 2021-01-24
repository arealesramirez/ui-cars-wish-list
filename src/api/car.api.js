import { api } from "./base.api";

const getCars = () => api.get("car/").then((res) => res.data);

export { getCars };
