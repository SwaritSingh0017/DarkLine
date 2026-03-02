import {create} from 'zustand';

export const useAuthStore = create((set) => ({
    authUser:{},
    isLoggedIn: false,

    login: () => {
        console.log("LOGIN FUNCTION CALLED");
        set({isLoggedIn: true});
    }
}));
