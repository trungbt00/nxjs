import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
    language: string;
}

const initialState: LanguageState = {
    language: typeof window !== 'undefined' ? localStorage.getItem("language") || "vi" : "vi",
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
            if (typeof window !== 'undefined') {
                localStorage.setItem("language", action.payload);
            }
        }
    }
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
