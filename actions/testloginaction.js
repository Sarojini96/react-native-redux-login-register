import {LOGIN} from './types';
import axios from 'axios';

export const userLoginRequest = () => dispatch => {
  const userToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMyIsImZpcnN0X25hbWUiOiJTdHVkZW50IE5hbWUiLCJsYXN0X25hbWUiOm51bGwsImVtYWlsIjoic2F1cmFiaGphZ2FuQGdtYWlsLmNvbSIsInJvbGUiOiJzdHVkZW50Iiwicm9sZV9pZCI6IjMiLCJ2YWxpZGl0eSI6MSwiaW1hZ2UiOiJodHRwczpcL1wvd3d3LmFzcGlyZWNvbGxlZ2UuY29cL3VwbG9hZHNcL3VzZXJfaW1hZ2VcLzMuanBnIn0.s4kAk16P509KtesZc_VzYmkWu7FuyE5SHg28qzLP3xY';
  axios({
    method: 'post',
    url: 'https://www.aspirecollege.co/api/login',
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-API-KEY': '64c3140d6e914e143b856bcbc9976f3218',
    'X-Auth-Token': userToken ? userToken : '',
  })
    .then(userdata =>
      dispatch({
        type: LOGIN,
        payload: userdata,
      }),
    )
    .catch(error => {
      console.log(error);
    });
};
