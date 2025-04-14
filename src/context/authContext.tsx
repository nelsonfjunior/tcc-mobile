import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

interface AuthState {
    token: string;
    userId: string;
    isAuthenticated: boolean;
    login: (token: string, userId: string) => Promise<void>;
    logout: () => Promise<void>;
    loadToken: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    token: '',
    userId: '',
    isAuthenticated: false,

    login: async(token, userId) =>{
        await AsyncStorage.setItem("authToken", token);
        await AsyncStorage.setItem("userId", userId);
        set({ token, userId, isAuthenticated: true });
    },

    logout: async() => {
        await AsyncStorage.removeItem("authToken");
        await AsyncStorage.removeItem("userId");
        set({ token: '', userId: '', isAuthenticated: false });
    },

    loadToken: async () => {
        const storedToken = await AsyncStorage.getItem("authToken");
        const storedUserId = await AsyncStorage.getItem("userId");
        if (storedToken && storedUserId) {
            set({ token: storedToken, userId: storedUserId, isAuthenticated: true });
        }
    },

}));
