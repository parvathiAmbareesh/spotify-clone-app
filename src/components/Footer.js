import React from 'react'
import "./Footer.css";
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import Grid from '@mui/material/Grid'; 
import Slider from '@mui/material/Slider'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
  return (
    <div className='footer'>
      <div className="footer__left">
        <img className="footer__albumLogo" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440" alt="" />
        <div className="footer__songInfo">
          <h4>Dreaming</h4>
          <p>Ryan Jones</p>

        </div>
      </div>

      <div className="footer__center">
        <ShuffleRoundedIcon className='footer__green'/>
        <SkipPreviousRoundedIcon className='footer__icon'/>
        <PlayCircleOutlineRoundedIcon fontSize='large' className='footer__icon'/>
        <SkipNextRoundedIcon className='footer__icon'/>
        <RepeatRoundedIcon className='footer__green'/>

      </div>

      <div className="footer__right">
      <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>

    </div>
  )
}

export default Footer
