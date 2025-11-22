export interface HttpClientInterface {
  get<T>(url: string, headers?: Record<string, string>): Promise<T>;
}
