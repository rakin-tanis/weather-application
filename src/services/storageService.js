const SEARCH_LIST = 'SEARCH_LIST';
const LAST_SEARCHED_ITEM = 'LAST_SEARCHED_ITEM';
const PERMISSION = 'PERMISSION';

export const saveSearchList = (searchList) =>
  localStorage.setItem(SEARCH_LIST, toString(searchList));

export const getSearchList = () =>
  toJson(localStorage.getItem(SEARCH_LIST)) || [];

export const resetSearchList = () => saveSearchList([]);

export const saveLastSearchedItem = (item) =>
  localStorage.setItem(LAST_SEARCHED_ITEM, toString(item));

export const getLastSearchedItem = () =>
  toJson(localStorage.getItem(LAST_SEARCHED_ITEM));

export const removeLastSearchedItem = () =>
  localStorage.removeItem(LAST_SEARCHED_ITEM);

export const savePermission = (permission) =>
  localStorage.setItem(PERMISSION, permission);

export const getPermission = () => localStorage.getItem(PERMISSION);

export const removePermission = () => localStorage.removeItem(PERMISSION);

export const clearStorage = () => localStorage.clear();

const toString = (obj) => JSON.stringify(obj);

const toJson = (str) => JSON.parse(str);
