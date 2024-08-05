import { SideBar } from './components/SideBar';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Dashboard, Product, Settings } from './pages';

const navArrayLinks = [
    {
        title: 'Home',
        path: '/',
        icon: <InboxIcon />,
    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <DashboardIcon />,
    },
    {
        title: 'Products',
        path: '/products',
        icon: <DraftsIcon />,
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <MenuIcon />,
    },
];

export const App = () => {
    return (
        <>
            <SideBar navArrayLinks={navArrayLinks} />
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/product" element={<Product />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes> */}
        </>
    );
};
