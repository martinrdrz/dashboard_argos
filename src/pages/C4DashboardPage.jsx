import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { SideBar } from '../components/navbar/SideBar';

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

export const C4DashboardPage = () => {
    return (
        <>
            <SideBar navArrayLinks={navArrayLinks} />
        </>
    );
};
