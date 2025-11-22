export type ApiResponse<Key extends string, T> = {
  [K in Key]: {
    results: T[];
  };
};
