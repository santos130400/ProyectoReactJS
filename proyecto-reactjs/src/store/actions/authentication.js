import * as actionTypes from "./actionTypes";
import axios from "../../instances/axios-authentication";

const API_KEY = "AIzaSyCXhgUSFTgXz0KoZd7lijbkwuZhVpDb0HM";

const startAuthLoading = () => {
  return {
    type: actionTypes.START_LOADING_AUTH,
  };
};

const endAuthLoading = () => {
  return {
    type: actionTypes.END_LOADING_AUTH,
  };
};

const errorOn = () => {
  return {
    type: actionTypes.MESSAGE_ERROR,
  };
};


const saveSession = (userName, token, localId) => {
  return {
    type: actionTypes.LOGIN,
    payload: {
      userName: userName,
      idToken: token,
      localId: localId,
    },
  };
};

const saveSignUp = (userName, token, localId) => {
  return {
    type: actionTypes.SIGN_UP,
    payload: {
      userName: userName,
      idToken: token,
      localId: localId,
    },
  };
};

export const logIn = (authData, onSuccessCallback) => {
  return (dispatch) => {
    dispatch(startAuthLoading());
    axios
      .post("/accounts:signInWithPassword?key=" + API_KEY, authData)
      .then((response) => {
        const userEmail = authData.email;
        const token = response.data.idToken;
        const localId = response.data.localId;
        let userSession = {
          token,
          userEmail,
          localId,
        };

        userSession = JSON.stringify(userSession);

        console.log(response);

        localStorage.setItem("userSession", userSession);

        dispatch(saveSession(userEmail, token, localId));
        dispatch(endAuthLoading());

        if (onSuccessCallback) {
          onSuccessCallback();
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(endAuthLoading());
        dispatch(errorOn());
      });
  };
};

export const signUp = (authData, onSuccessCallback) => {
  return (dispatch) => {
    dispatch(startAuthLoading());
    axios
      .post("/accounts:signUp?key=" + API_KEY, authData)
      .then((response) => {
        const userEmail = authData.email;
        const token = response.data.idToken;
        const localId = response.data.localId;
        let userSession = {
          token,
          userEmail,
          localId,
        };

        userSession = JSON.stringify(userSession);

        console.log(response);

        localStorage.setItem("userSession", userSession);

        dispatch(saveSignUp(userEmail, token, localId));
        dispatch(endAuthLoading());

        if (onSuccessCallback) {
          onSuccessCallback();
        }
      })
      .catch((error) => {
        console.log(error);

        dispatch(endAuthLoading());
      });
  };
};

export const persistAuthentication = () => {
  return (dispatch) => {
    let userSession = localStorage.getItem("userSession");

    if (!userSession) {
      dispatch(logOut());
    } else {
      userSession = JSON.parse(userSession);

      dispatch(
        saveSession(
          userSession.userEmail,
          userSession.token,
          userSession.localId
        )
      );
    }
  };
};

export const logOut = () => {
  return {
    type: actionTypes.LOG_OUT,
  };
};
