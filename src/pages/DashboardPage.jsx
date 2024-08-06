import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ResponsiveGrid } from '../components/dashboard/ResponsiveGrid';
import { TextCard } from '../components/dashboard/TextCard';
import { ColorCard } from '../components/dashboard/ColorCard';

export const DashboardPage = () => {
    return (
        <>
            <Typography variant="h5" marginBottom={2}>
                Dashboard
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* <ResponsiveGrid /> */}
                <ColorCard colorFondo="Pink" />
                <ColorCard colorFondo="PaleGreen" />
                <ColorCard colorFondo="PaleTurquoise" />
                <TextCard />
                <TextCard />
            </Box>
        </>
    );
};
