import axios from "axios";

const _headers = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const get = async (url) => {
  let result = await axios.get(url, _headers);
  if (result.status === 200) {
    return result;
  }
  if (result.status === 404) {
    return result;
  }
};

export const authRequest = async (request, url, payload) => {
  let result = await request(url, JSON.stringify(payload), _headers);
  if (result.status === 200) {
    // success (GET, PUT, PATCH)
    return result;
  }
  if (result.status === 201) {
    // created (POST)
    return result;
  }
  if (result.status === 204) {
    // destroyed (DELETE)
    return result;
  }
  if (result.status === 400) {
    // not created (POST)
    return result;
  }
  if (result.status === 404) {
    // not found (GET, PUT, PATCH, DELETE)
    return result;
  }
};

authenticationManager
