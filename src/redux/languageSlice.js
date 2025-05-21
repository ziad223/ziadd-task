import { createSlice } from '@reduxjs/toolkit';

// قراءة اللغة المحفوظة في localStorage أو تعيين اللغة الافتراضية 'ar'
const initialState = {
  language: localStorage.getItem('language') || 'ar',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem('language', action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
