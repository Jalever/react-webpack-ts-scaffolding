
export function getQueryByKey(key: string) {
  let data: { [prop: string]: any } = {};

  let src: string = window.location.href;
  let index = src.indexOf("?");
  if (index === -1) return null;
  let dataStr = src.substring(src.indexOf("?") + 1);
  let dataArray = dataStr.split("&");
  for (let i = 0; i < dataArray.length; i++) {
    let param = dataArray[i].split("=");
    data[param[0]] = param[1];
  }
  return data[key];
}


export function sleep(time: number) {
  return new Promise((resolve: any) => setTimeout(resolve, time))
}