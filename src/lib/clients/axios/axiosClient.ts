import type { HttpClientInterface } from "../../HttpClientInterface";
import { axiosClient } from "./axiosConfig";

export class AxiosClient implements HttpClientInterface {
  async get<T>(url: string, params?: Record<string, string>): Promise<T> {
    const { data } = await axiosClient.get(url, { params });
    return data;
  }
}
