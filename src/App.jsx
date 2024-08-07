import { Navigate, Route, Routes } from 'react-router-dom';
import { C4DashboardPage } from './pages';
import { LoginPage } from './pages';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const App = () => {
    const status = 'authenticated'; //not-authenticated,  authenticated
    return (
        <Provider store={store}>
            <Routes>
                {status === 'not-authenticated' ? (
                    <>
                        <Route path='/auth/*' element={<LoginPage />} />
                        <Route path='/*' element={<Navigate to='/auth/login' />} />
                    </>
                ) : (
                    <>
                        <Route path='/*' element={<C4DashboardPage />} />
                    </>
                )}
            </Routes>
        </Provider>
    );
};
