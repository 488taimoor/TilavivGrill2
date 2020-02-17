import { Constants } from "../constants/settings";
import {settings} from '../Contexts/StoreSettingsContext'


export const ApiServer = {
  GetData
};

function GetData(api, data, method) {
  console.log("this is data", api, data, method);
  return fetch(settings.base_url + api, {
    method: method,
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    mode: "cors",

    body: method === "GET" ? null : JSON.stringify(data)
    // body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log("this is data", data);
      return { data, status: 200 };
    })
    .catch(err => {
      return { err, status: 404 };
    });
  // response.json().then(data=>{
  //   console.log("data:......" + data.signInStatus )
  //   console.log(data.userid);
  // if(data.signInStatus=='failure'){
  //   store.dispatch({type:login_Actions.login_SignIn.FAILURE,payload:data});
  //   return ;
  //   }
  // else if(data.signInStatus=='authorized') {
  //   console.log('userAuthoriedData:', data)
  //   localStorage.setItem('userToken', JSON.stringify(data.token))

  //   store.dispatch({type:login_Actions.login_SignIn.AUTHORIZED,payload:data});
  //   return ;
  // }
  // else if(data.signInStatus == 'not_authorized'){
  //   store.dispatch({type:login_Actions.login_SignIn.NOT_AUTHORIZED,payload:data});
  //   return ;
  // }

  //  });

  // return {type:login_Actions.login_SignIn.POST,payload:'none'};
}
