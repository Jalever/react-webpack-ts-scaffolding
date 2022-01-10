import qs from "query-string";
import request from "./request";

const METHOD = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete'
};
const API_PREFIX = "https://resource.alilo.com.cn/h5/oprations-manual";

export interface iParams {
  num: number
}

const getApi = (url?: string) => API_PREFIX + url;
export default {
  getData: (params: iParams) => request(getApi(`/${params.num}.json`), {}, METHOD.GET, false, false, false, false),
};
