import { Container, Paper, Typography } from '@mui/material';
import React from 'react';

const AboutPage: React.FC = () => (
    <Container sx={{ my: 5 }}>
        <Paper sx={{ p: 5 }}>
            <Typography component="h1" variant="h5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, cumque eveniet. Fugit deleniti, odit quia culpa in maiores iure eveniet aut officiis, impedit autem molestias, asperiores eaque temporibus accusamus voluptatibus?</Typography>
        </Paper>
    </Container>
);

export default AboutPage;
