import type { HttpClientInterface } from "./HttpClientInterface";

export class HttpClient {
  constructor(private httpClient: HttpClientInterface) {}

  get<T>(
    url: string,
    params?: Record<string, unknown>,
    headers?: Record<string, unknown>
  ): Promise<T> {
    return this.httpClient.get<T>(url, params, headers);
  }
}
