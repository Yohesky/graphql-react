export const getCharacterId = (characterUrl: string): string => {
  const parts = characterUrl.split("/");
  return parts[parts.length - 1];
};
