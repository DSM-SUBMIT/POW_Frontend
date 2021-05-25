import axios from 'axios';

const fileURL = 'https://ehddkfl.herokuapp.com/';

export const FileRequest = async(method, url, head, data) => {
  return await axios({
    method: method,
    url: 'https://ehddkfl.herokuapp.com/public/images/DefaultImage.png',
    headers: head,
    data: data
  }).then((e)=>{
    console.log(e);
    return e;
  });
}