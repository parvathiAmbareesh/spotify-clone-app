import React from 'react'
import "./Header.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Avatar from '@mui/material/Avatar';
import { useDataLayerValue } from './DataLayer';

function Header() {
    const[{user}] = useDataLayerValue() //destructuring & taking only playlists from datalayer cause that's all we need for sidebar

  return (
    <div className='header'>
      <div className="header__left">
        <SearchRoundedIcon/>
        <input placeholder =" Search for Artisits , Songs, or Albums" type="text"/>
        
      </div>

      <div className="header__right">
            <Avatar src={user?.images[0]?.url} alt={user}/>
            <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header

