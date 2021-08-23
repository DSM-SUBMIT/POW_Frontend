import axios from "axios";

<<<<<<< HEAD
const fileURL = "https://ehddkfl.herokuapp.com/";
const crudURL = "https://powerofpow.herokuapp.com/";

=======
const ACCOUNT_BASEURL = "https://submit-pow.herokuapp.com";
const fileURL = "https://ehddkfl.herokuapp.com/";
const crudURL = "https://powerofpow.herokuapp.com/";

export const search = async (name) => {
  return axios.get(`${ACCOUNT_BASEURL}/club/search`, {
    params: {
      name,
    },
  });
};

export const clubPage = async (id) => {
  return axios.get(`${ACCOUNT_BASEURL}/clubpage/${id}`);
};

export const login = (code, password) => {
  return axios.post(`${ACCOUNT_BASEURL}/auth`, {
    code,
    password,
  });
};

export const getAccount = async () => {
  return axios.get(`${ACCOUNT_BASEURL}/club`);
};

export const deleteAccount = () => {
  return axios.delete(`${ACCOUNT_BASEURL}/account`, {
    headers: {
      Authorization: getToken(),
    },
  });
};

export const changePw = (existing_password, new_password) => {
  return axios.patch(
    `${ACCOUNT_BASEURL}/accout`,
    {
      existing_password,
      new_password,
    },
    {
      headers: {
        Authorization: getToken(),
      },
    }
  );
};

export const getToken = () => {
  const token = localStorage.getItem("token") || "guest";
  return `Bearer ${token}`;
};

>>>>>>> master
export const FileRequest = async (method, url, head, file) => {
  return await axios({
    method: method,
    url: fileURL + url,
    headers: head,
    data: file,
  }).then((e) => {
    console.log(e);
    return e;
  });
};

<<<<<<< HEAD
=======
export const PostCRUD = async (method, url, data, header) => {
  return await axios({
    method: method,
    url: crudURL + url,
    data: data,
    headers: header,
  }).then((e) => {
    console.log(e);
    return e;
  });
};

>>>>>>> master
export const ClubModify = (content, clubId, token) => {
  return axios
    .put(
      `${crudURL}club/${clubId}`,
      {
        contents: content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(function (response) {
<<<<<<< HEAD
=======
      alert("소개글이 수정되었습니다.");
      window.location.reload();
>>>>>>> master
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const PostModify = (
  title,
  content,
  startedAt,
  endedAt,
  clubId,
  projectId,
  token
) => {
  return axios
    .put(
      `${crudURL}club/${clubId}/project/${projectId}`,
      {
        title: title,
        contents: content,
        started_at: startedAt,
        ended_at: endedAt,
        club_id: clubId,
      },
      {
        headers: {
<<<<<<< HEAD
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(function (response) {
      console.log(response);
=======
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjM4MzE3NzgsInN1YiI6IjEiLCJleHAiOjE2MjQwNDIzODIsInR5cGUiOiJhY2Nlc3NfdG9rZW4ifQ.KOc1sbOUuPGpfp5Y-3azFMXSeCwGm2rouRYnXLDj78Q`,
        },
      }
    )
    .then(function () {
      alert("게시글이 수정되었습니다.");
      window.location.reload();
>>>>>>> master
    })
    .catch(function (error) {
      console.log(error);
    });
};

<<<<<<< HEAD
export const PostUpload = (
  title,
  content,
  startedAt,
  endedAt,
  clubId,
  token
) => {
  return axios
    .post(
      `${crudURL}club/${clubId}/project`,
      {
        title: title,
        contents: content,
        started_at: startedAt,
        ended_at: endedAt,
        club_id: clubId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

/*
export const ProjectIntro = () => {
  return axios
    .get(`${crudURL}club/${club_id}/project/${project_id}`, {})
    .then(function (response) {
      console.log(response);
    })
=======
export const DeletePost = (token, clubId, projectId) => {
  return axios.delete(`${crudURL}club/${clubId}/project/${projectId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const ProjectIntro = (clubId, projectId) => {
  return axios
    .get(`${crudURL}club/${clubId}/project/${projectId}`)
>>>>>>> master
    .catch(function (error) {
      console.log(error);
    });
};
<<<<<<< HEAD
*/
=======
>>>>>>> master
