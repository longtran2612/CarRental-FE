import axiosClient from "./axiosClient";

const loginApi = {
  login: (username, password) => {
    const url = "/auth/login";
    return axiosClient.post(url, { username, password });
  },
  registry: (name, username, password) => {
    const url = '/auth/registry';

    return axiosClient.post(url, { name, username, password });
},
fetchUser: (username) => {
  const url = `/auth/users/${username}`;
  return axiosClient.get(url);
},
};

export default loginApi;