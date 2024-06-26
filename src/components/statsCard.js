import React from 'react';
import { Typography, Paper } from '@mui/material';

function StatsCard({ title, value, subtitle }) { // NOSONAR
    return (
        <Paper data-testid="stats-card" elevation={2} style={{
            width: '200px',
            height: '100px',
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            textAlign: 'left',
            padding: '16px 24px',
            backgroundColor: 'transparent',
            borderRadius: '4px',
            margin: '0 1rem 0 0',
            boxSizing: 'border-box',
            border: 'none',
            boxShadow: 'none'
        }}>
            <Typography variant="subtitle1" style={{ fontWeight: 'bold'}}>
                {title}
            </Typography>
            <div style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                <Typography variant="h5" component="div" style={{ marginRight: '8px' }}>
                    {value}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {subtitle}
                </Typography>
            </div>
        </Paper>
    );
}

export default StatsCard;
