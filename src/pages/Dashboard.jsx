import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ResponsiveGrid } from '../components/ResponsiveGrid';

export const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* <SideBar /> */}
            <Box component='main' sx={{ flexGrow: 1, p: 3, marginTop: '5px' }}>
                <Typography variant='h4'>Dashboard</Typography>
                <ResponsiveGrid />
            </Box>
        </Box>
    );
};
