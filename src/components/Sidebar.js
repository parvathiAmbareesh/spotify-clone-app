import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const[{playlists}] = useDataLayerValue() //destructuring & taking only playlists from datalayer cause that's all we need for sidebar

  return (
    <div className= "sidebar">
      <img className='sidebar__logo'
      src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="sidebar logo" />

      <SidebarOption title="Home" Icon={HomeRoundedIcon}/>
      <SidebarOption title="Search" Icon={SearchRoundedIcon}/>
      <SidebarOption title="Your Library"Icon={LibraryMusicRoundedIcon} />

      <br/>
      <strong className='sidebar_title'>PLAYLISTS</strong>
      <hr/>
      {playlists?.items?.map(playlist =>(
        <SidebarOption title={playlist.name}/>
      )) }

    </div>
  )
}

export default Sidebar
