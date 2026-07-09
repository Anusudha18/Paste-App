import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pastes: JSON.parse(localStorage.getItem("pastes")) || [],
};

const pasteSlice = createSlice({
  name: "paste",
  initialState,

  reducers: {
    addPaste: (state, action) => {
      state.pastes.push(action.payload);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
    },

    updatePaste: (state, action) => {
      const index = state.pastes.findIndex(
        (paste) => paste.id === action.payload.id
      );

      if (index !== -1) {
        state.pastes[index] = action.payload;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
      }
    },

    removePaste: (state, action) => {
      state.pastes = state.pastes.filter(
        (paste) => paste.id !== action.payload
      );

      localStorage.setItem("pastes", JSON.stringify(state.pastes));
    },
  },
});

export const { addPaste, updatePaste, removePaste } = pasteSlice.actions;

export default pasteSlice.reducer;