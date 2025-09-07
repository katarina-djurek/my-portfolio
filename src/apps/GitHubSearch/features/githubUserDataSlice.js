import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk(
  "userData/fetchUserData",
  async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error("User not found!");
    return await response.json();
  }
);

export const fetchUserRepoData = createAsyncThunk(
  "userRepoData/fetchUserRepoData",
  async (username) => {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    return await response.json();
  }
);

const initialState = {
  userInputValue: "",
  userData: {},
  userRepoData: [],
  isButtonPressed: true,
  loading: false,
  error: null,
};

const githubUserDataSlice = createSlice({
  name: "githubUserData",
  initialState,
  reducers: {
    changeInputValue: (state, action) => {
      state.userInputValue = action.payload;
    },
    toggleIsButtonPressed: (state) => {
      state.isButtonPressed = !state.isButtonPressed;
    },
    resetInputValue: (state) => {
      state.userInputValue = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(fetchUserRepoData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserRepoData.fulfilled, (state, action) => {
        state.loading = false;
        state.userRepoData = action.payload;
      })
      .addCase(fetchUserRepoData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { changeInputValue, toggleIsButtonPressed, resetInputValue } =
  githubUserDataSlice.actions;

export default githubUserDataSlice.reducer;
