export const checkCredentials = ({ login, password }) => {
  if (
    login === '1' &&
    password === '1'
  ) {
    return true;
  }

  return false;
}
