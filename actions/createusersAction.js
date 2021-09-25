import {
  ADD_USER,
  UPDATE_USER,
  FORM_SUBMITION_STATUS,
  LOGIN,
  UPDATE_PROFILE_PICTURE,
  USERS_ERROR,
} from '../types';
export const register = () => async dispatch => {
  try {
    const userToken =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMyIsImZpcnN0X25hbWUiOiJTdHVkZW50IE5hbWUiLCJsYXN0X25hbWUiOm51bGwsImVtYWlsIjoic2F1cmFiaGphZ2FuQGdtYWlsLmNvbSIsInJvbGUiOiJzdHVkZW50Iiwicm9sZV9pZCI6IjMiLCJ2YWxpZGl0eSI6MSwiaW1hZ2UiOiJodHRwczpcL1wvd3d3LmFzcGlyZWNvbGxlZ2UuY29cL3VwbG9hZHNcL3VzZXJfaW1hZ2VcLzMuanBnIn0.s4kAk16P509KtesZc_VzYmkWu7FuyE5SHg28qzLP3xY';
    const res = await axios.post(
      `https://www.aspirecollege.co/api/register/user`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-API-KEY': '64c3140d6e914e143b856bcbc9976f3218',
          //'X-Auth-Token': userToken ? userToken : '',
          // axios.defaults.headers.common["X-Auth-Token"] : `Bearer${token}`;
        },
      },
    );
    dispatch({
      type: ADD_USER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(error),
    });
  }
};
/*export function register (name, email, password) {
    return  function = () => async dispatch => {
      return axios.post("https://www.aspirecollege.co/api/register/user", {
         name,
         email,
         password,
    });
  })*/
const login = (username, password) => {
  return axios
    .post('https://www.aspirecollege.co/api/login', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-API-KEY': '64c3140d6e914e143b856bcbc9976f3218',
        //'X-Auth-Token': userToken ? userToken : '',
        // axios.defaults.headers.common["X-Auth-Token"] : `Bearer${token}`;
      },
      username,
      password,
    })
    .then(response => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};
