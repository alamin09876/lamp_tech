"use client";

import api, { setAuthToken } from "@/lib/api";
import { LoginResponse, User } from "@/types/auth";
import Cookies from "js-cookie";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = Cookies.get("access_token");
    const savedUser = Cookies.get("user");

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
      setAuthToken(savedToken);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const res = await api.post<LoginResponse>("/user/login", {
      email,
      password,
    });

    const { access_token, data } = res.data;

    setToken(access_token);
    setUser(data);

    Cookies.set("access_token", access_token, { expires: 7 }); // expires in 7 days
    Cookies.set("user", JSON.stringify(data), { expires: 7 });

    setAuthToken(access_token);
  };

  const logout = () => {
    setToken(null);
    setUser(null);

    Cookies.remove("access_token");
    Cookies.remove("user");

    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
