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

// Signup
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

// Create Product
interface ProductPayload {
  product_name: string;
  product_price: string;
  product_details: string;
}
export const createProduct = async (data: ProductPayload) => {
  const response = await api.post("/user/product/store", data);
  return response.data;
};

export default api;
