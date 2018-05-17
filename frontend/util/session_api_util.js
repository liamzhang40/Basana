export const signup = formData => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    contentType: false,
    processData: false,
    data: formData
  });
};

export const editProfile = user => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: { user }
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
