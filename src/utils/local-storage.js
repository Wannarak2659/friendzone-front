const ACCESS_TOKEN = "ACCESS_TOKEN";

// # pull access token from local storage
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

// set token after login
export const setAccessToken = (accessToken) =>
  localStorage.setItem(ACCESS_TOKEN, accessToken);

// ## logout from web
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);
