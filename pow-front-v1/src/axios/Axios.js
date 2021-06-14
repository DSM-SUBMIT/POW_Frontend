import axios from "axios";

const fileURL = "https://ehddkfl.herokuapp.com/";
const crudURL = "https://powerofpow.herokuapp.com/";
const clubURL = "https://submit-pow.herokuapp.com";

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

export const ClubPage = (id) => {
  return axios.get(`${clubURL}/clubpage/${id}`).catch(function (error) {
    console.log(error);
  });
};

export const DeletePost = (token, clubId, projectId) => {
  return axios
    .delete(`${crudURL}/club/${clubId}/project/${projectId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const ProjectIntro = (clubId, projectId) => {
  return axios
    .get(`${clubURL}/club/${clubId}/project/${projectId}`)
    .catch(function (error) {
      console.log(error);
    });
};
