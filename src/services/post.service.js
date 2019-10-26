import { get } from "../helpers/api";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = cb =>
  get(BASE_URL)
    .then(cb)
    .catch(err => console.warn(err));
