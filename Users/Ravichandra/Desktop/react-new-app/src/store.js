import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { value: { username: "" } };
//slice is used to automatically generate all the different parts of the reducers
const userSlice = createSlice({
  name: "user",
  initialState,
  //Reducer is just a function it takes an arguments that state and action of the application
  //the state will be previous state of this application
  //the action will be something we get to modify that state
  reducers: {
    //initially state is empty string when ever we modify the username then it will be equal to the state
    login: (state, action) => {
      //action.payload takes an data which we are passing in username:""
      state.value = action.payload;
    },
    //it is just setting it to a empty string
    logout: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
