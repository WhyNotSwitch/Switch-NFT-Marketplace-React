import axios from "axios";

const BASE_URL = "http://localhost:8000/metamask/";
const HEADERS = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const signUp = async (web3, account) => {
  const _payload = JSON.stringify({
    public_address: account,
    user: { username: account },
  });
  await axios.post(BASE_URL, _payload, HEADERS);
  return login(web3, account);
};

export const login = async (web3, account) => {
  const res = await axios.get(`${BASE_URL}${account}/`, HEADERS);
  const signed = await web3.eth.personal.sign(res.data.nonce, account);

  const _payload = JSON.stringify({ signature: signed });
  const response = await axios.post(
    `${BASE_URL}login/${account}`,
    _payload,
    HEADERS
  );
  const token = response.data;
  return token;
};
