import { useDispatch, useSelector } from 'react-redux';
import { calendarApi } from '../api';
import { checking, clearErrorMesage, onLogin, onLogout } from '../store';

export const useAuthStore = () => {
    const { status, user, errorMessage } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
        dispatch(checking());
        try {
            const { data } = await calendarApi.post('/auth', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }));
        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMesage());
            }, 20);
        }
    };

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogoutCalendar());
        dispatch(onLogout());
    };

    // const checkAuthToken = async () => {
    //     const token = localStorage.getItem('token');
    //     if (!token) return dispatch(onLogout());
    //     try {
    //         const { data } = await calendarApi.get('/auth/renew');
    //         localStorage.setItem('token', data.token);
    //         localStorage.setItem('token-init-date', new Date().getTime());
    //         dispatch(onLogin({ name: data.name, uid: data.uid }));
    //     } catch (error) {
    //         localStorage.clear();
    //         dispatch(onLogout());
    //     }
    // };

    return {
        //Propiedades
        errorMessage,
        status,
        user,

        //Metodos
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout,
    };
};
