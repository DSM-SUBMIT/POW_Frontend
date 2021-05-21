import axios from 'axios';

const baseURL = 'https://ehddkfl.herokuapp.com/';

export const FileRequest = async(method, url, head, data) => {
  return await axios({
    method: method,
    url: baseURL + url,
    headers: head,
    data: data
  }).then((e)=>{
    console.log(e);
    return e;
  });
}