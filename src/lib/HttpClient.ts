import type { HttpClientInterface } from "./HttpClientInterface";

export class HttpClient {
  constructor(private httpClient: HttpClientInterface) {}

  get<T>(
    url: string,
    params?: Record<string, string>,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.httpClient.get<T>(url, params, headers);
  }
}
