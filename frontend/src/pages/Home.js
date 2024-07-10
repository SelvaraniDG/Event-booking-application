// src/pages/Home.js

import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.css';

const Home = () => {
  const events = [
    { title: 'Event 1', description: 'Description for Event 1', image: 'https://via.placeholder.com/150' },
    { title: 'Event 2', description: 'Description for Event 2', image: 'https://via.placeholder.com/150' },
    // Add more events as needed
  ];

  return (
    <div>
      <Header />
      <Container>
        <Grid container spacing={4} style={{ marginTop: '20px' }}>
          {events.map((event, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={event.image}
                  alt={event.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {event.description}
                  </Typography>
                </CardContent>
                <Button size="small" color="primary">Learn More</Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;