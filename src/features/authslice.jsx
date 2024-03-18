import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  userData: {},
  isloggedIn: false,
  isLoading: false,
  token: "",
  userEdited: false,
  Errorr: "",
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    endLoading: (state) => {
      state.isLoading = false;
    },
    login: (state, action) => {
      state.userData = action.payload;
      state.isloggedIn = true;
      state.isLoading = true;
    },
    logout: (state) => {
      state.userData = null;
      state.isloggedIn = false;
      state.token = null;
    },
    tokenStore: (state, action) => {
      state.token = action.payload;
    },
    Errorr: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { login, tokenStore, startLoading, endLoading, Errorr, logout } =
  authSlice.actions;

export default authSlice.reducer;

export const LoginUser = (data, navigate) => async (dispatch) => {

  try {
    console.log("start login")
    dispatch(startLoading());
    const response = await axios.post(
      "https://afriroot.onrender.com/auth/login/",
      data
    );
  console.log(response)
   
     dispatch(login(response.data.userdata));
    console.log(response.data.userdata, 'userdata')
    console.log(response.data.token,'token')
    localStorage.setItem("logindata", JSON.stringify(response.data.userdata));
    localStorage.setItem("token", response.data.token);
    dispatch(tokenStore(response.token));
    dispatch(endLoading());

    navigate("/courses");
  } catch (err) {
    dispatch(endLoading());
    const error_message = "Invalid credentials";
    console.log(err, "error");
    toast.error(error_message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};


export const LogoutUser = (navigate) => (dispatch) => {
  localStorage.removeItem("logindata");
  localStorage.removeItem("token");
  dispatch(logout(""));
  navigate("/");
  window.location.reload();
};

