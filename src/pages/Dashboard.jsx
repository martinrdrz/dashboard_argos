import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* <SideBar /> */}
            <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '5px' }}>
                <Typography variant="h4">Dashboard</Typography>
            </Box>
        </Box>
    );
};
