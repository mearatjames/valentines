import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import hero from '../hero.mp4'

export default function Hero() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="videoContainer">
            <video autoPlay="true" muted loop="true" id="myVideo">
              <source src={hero} type="video/mp4" />
           </video>
        <Typography className="heroContent">Happy Valentine's Day Bor Bor</Typography>
      </div>
    </React.Fragment>
  );
}
