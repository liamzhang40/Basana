export const minDate = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  return yyyy + '-' + mm + '-' + dd;
};

export const formatDate = date => {
  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };
  const daysOfWeek = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
  };
  const obj = new Date(date);
  const month = months[obj.getMonth()];
  const day = obj.getDate() + 1;
  const year = obj.getFullYear();
  const dayOfWeek = daysOfWeek[obj.getDay()];
  return `${month} ${day}, ${year} (${dayOfWeek})`;
};

export const formatTime = date => {
  const obj = new Date(date);
  const fullHours = obj.getHours();
  let hours = fullHours % 12;
  if (hours === 0) hours = 12;
  const minutes = obj.getMinutes();
  const tmp = `0${minutes}`;
  const paddedMinutes = tmp.slice(tmp.length - 2);
  const ampm = fullHours < 12 || fullHours === 0 ? 'am' : 'pm';
  return `${hours}:${paddedMinutes}${ampm}`;
};

export const formatDateTime = date => (
  `${formatDate(date)} ${formatTime(date)}`
);
