import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/login", { email, password });
  }

  static async registration(
    email: string,
    name: string,
    password: string,
    avatar: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/registration", {
      email,
      name,
      password,
      avatar,
    });
  }

  static async logout(): Promise<void> {
    return $api.post("/logout");
  }
}
