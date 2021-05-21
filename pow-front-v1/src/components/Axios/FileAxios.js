import axios from 'axios';

export const FileRequest = (method, url, head, data) => {
  return axios({
    method: method,
    url: baseURL + url,
    headers: head,
    data: data
  }).then((e)=>{
    console.log(e);
    return e;
  });
}