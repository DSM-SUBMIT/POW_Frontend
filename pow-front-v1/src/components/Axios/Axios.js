import axios from 'axios';

const fileURL = 'https://ehddkfl.herokuapp.com/';

export const FileRequest = async(method, url, head, file) => {
  return await axios({
    method: method,
    url: fileURL + url,
    headers: head,
    data: file
  }).then((e)=>{
    console.log(e);
    return e;
  });
}