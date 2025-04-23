import axios from "axios";

const api = axios.create({
  baseURL: "https://frontend-test.lamptechs.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// 🔥 SIGNUP API function
interface SignupPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export const signup = async (data: SignupPayload) => {
  const response = await api.post("/public/user/store", data);
  return response.data;
};

export default api;
