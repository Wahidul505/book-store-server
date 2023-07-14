export const checkDateFormat = (date: string): boolean => {
  if (/^(0[1-9]|1\d|2\d|3[01])-(0[1-9]|1[0-2])-\d{4}$/.test(date)) {
    return true;
  } else return false;
};
