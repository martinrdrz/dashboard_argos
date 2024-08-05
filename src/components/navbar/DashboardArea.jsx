import { Typography } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard, Home, Product, Settings } from '../../pages';

export const DashboardArea = () => {
    return (
        <>
            <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at
                ultrices mi tempus imperdiet.
            </Typography>
            <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam
                dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
                lacus sed viverra tellus.
            </Typography>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/products' element={<Product />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
        </>
    );
};
