import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, C4DashboardPage } from '../pages';
import { useAuthStore } from '../hooks';

export const AppRouter = () => {
    const { status } = useAuthStore();

    // useEffect(() => {
    //     checkAuthToken();
    // }, []);

    if (status === 'checking') {
        return <h3>Cargando . . .</h3>;
    }

    return (
        <Routes>
            {status === 'not-authenticated' ? (
                <>
                    <Route path="/auth/*" element={<LoginPage />} />
                    <Route path="/*" element={<Navigate to="/auth/login" />} />
                </>
            ) : (
                <>
                    <Route path="/*" element={<C4DashboardPage />} />
                </>
            )}
        </Routes>
    );
};
