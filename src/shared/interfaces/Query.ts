import type { queryDictionary } from "../../lib/clients/graphql/querys";

export type QueryTypes = keyof typeof queryDictionary;
