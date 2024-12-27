import create from 'zustand';

export const useAuthStore = create((set) => ({
    status: 'checking', //'checking', 'authenticated' , 'not-authenticated'
    uid: null,
    name: null,
    email: null,
    photoURL: null,
    errorMessage: null,
    checking: () =>
        set(() => ({
            status: 'checking',
            uid: null,
            name: null,
            email: null,
            photoURL: null,
            errorMessage: null,
        })),
    onLogin: (payload) =>
        set(() => ({
            status: 'authenticated',
            uid: payload.uid,
            name: payload.name,
            email: payload.email,
            photoURL: payload.photoURL,
            errorMessage: null,
        })),
    onLogin: (payload) => set(() => ({})),
    onLogout: (payload) => set(() => ({})),
    clearErrorMesage: () => set(() => ({})),
}));
