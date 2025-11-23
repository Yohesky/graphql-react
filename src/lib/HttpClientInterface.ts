export interface HttpClientInterface {
  get<T>(
    url: string,
    params?: Record<string, unknown>,
    headers?: Record<string, unknown>
  ): Promise<T>;
}
