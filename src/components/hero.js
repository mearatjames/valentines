import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Hero() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <video autoPlay muted loop height="640" width="320" >
          <source src="../hero.mp4" type="video/mp4"></source>
        </video>
      </Container>
    </React.Fragment>
  );
}
