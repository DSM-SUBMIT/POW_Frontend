import axios from "axios";

const ACCOUNT_BASEURL="https://submit-pow.herokuapp.com";
const fileURL = "https://ehddkfl.herokuapp.com/";
const crudURL = "https://powerofpow.herokuapp.com/";

export const deleteAccount = () => {
  return axios.delete(`${ACCOUNT_BASEURL}/account`, {
    headers: {
      Authorization: `Bearer${getToken}`
    }
  })
}

export const changePw = (password) => {
  return axios.put(`${ACCOUNT_BASEURL}/account`, {
    password
  }, {
    headers: {
      Authorization: `Bearer${getToken}`
    }
  })
}

export const getToken = () => {
  const token = localStorage.getItem('token') || 'guest';
  return `bearer ${token}`;
}

export const login = (code, password) => {
  return axios.post(`${ACCOUNT_BASEURL}/auth`, {
    code, password
  }) 
}

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
    .catch(function (error) {
      console.log(error);
    });
};
*/
