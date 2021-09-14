const headers = (token) => ({
  Accept: "application/json",
  "Content-Type": "application/json",
  redirect: "follow",
});

const get = async (url) => {
  const response = await fetch(url, {
    method: "GET",
  });
  return await response.json();
};

const post = async (url, body, token) => {
  const response = await fetch(url, {
    method: "POST",
    headers: headers(token),
    body,
  });
  return await response.json();
};

const put = async (url, body, token) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: headers(token),
    body,
  });
  return await response.json();
};

const _delete = async (url, token) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: headers(token),
  });
  return await response.json();
};

export const http = {
  get,
  post,
  put,
  delete: _delete,
};
