export const toHtmlElement = (htmlStr) => {
  const template = document.createElement('template');
  template.innerHTML = htmlStr.trim();
  return template.content.firstChild;
};

export const importAll = (r) => r.keys().map(r);

export const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const addHours = (numOfHours, date = new Date()) => {
  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
  return date;
};
