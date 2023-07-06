import React from 'react'
import './Body.css'
import Header from './Header'
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import SongRow from './SongRow';

function Body({spotify}) {
  const [{ daily_mix}] = useDataLayerValue(); //This is how you pull any elmnt frm data layer. (Avoiding prop drilling)


  return (
    <div className='body'>
      <Header spotify={spotify}/>

      <div className="body__info">
        <img src={daily_mix?.images[0].url}
        alt="Your Daily Mix" />

        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Daily Mix</h2>
          <p>{daily_mix?.description}</p>

        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledWhiteRoundedIcon className='body__shuffle'/>
          <FavoriteRoundedIcon fontSize='large'/>
          <MoreHorizRoundedIcon />
        </div>
        {/* List of songs */}
        {daily_mix?.tracks.items.map(item => (
          <SongRow track={item.track}/>
          ))}
      </div>
    </div>
  )
}

export default Body
