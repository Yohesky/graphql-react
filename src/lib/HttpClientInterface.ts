export interface HttpClientInterface {
  get<T>(
    url: string,
    params?: Record<string, string>,
    headers?: Record<string, string>
  ): Promise<T>;
}
