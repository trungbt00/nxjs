import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isLoggedIn: boolean;
    userEmail: string;
    userName: string;
    userPhone: string;
    userId: string;
    userPermissions: string[];
}

const initialState: AuthState = {
    isLoggedIn: typeof window !== 'undefined' ? localStorage.getItem("isLoggedIn") === "true" : false,
    userEmail: typeof window !== 'undefined' ? localStorage.getItem("userEmail") || "" : "",
    userName: typeof window !== 'undefined' ? localStorage.getItem("userName") || "" : "",
    userPhone: typeof window !== 'undefined' ? localStorage.getItem("userPhone") || "" : "",
    userId: typeof window !== 'undefined' ? localStorage.getItem("userId") || "" : "",
    userPermissions: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("userPermissions") || "[]") : []
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthState>) => {
            Object.assign(state, action.payload);
            if (typeof window !== 'undefined') {
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userEmail", action.payload.userEmail);
                localStorage.setItem("userName", action.payload.userName);
                localStorage.setItem("userPhone", action.payload.userPhone);
                localStorage.setItem("userId", action.payload.userId);
                localStorage.setItem("userPermissions", JSON.stringify(action.payload.userPermissions));
            }
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userEmail = "";
            state.userName = "";
            state.userPhone = "";
            state.userId = "";
            state.userPermissions = [];
            if (typeof window !== 'undefined') {
                localStorage.clear();
            }
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
