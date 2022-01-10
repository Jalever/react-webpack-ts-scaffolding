import { Stringifiable } from "query-string";

export interface iListRow {
  // this is iListRow
  id: number,
  name: string,
  resList: any,
  type: number,
  [propname: string]: any
}

