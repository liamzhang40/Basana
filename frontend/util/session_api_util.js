export const signup = formData => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    contentType: false,
    processData: false,
    data: formData
  });
};

export const login = formData => {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    contentType: false,
    processData: false,
    data: formData
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/session'
  });
};
