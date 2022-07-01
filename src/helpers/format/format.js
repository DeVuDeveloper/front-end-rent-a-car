import StorageManager from '../StorageManager';

export const userStatus = () => {
  const auth = StorageManager.getToken();
  if (
    auth.token === ''
    || !auth
    || (auth.token !== '' && dateDiff(auth.exp_date.toString()) === 1)
  ) {
    return false;
  }
  return true;
};


export const notification = (message, type) => {
  if (type === true) {
    return toast.success(message);
  }
  return toast.error(message);
};