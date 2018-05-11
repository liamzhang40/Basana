export const signup = user => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: { user }
  });
};

export const fetchMembers = member_ids => {
  return $.ajax({
    method: 'GET',
    url: 'api/users',
    data: { member_ids }
  });
};

export const login = user => {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: { user }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/session'
  });
};
