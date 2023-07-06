import React, { useEffect} from 'react';
import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './components/DataLayer';

const spotify = new SpotifyWebApi(); //creating an instance of Spotify in this app.

function App() {

  // const [token, setToken] = useState(null);
  //dispatch needed to update values in dataLayer
  //PULLING VALUES FROM DATA LAYER
  const [{ token }, dispatch] = useDataLayerValue(); //This is how you pull any elmnt frm data layer. (Avoiding prop drilling)

  useEffect(() => { //getting the token and putting into 'token'
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if(_token){

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      // setToken(_token)//storing token in state, memory basically

      spotify.setAccessToken(_token); //giving the token to Spotify API, to talk bn react and the app

      //getting the user's account and its a promise
      spotify.getMe().then(
        user => {
          // console.log('🧑', user);
          dispatch({
            type: 'SET_USER',
            user: user
          })
        }
      ) 
        spotify.getUserPlaylists().then ((playlists) => 
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        }))

        spotify.getPlaylist('37i9dQZF1E37FwtHhRIZ7T').then((response) => 
          dispatch({
              type: "SET_DAILY_MIX",
              daily_mix: response
          }))
    }

  }
  );

  // console.log('🧑', user);
  // console.log('👽', token);

  return (
    <div className="app"> 
    {
      token ?  <Player spotify={spotify}/> : <Login/> //after :, is else
     
    }     
      
    </div>
  );
}
export default App;
